import {
    $black,
    $navButtonActive,
    $primary,
    $white,
} from '../../assets/colors';
import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Radium from 'radium';
import { ScrollLink } from 'react-scroll';
import _ from 'lodash';

const styles = {
    bar: {
        background:
            'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 15%, rgba(255,255,255,.3) 100%)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        // height: '72px',
        padding: '10px 5px',
        position: 'fixed' as 'fixed',
    },
    brand: {
        color: $black,
        textDecoration: 'none',
        transition: 'color 0.3s',
        marginTop: '-5px',
        ':hover': {
            textDecoration: 'none',
            color: $white,
        },
    },
    navBox: {
        marginTop: '-5px',
        textAlign: 'right' as 'right',
    },
    navBoxCondensed: {
        marginTop: '10px',
        textAlign: 'right' as 'right',
    },
    link: {
        textDecoration: 'none',
    },
    navButton: {
        backgroundColor: $primary,
        color: $black,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color .3s',
        border: '1px solid rgba(0,0,0,0)',
        ':hover': {
            backgroundColor: $navButtonActive,
            border: '1px solid rgba(50,50,50,0.3)',
            color: $white,
        },
    },
    buttonWrapper: {
        display: 'inline-block',
    },
    buttonWrapperCondensed: {
        display: 'inline-block',
        margin: '8px 0',
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

const Link = (props: any) => {
    return <a {...props}>{props.children}</a>;
};

const CustomLink = ScrollLink(Radium(Link));

const CustomNav = () => {
    const [condensed, setCondensed] = useState(false);
    return (
        <Navbar
            className="fixed-top"
            collapseOnSelect
            onToggle={() => {
                condensed
                    ? setTimeout(() => setCondensed(!condensed), 500)
                    : setCondensed(!condensed);
            }}
            expand="md"
            style={styles.bar}>
            <Navbar.Brand>
                <a href={'/#'} style={styles.link}>
                    <h4 key="brand" style={styles.brand}>
                        KAUSHIK MAHADEVAN
                    </h4>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                style={styles.navBox}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    className={
                        condensed ? 'ml-auto d-flex' : 'd-flex ml-auto mr-4'
                    }
                    style={condensed ? styles.navBoxCondensed : styles.navBox}>
                    {_.map(navButtons, (button: buttonTemp, index: number) => {
                        return (
                            <div
                                style={
                                    condensed
                                        ? styles.buttonWrapperCondensed
                                        : styles.buttonWrapper
                                }
                                key={`navButton${index}`}>
                                <CustomLink
                                    spy
                                    isDynamic
                                    smooth="easeInOutCubic"
                                    duration={750}
                                    activeClass="active"
                                    offset={-50}
                                    style={styles.navButton}
                                    className="p-2 justify-content-start"
                                    to={button.href}>
                                    {button.name.toUpperCase()}
                                </CustomLink>
                            </div>
                        );
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Radium(CustomNav);
