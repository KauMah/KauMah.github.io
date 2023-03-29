import {
  $black,
  $primaryHighlight,
  $primaryTransparent,
  $white,
} from '../../assets/colors';

import { css } from '@emotion/react';
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
  mainLink: {
    textDecoration: 'none',
  },
  linkText: css({
    display: 'inline-block',
    padding: '2px 5px',
    borderRadius: '5px',
    color: $white,
    background: $primaryHighlight,
    transition: 'color 0.3s, background 0.3s',
    ':hover': {
      color: $primaryHighlight,
      background: $primaryTransparent,
    },
  }),
};

function Tile({ title, body, url, imageUrl, liveUrl }: Project) {
  return (
    <div className="col-12 col-lg-6">
      <div style={styles.container} className="row">
        <div style={styles.iconPane} className="col-12 col-lg-6">
          <a href={url} style={styles.mainLink}>
            <div>
              <h4 css={styles.linkText}>{title}</h4>
            </div>
          </a>
          <img src={imageUrl} alt="" style={styles.image} />
        </div>
        <div style={styles.infoPane} className="col-12 col-lg-6">
          <p style={styles.betterText}>{body}</p>
          {liveUrl && (
            <>
              <br />
              <p>
                See me in action{' '}
                <a
                  key={`link-${url}`}
                  href={liveUrl}
                  css={{
                    ...styles.link,
                    textDecoration: 'underline',
                  }}>
                  here
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tile;
