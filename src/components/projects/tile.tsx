import {
  faScrewdriverWrench,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
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
import { IconLookup } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    backgroundRepeat: 'no-repeat',
    height: '275px',
    width: '275px',
    margin: '0 auto',
    borderRadius: '13px',
    cursor: 'pointer',
    border: `solid 1px ${$primaryLessTransparent}`,
    overflow: 'hidden',
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
    backdropFilter: 'blur(4px)',
    '&:hover': {
      backgroundColor: $primaryLessTransparent,
      opacity: 1,
    },
  }),
  infoText: css({
    // fontWeight: 'bold',
    padding: '10px',
    color: $white,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  }),
  emph: {
    color: $primarySolid,
    backgroundColor: $twhite,
    borderRadius: 5,
    padding: 3,
    marginBottom: 5,
  },
  modalContent: {
    display: 'flex',
    margin: '20px auto auto auto',
    height: '80%',
    width: '80%',
    backgroundColor: $secondary,
    borderRadius: 10,
  },
  modalOverlay: {
    backgroundColor: $transparent,
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    zIndex: 3000,
  },
  x: {
    height: 30,
    width: 30,
    position: 'absolute' as const,
    top: 20,
    right: 20,
    backgroundColor: $primarySolid,
    color: $white,
    fontSize: 20,
    borderRadius: '5px',
    cursor: 'pointer',
    paddingLeft: 5,
  },
  modalContainer: {
    justifyItems: 'center',
    width: '100%',
  },
  modalTitle: {},
  modalText: css({}),
  modalDiv: {
    padding: '5%',
  },
  liveLink: css({
    textDecoration: 'none',
    color: $primarySolid,
    fontWeight: 'bold',
    fontSize: '1.2em',
    cursor: 'pointer',
    '&:hover': {
      color: $primaryHighlight,
    },
  }),
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
  let tagString = '';
  tags.map(
    (tag, index) =>
      (tagString =
        index == tags.length - 1
          ? tagString.concat(tag)
          : tagString.concat(tag).concat(', '))
  );

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
          <a href={url} css={styles.mainLink} target="_blank">
            View on Github{' '}
            {active && (
              <span style={{}}>
                <FontAwesomeIcon
                  icon={faScrewdriverWrench as IconLookup}
                  size="lg"
                />
              </span>
            )}
          </a>
          <div
            onClick={openModal}
            style={{
              ...styles.background,
              backgroundImage: `url(${imageUrl})`,
            }}>
            <div css={styles.info}>
              <p css={styles.infoText}>{shortBody}</p>
              <strong style={styles.emph}>Click for more info!</strong>
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
        }}>
        <div style={styles.modalContainer}>
          <div style={styles.x} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark as IconLookup} size="lg" />
          </div>
          <div className="container" style={styles.modalDiv}>
            <h3 style={styles.modalTitle}>{title}</h3>
            <p css={styles.modalText}>{body}</p>
            {
              <a href={liveUrl} css={styles.liveLink} target="_blank">
                See more here!
              </a>
            }
            <p>Tags: {tagString}</p>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Tile;
