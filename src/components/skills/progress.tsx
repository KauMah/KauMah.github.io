import { css, keyframes } from '@emotion/react';

import { $white } from '../../assets/colors';
import { ProgressProps } from './component';

const glow = keyframes`
  0%, 100%{
    box-shadow: 0px 0px 7px 0px #fff;
  }
  50% {
    box-shadow: 0px 0px 10px 5px #fff;
  }
`;

const styles = {
  progressBox: {
    padding: '15px',
  },
  emptyProg: css({
    borderRadius: '5px',
    width: '100%',
    backdropFilter: 'grayscale(100%)',
    WebkitBackdropFilter: 'grayscale(100%)',
    border: `2px solid ${$white}`,
    animation: `${glow} 3s ease-in-out infinite`,
  }),
  progress: {
    backgroundColor: $white,
    height: '20px',
  },
};

const Progress = ({ title, progress }: ProgressProps) => {
  return (
    <div style={styles.progressBox} className="col-12">
      <h4>{title}</h4>
      <div css={styles.emptyProg}>
        <div style={{ ...styles.progress, width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
