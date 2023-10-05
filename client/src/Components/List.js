import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import EditForm from "./EditForm";

const List = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [edit, setEdit] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    return async () => {
      try {
        const req = await axios.get("http://localhost:4000/");
        console.log("useEffect Running");
        setData(req.data.playersDetail);
      } catch (err) {
        console.log(err);
      }
    };
  }, [refresh]);

  const deleteHandler = async (id) => {
    try {
      const req = await axios.post("http://localhost:4000/d", { id });
      console.log("Delete Button Clicked");
      setTimeout(() => {
        return setRefresh(req.data);
      }, 1200);
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = async (id, name, dob, team, role) => {
    let editData = {
      id,
      name,
      dob,
      team,
      role,
    };
    setEdit(editData);

    // editData.name=name
    // try{
    //   const req=await axios.post('http://localhost:4000/e',{id,name,dob,team,role})
    //   console.log('Edit Button Clicked',req.data)
    //   setTimeout(()=>{return setRefresh(req.data)},1200)
    // }
    // catch(err){
    //   console.log(err)
    // }
  };
  // console.log('Searching for - ',searchValue)

  return (
    <div>
      <NavBar />
      {edit !== null && <EditForm editData={edit} refresh={setRefresh} />}
      <div style={{ margin: "1% 5%" }}>
        <div style={{ margin: "3% 0%" }}>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={(event) => setSearchValue(event.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <ListGroup as="ol" numbered>
          {data !== null ? (
            data.map((i) => {
              return (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  key={i.id}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <b>Name</b> - {i.name}
                    </div>
                    <b>DOB</b> - {i.dob}
                    <br />
                    <b>National Team</b> - {i.team}
                    <br />
                    <b>Playing Role</b> - {i.role}
                  </div>
                  <Button
                    variant="info"
                    size="sm"
                    style={{ borderRadius: "30px" }}
                    onClick={() =>
                      editHandler(i.id, i.name, i.dob, i.team, i.role)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ borderRadius: "30px" }}
                    onClick={() => deleteHandler(i.id)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              );
            })
          ) : (
            <p>Loading....</p>
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default List;
