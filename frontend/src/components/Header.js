import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import kiitMechLogo from '../kiit_mech_logo.png'; // Adjust the path if your Header component is inside a different directory
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

const Header = () => {
  return (
    <header style={{ zIndex: 1000, position: 'relative', left: '0' }}>
      <Navbar style={{ background: 'linear-gradient(to right, rgb(50, 200, 50), rgb(255, 255, 255))' }} variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Image src={kiitMechLogo} style={{ position: 'absolute', top: '5px', right: '30px', height: '80px', width: '315px' }} />
          <LinkContainer to={"/"}>
            <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '100px', fontFamily: 'Roboto, sans-serif' }}>
              SDA- Sensor Data Analyzer
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* If you have other components or elements to be added here, you can do so */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
