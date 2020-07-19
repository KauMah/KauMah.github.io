import React from 'react';

interface Props {
    thumbnail: boolean;
    image?: File;
}

const styles = {};

const Tile = ({ thumbnail, image }: Props) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6"></div>
            <div className="col-sm-12 col-md-6"></div>
        </div>
    );
};
