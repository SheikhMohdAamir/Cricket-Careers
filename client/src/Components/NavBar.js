import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Cricket Careers</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginRight:'1vw'}}>Form</Link>
            <Link to="/list">List</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
