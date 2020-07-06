import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Radium from 'radium';
import React from 'react';

const styles = {
  navButton: {
    backgroundColor: '#000',
    textDecoration: 'none',
    borderRadius: '3px',
    ':hover': {
      backgroundColor: '#0F0',
    },
  },
};

const CustomNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <a href={'/#'}>
          <h1>Kaushik Mahadevan</h1>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex ml-auto">
          <a
            style={styles.navButton}
            className="p-2"
            href="#home"
            key="navButton1">
            Home
          </a>
          <a
            style={styles.navButton}
            className="p-2"
            href="#about"
            key="navButton2">
            About
          </a>
          <a
            style={styles.navButton}
            className="p-2"
            href="#contact"
            key="navButton3">
            Contact
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Radium(CustomNav);
