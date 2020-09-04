import { Project } from './component';
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
};

export default function Tile({ title, body, url, imageUrl }: Project) {
    return (
        <div className="col-12 col-lg-6">
            <div style={styles.container} className="row">
                <div style={styles.iconPane} className="col-12 col-lg-6">
                    <a href={url}>
                        <h4>{title}</h4>
                    </a>
                    <img src={imageUrl} alt="poo" style={styles.image} />
                </div>
                <div style={styles.infoPane} className="col-12 col-lg-6">
                    <p style={styles.betterText}>{body}</p>
                </div>
            </div>
        </div>
    );
}
