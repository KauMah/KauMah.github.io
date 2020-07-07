import {
  $black,
  $navButtonActive,
  $primary,
  $white,
} from '../../assets/colors';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Radium from 'radium';
import React from 'react';
import _ from 'lodash';

const styles = {
  bar: {
    backgroundColor: 'rgba(255, 255, 255, 0.5',
  },
  brand: {
    color: $black,
    textDecoration: 'none',
    transition: 'color 0.3s',
    ':hover': {
      textDecoration: 'none',
      color: '$white',
    },
  },
  link: {
    textDecoration: 'none',
  },
  navButton: {
    backgroundColor: $primary,
    color: $black,
    textDecoration: 'none',
    transition: 'background-color 0.3s, color .3s',
    ':hover': {
      backgroundColor: $navButtonActive,
      color: $white,
    },
  },
};
interface buttonTemp {
  name: string;
  href: string;
}

const navButtons: Array<buttonTemp> = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const CustomNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.bar}>
      <Navbar.Brand>
        <a href={'/#'} style={styles.link}>
          <h3 style={styles.brand}>KAUSHIK MAHADEVAN</h3>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex ml-auto">
          {_.map(navButtons, (button: buttonTemp, index: number) => {
            return (
              <a
                style={styles.navButton}
                className="p-2"
                href={button.href}
                key={`navButton${index}`}>
                {button.name.toUpperCase()}
              </a>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Radium(CustomNav);
