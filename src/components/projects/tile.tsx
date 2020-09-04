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

interface Props {
    title: string;
    body: string;
    url: string;
    imageUrl?: string;
}

export default function Tile({ title, body, url, imageUrl }: Props) {
    return (
        <div className="col-12 col-lg-6">
            <div style={styles.container} className="row">
                <div style={styles.iconPane} className="col-12 col-lg-6">
                    <a href={url}>
                        <h4>{title}</h4>
                    </a>
                    <img
                        src={
                            imageUrl
                                ? imageUrl
                                : 'https://i.imgur.com/DkdUods.jpg'
                        }
                        alt="poo"
                        style={styles.image}
                    />
                </div>
                <div style={styles.infoPane} className="col-12 col-lg-6">
                    <p style={styles.betterText}>{body}</p>
                </div>
            </div>
        </div>
    );
}
