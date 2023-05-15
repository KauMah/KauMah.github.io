import { css } from '@emotion/react';
import { $white } from '../../assets/colors';
import { ProgressProps } from './component';

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
  }),
  title: {
    paddingTop: '10px',
  },
};

const Progress = ({ title, progress }: ProgressProps) => {
  return (
    <div style={styles.progressBox} className="col-12">
      <div css={styles.emptyProg}>
        <h4 style={styles.title}>{title}</h4>
      </div>
    </div>
  );
};

export default Progress;
