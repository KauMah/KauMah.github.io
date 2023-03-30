import {
  $black,
  $primaryHighlight,
  $primaryLessTransparent,
  $primarySolid,
  $primaryTransparent,
  $secondary,
  $transparent,
  $twhite,
  $white,
} from '../../assets/colors';

import { css } from '@emotion/react';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { Project } from './component';

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
  link: css({
    textDecoration: 'none',
    color: $black,
    transition: 'color 0.3s',
    ':hover': {
      color: $primaryHighlight,
    },
  }),
  linkText: {
    color: $primaryHighlight,
    fontWeight: 'bold' as const,
  },
  mainLink: css({
    textDecoration: 'none',
    display: 'inline-block',
    padding: '2px 5px',
    borderRadius: '5px',
    color: $white,
    background: $primaryHighlight,
    marginBottom: 5,
    transition: 'color 0.3s, background 0.3s',
    ':hover': {
      color: $primaryHighlight,
      background: $primaryTransparent,
    },
  }),
  background: {
    backgroundSize: 'contain',
    height: '250px',
    width: '250px',
    margin: '0 auto',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  info: css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: $transparent,
    height: '100%',
    transition: 'all 0.3s ease-in-out',
    fontSize: '0.85em',
    opacity: 0,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: $primaryLessTransparent,
      opacity: 1,
    },
  }),
  infoText: css({
    fontWeight: 'bold',
    padding: '10px',
    color: $white,
  }),
  emph: {
    color: $primarySolid,
    backgroundColor: $twhite,
    borderRadius: 5,
    padding: 3,
  },
  modalContent: {
    display: 'flex',
    margin: '70px auto auto auto',
    height: '80%',
    width: '70%',
    backgroundColor: $secondary,
    borderRadius: 10,
  },
  modalOverlay: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(4px)',
    zIndex: 3000,
  },
};

function Tile({
  title,
  shortBody,
  body,
  url,
  imageUrl,
  liveUrl,
  tags,
  active,
}: Project) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div style={styles.container} className="row">
        <div style={styles.iconPane} className="col-12">
          <div>
            <h4 css={styles.linkText}>{title}</h4>
          </div>
          <a href={url} css={styles.mainLink}>
            View on Github
          </a>
          <div
            onClick={openModal}
            style={{
              ...styles.background,
              backgroundImage: `url(${imageUrl})`,
            }}>
            <div css={styles.info}>
              <p css={styles.infoText}>
                {shortBody} <br />
                <strong style={styles.emph}>Click for more info!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="d-md-none col-8 offset-2 p-2" />
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={250}
        style={{
          overlay: styles.modalOverlay,
          content: styles.modalContent,
        }}></ReactModal>
    </div>
  );
}

export default Tile;
