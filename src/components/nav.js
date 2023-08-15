import React from "react";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown'

import { useState } from "react";

import "../index.css";

const linkStyle = {
  color: "white",
}

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky="top" bg="dark" data-bs-theme = "dark" expand="lg" expanded={expanded}>
        
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
          
            <Nav.Link href="#/" onClick={() => setExpanded(false)} style={linkStyle} className="nav-link">HOME</Nav.Link>

            <Nav.Link href="#/about" onClick={() => setExpanded(false)} style={linkStyle} className="nav-link">ABOUT</Nav.Link>

            <Nav.Link href="#/projects" onClick={() => setExpanded(false)} style={linkStyle} className="nav-link">MISSION STATEMENT</Nav.Link>

            <Nav.Link href="#/services" onClick={() => setExpanded(false)} style={linkStyle} className="nav-link">SERVICES</Nav.Link>

            

            

            <Nav.Link href="#/contact" onClick={() => setExpanded(false)} style={linkStyle} className="nav-link">CONTACT</Nav.Link>

          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
