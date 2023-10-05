import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import axios from "axios";

const EditForm = (props) => {
  const name = useRef("");
  const dob = useRef("");
  const team = useRef("");
  const role = useRef("");
//   name.current.value= 'Chalra h'
//   dob.current.value=props.editData.dob
//   team.current.value=props.editData.team
//   role.current.value=props.editData.role

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      id:props.editData.id,
      name: name.current.value,
      dob: dob.current.value,
      team: team.current.value,
      role: role.current.value,
    };
    console.log(formData)
    try {
      const req = await axios.post("http://localhost:4000/e", formData);
      console.log(req.data);
      setTimeout(()=>{return props.refresh(req.data) },1200)
    } catch (err) {
      console.log(err);
    }
    console.log("CLICKED");
    
  };
  return (
    <div>
      <div style={{ margin: "10vh 25vw" }}>
        <h3>You Can Edit The Player Details Here...</h3>
        <br />
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter the name.."
              ref={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="date of birth.." ref={dob} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>National Team</Form.Label>
            <Form.Control type="text" placeholder="which team.." ref={team} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Playing Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter the role.."
              ref={role}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit Changes
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditForm;
