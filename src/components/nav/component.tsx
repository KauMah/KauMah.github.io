import {
    $black,
    $navButtonActive,
    $primary,
    $white,
} from '../../assets/colors';

import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Radium from 'radium';
import React from 'react';
import _ from 'lodash';

const styles = {
    bar: {
        background:
            'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 25%, rgba(255,255,255,.3) 100%)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        height: '72px',
        position: 'fixed' as 'fixed',
    },
    brand: {
        color: $black,
        textDecoration: 'none',
        transition: 'color 0.3s',
        marginTop: '-10px',
        ':hover': {
            textDecoration: 'none',
            color: $white,
        },
    },
    navBox: {
        marginTop: '-10px',
    },
    link: {
        textDecoration: 'none',
    },
    navButton: {
        backgroundColor: $primary,
        color: $black,
        textDecoration: 'none',
        transition: 'background-color 0.3s, color .3s',
        border: '1px solid rgba(0,0,0,0)',
        ':hover': {
            backgroundColor: $navButtonActive,
            border: '1px solid rgba(50,50,50,0.3)',
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
        href: 'landing',
    },
    {
        name: 'About',
        href: 'about',
    },
    {
        name: 'Projects',
        href: 'projects',
    },
    {
        name: 'Contact',
        href: 'contact',
    },
];

const CustomNav = () => {
    return (
        <Navbar
            className="fixed-top"
            collapseOnSelect
            expand="md"
            style={styles.bar}>
            <Navbar.Brand>
                <a href={'/#'} style={styles.link}>
                    <h4 style={styles.brand}>KAUSHIK MAHADEVAN</h4>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={styles.navBox}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex ml-auto mr-4" style={styles.navBox}>
                    {_.map(navButtons, (button: buttonTemp, index: number) => {
                        return (
                            <Link
                                spy
                                isDynamic
                                smooth="easeInOutCubic"
                                duration={750}
                                style={styles.navButton}
                                className="p-2 justify-content-start"
                                to={button.href}
                                href=""
                                key={`navButton${index}`}>
                                {button.name.toUpperCase()}
                            </Link>
                        );
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Radium(CustomNav);
