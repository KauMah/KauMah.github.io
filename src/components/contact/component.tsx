import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { $black } from '../../assets/colors';

const styles = {
  container: {
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center' as 'center',
    fontSize: '40px',
  },
  spacer: {
    justifyContent: 'center',
  },
  icon: css({
    color: $black,
    transition: 'color 0.3s, font-size 0.3s',
    margin: '0 5px',
  }),
  github: css({
    '&:hover': {
      color: 'rgb(41, 45, 50)',
    },
  }),
  youtube: css({
    '&:hover': {
      color: 'rgb(235, 51, 35)',
    },
  }),
  instagram: css({
    '&:hover': {
      color: '#d6249f',
    },
  }),
  twitter: css({
    '&:hover': {
      color: 'rgb(74, 160, 235)',
    },
  }),
  linkedin: css({
    '&:hover': {
      color: 'rgb(48, 118, 176)',
    },
  }),
};

const Contact = () => {
  return (
    <section id="contact">
      <div style={styles.container} className="container">
        <h3>GET IN TOUCH!</h3>
        <hr />
        <div className="" style={styles.spacer}>
          <a
            title="Github"
            href="https://github.com/KauMah"
            css={[styles.icon, styles.github]}
            className="col-sm-1"
            key="github-button">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/kaushikmahadevan/"
            css={[styles.icon, styles.linkedin]}
            className="col-sm-1"
            key="linkedin-button">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCZEyX114PjTP_r4Cku1oJaQ"
            css={[styles.icon, styles.youtube]}
            className="col-sm-1"
            key="youtube-button">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/kaushik_m_/"
            css={[styles.icon, styles.instagram]}
            className="col-sm-1"
            key="instagram-button">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            title="Twitter"
            href="https://twitter.com/couch_chick"
            css={[styles.icon, styles.twitter]}
            className="col-sm-1"
            key="twitter-button">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
