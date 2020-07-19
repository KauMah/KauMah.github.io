import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { $black } from '../../assets/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Radium from 'radium';
import React from 'react';

const styles = {
    container: {
        marginTop: '50px',
        marginBottom: '50px',
        textAlign: 'center' as 'center',
    },
    spacer: {
        margin: '0 20%',
        justifyContent: 'center',
    },
    icon: {
        color: $black,
        transition: 'color 0.3s',
    },
    github: {
        ':hover': {
            color: 'rgb(41, 45, 50)',
        },
    },
    youtube: {
        ':hover': {
            color: 'rgb(235, 51, 35)',
        },
    },
    instagram: {
        ':hover': {
            color: '#d6249f',
        },
    },
    twitter: {
        ':hover': {
            color: 'rgb(74, 160, 235)',
        },
    },
    linkedin: {
        ':hover': {
            color: 'rgb(48, 118, 176)',
        },
    },
};

const Contact = () => {
    return (
        <section id="contact">
            <div className="container" style={styles.container}>
                <h3>GET IN TOUCH!</h3>
                <hr />
                <div className="row" style={styles.spacer}>
                    <a
                        title="Github"
                        href=" "
                        style={{ ...styles.icon, ...styles.github }}
                        key="github-button">
                        <FontAwesomeIcon icon={faGithub} size="5x" />
                    </a>
                    <a
                        title="Linkedin"
                        href=" "
                        style={{ ...styles.icon, ...styles.linkedin }}
                        key="linkedin-button">
                        <FontAwesomeIcon icon={faLinkedin} size="5x" />
                    </a>
                    <a
                        title="Youtube"
                        href=" "
                        style={{ ...styles.icon, ...styles.youtube }}
                        key="youtube-button">
                        <FontAwesomeIcon icon={faYoutube} size="5x" />
                    </a>
                    <a
                        title="Instagram"
                        href=" "
                        style={{
                            ...styles.icon,
                            ...styles.instagram,
                        }}
                        key="instagram-button">
                        <FontAwesomeIcon icon={faInstagram} size="5x" />
                    </a>
                    <a
                        title="Twitter"
                        href=" "
                        style={{ ...styles.icon, ...styles.twitter }}
                        key="twitter-button">
                        <FontAwesomeIcon icon={faTwitter} size="5x" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Radium(Contact);
