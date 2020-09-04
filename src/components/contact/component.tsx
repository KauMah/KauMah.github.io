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
        fontSize: '40px',
    },
    spacer: {
        justifyContent: 'center',
    },
    icon: {
        color: $black,
        transition: 'color 0.3s, font-size 0.3s',
        margin: '0 5px',
    },
    github: {
        ':hover': {
            color: 'rgb(41, 45, 50)',
            fontSize: '70px',
        },
    },
    youtube: {
        ':hover': {
            color: 'rgb(235, 51, 35)',
            fontSize: '70px',
        },
    },
    instagram: {
        ':hover': {
            color: '#d6249f',
            fontSize: '70px',
        },
    },
    twitter: {
        ':hover': {
            color: 'rgb(74, 160, 235)',
            fontSize: '70px',
        },
    },
    linkedin: {
        ':hover': {
            color: 'rgb(48, 118, 176)',
            fontSize: '70px',
        },
    },
};

const Contact = () => {
    return (
        <section id="contact">
            <div style={styles.container} className="container">
                <h3>GET IN TOUCH!</h3>
                <hr />
                <div className="row" style={styles.spacer}>
                    <a
                        title="Github"
                        href="https://github.com/KauMah"
                        style={{ ...styles.icon, ...styles.github }}
                        key="github-button">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a
                        title="Linkedin"
                        href="https://www.linkedin.com/in/kaushikmahadevan/"
                        style={{ ...styles.icon, ...styles.linkedin }}
                        key="linkedin-button">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a
                        title="Youtube"
                        href="https://www.youtube.com/channel/UCZEyX114PjTP_r4Cku1oJaQ"
                        style={{ ...styles.icon, ...styles.youtube }}
                        key="youtube-button">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                    <a
                        title="Instagram"
                        href="https://www.instagram.com/kaushik_m_/"
                        style={{
                            ...styles.icon,
                            ...styles.instagram,
                        }}
                        key="instagram-button">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a
                        title="Twitter"
                        href="https://twitter.com/couch_chick"
                        style={{ ...styles.icon, ...styles.twitter }}
                        key="twitter-button">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Radium(Contact);
