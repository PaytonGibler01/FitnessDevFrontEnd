import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
const NavBar = () => {
  return (
    <>
    <br />
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="home">Fitness Tracker</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="activities">Activities</Nav.Link>
        <Nav.Link href="my-routines">My Routines</Nav.Link>
        <Nav.Link href="exp-routines">Explore Routines</Nav.Link>
      </Nav>
       
      <Nav className="me-auto">
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="register">Register</Nav.Link>
      </Nav>
      
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
