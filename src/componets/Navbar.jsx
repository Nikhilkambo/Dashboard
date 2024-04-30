import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Nav } from 'react-bootstrap';
import React from 'react'
import { useNavigate ,Link} from 'react-router-dom';

export default function Navbar_header() {
  const navigate =useNavigate();
  const logout =()=>{
      localStorage.clear();
      navigate('/login')
  }
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" >
      <Navbar.Brand href="#">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link}  to="/">Home</Nav.Link>
          <Nav.Link to="/">About</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
          <Nav.Link href="/">Contact</Nav.Link>
          <Nav.Link onClick={logout} to="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    </>
  )
}
