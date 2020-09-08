import { $white } from '../../assets/colors';
import { ProgressProps } from './component';
import React from 'react';

const styles = {
    progressBox: {
        padding: '15px',
    },
    emptyProg: {
        borderRadius: '5px',
        width: '100%',
        backdropFilter: 'grayscale(100%)',
        WebkitBackdropFilter: 'grayscale(100%)',
        border: `2px solid ${$white}`,
    },
    progress: {
        backgroundColor: $white,
        height: '20px',
    },
};

const Progress = ({ title, progress }: ProgressProps) => {
    return (
        <div style={styles.progressBox} className="col-12 col-md-6">
            <h4>{title}</h4>
            <div style={styles.emptyProg}>
                <div
                    style={{ ...styles.progress, width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default Progress;
