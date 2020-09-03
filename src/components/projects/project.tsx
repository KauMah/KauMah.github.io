import React from 'react';
import { findLastIndex } from 'lodash';

const styles = {
    container: {
        display: 'flex',
    },
    image: {
        height: 150,
        width: 150,
    },
};

enum Variant {
    light = '#fff',
    dark = '#000',
}

interface Props {
    title: string;
    body: string;
    imageUrl: string;
    variant: Variant;
}

export default function Project() {
    return (
        <div className="col-sm-" style={styles.container}>
            <div>
                <div
                    style={{
                        ...styles.image,
                        backgroundImage: 'https://i.imgur.com/DkdUods.jpg',
                    }}></div>
            </div>
        </div>
    );
}
