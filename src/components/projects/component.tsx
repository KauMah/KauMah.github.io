import { $primarySolid, $secondary } from '../../assets/colors';

import { css } from '@emotion/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectEntries from '../../assets/projectInfo.json';
import Tile from './tile';

const styles = {
  container: {
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center' as 'center',
  },
  darker: {
    backgroundColor: $secondary,
  },
  header: {
    paddingTop: '20px',
  },
};

export interface Project {
  title: string;
  time: string;
  shortBody: string;
  body: string;
  url: string;
  imageUrl: string;
  liveUrl?: string;
  tags: string[];
  active: boolean;
}

const proj: Project[] = projectEntries;

const Projects = () => {
  return (
    <section id="projects" style={styles.darker}>
      <div style={styles.container} className="container">
        <h2 style={styles.header}>PROJECTS</h2>
        <hr />
        <div css={css({ color: $primarySolid })}>
          <FontAwesomeIcon icon={faScrewdriverWrench as IconProp} size="lg" /> -
          In Active Development
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {proj.map((project: Project, index) => (
            <Tile
              key={`project${index}`}
              title={project.title}
              time={project.time}
              shortBody={project.shortBody}
              body={project.body}
              url={project.url}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              tags={project.tags}
              active={project.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
