import {
    $black,
    $linkHover,
    $navButtonActive,
    $white,
} from '../../assets/colors';

import { Project } from './component';
import Radium from 'radium';
import React from 'react';

const styles = {
    container: {
        textAlign: 'center' as 'center',
        padding: '20px 0',
    },
    iconPane: {},
    infoPane: {
        padding: '40px 0',
    },
    image: {
        height: 250,
        width: 250,
        margin: '10px auto',
    },
    betterText: {
        padding: '0 10%',
    },
    link: {
        textDecoration: 'none',
        color: $black,
        transition: 'color 0.3s',
        ':hover': {
            color: $linkHover,
        },
    },
    mainLink: {
        textDecoration: 'none',
    },
    linkText: {
        display: 'inline-block',
        padding: '2px 5px',
        borderRadius: '5px',
        color: $white,
        background: $linkHover,
        transition: 'color 0.3s, background 0.3s',
        ':hover': {
            color: $linkHover,
            background: $navButtonActive,
        },
    },
};

function Tile({ title, body, url, imageUrl, liveUrl }: Project) {
    return (
        <div className="col-12 col-lg-6">
            <div style={styles.container} className="row">
                <div style={styles.iconPane} className="col-12 col-lg-6">
                    <a key={title} href={url} style={styles.mainLink}>
                        <div>
                            <h4 style={styles.linkText}>{title}</h4>
                        </div>
                    </a>
                    <img src={imageUrl} alt="poo" style={styles.image} />
                </div>
                <div style={styles.infoPane} className="col-12 col-lg-6">
                    <p style={styles.betterText}>{body}</p>
                    {liveUrl && (
                        <>
                            <br />
                            <p>
                                See me in action{' '}
                                <a
                                    key={liveUrl}
                                    href={liveUrl}
                                    style={{
                                        ...styles.link,
                                        textDecoration: 'underline',
                                    }}>
                                    here
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Radium(Tile);
