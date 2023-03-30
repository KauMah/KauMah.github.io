import { $secondary } from '../../assets/colors';
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
      </div>
      <div className="container-fluid">
        <div className="row">
          {proj.map((project: Project, index) => (
            <Tile
              key={`project${index}`}
              title={project.title}
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
