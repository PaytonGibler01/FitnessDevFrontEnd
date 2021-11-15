import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import {Link, useHistory } from "react-router-dom";
// import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useHistory()
  return (
    <>
    <br />
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand type="submit"
        onClick={()=>{
          history.push("/home")
        }}>Fitness Tracker</Navbar.Brand>
      <Nav className="me-auto">

        <Nav.Link 
        type="submit"
        onClick={()=>{
          history.push("/activities")
        }}
        >Activities</Nav.Link>

        <Nav.Link type="submit"
        onClick={()=>{
          history.push("/my-routines")
        }}>My Routines</Nav.Link>

        <Nav.Link type="submit"
        onClick={()=>{
          history.push("/exp-routines")
        }}>Explore Routines</Nav.Link>
      </Nav>
       
      <Nav className="me-auto">
         { isLoggedIn ? (
            <Nav.Link href="login" onClick = {()=>{
               localStorage.clear()
               setIsLoggedIn(false)
            }}
            >Logout</Nav.Link>
         ):(null)}

         { ! isLoggedIn ? (
            <>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            </>
         ):(null)}

      </Nav>
      
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
