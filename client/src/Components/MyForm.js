import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import axios from 'axios'
import NavBar from './NavBar'

const MyForm = () => {

  const name=useRef('')
  const dob=useRef('')
  const team=useRef('')
  const role=useRef('')

  const submitHandler =async(event)=>{
    event.preventDefault()
    const formData = {
      name:name.current.value,
      dob:dob.current.value,
      team:team.current.value,
      role:role.current.value
    }
    try{
      const req=await axios.post('http://localhost:4000/p', formData)
      console.log(req.data)
    }
    catch(err){
      console.log(err)
    }
    name.current.value=''
    dob.current.value=''
    team.current.value=''
    role.current.value=''

    console.log('CLICKED')
  }

  return (
    <div>
      <NavBar />
    <div style={{margin:'10vh 25vw'}}>
      <h3>Enter The Player Details Here...</h3>
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="enter the name.." ref={name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="date of birth.." ref={dob}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>National Team</Form.Label>
          <Form.Control type="text" placeholder="which team.." ref={team}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Playing Role</Form.Label>
          <Form.Control type="text" placeholder="enter the role.." ref={role}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default MyForm;
