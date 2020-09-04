import React from 'react';
import Tile from './tile';
import projectEntries from '../../assets/projectInfo.json';

const styles = {
    container: {
        marginTop: '50px',
        marginBottom: '50px',
        textAlign: 'center' as 'center',
    },
    darker: {
        backgroundColor: '#f0f0f0',
    },
    header: {
        paddingTop: '20px',
    },
};

export interface Project {
    title: string;
    body: string;
    url: string;
    imageUrl: string;
}

const proj = projectEntries;

const Projects = () => {
    console.log(projectEntries);
    return (
        <section id="projects" style={styles.darker}>
            <div style={styles.container} className="container">
                <h3 style={styles.header}>PROJECTS</h3>
                <hr />
            </div>
            <div className="container-fluid">
                <div className="row">
                    {proj.map((project: Project, index) => (
                        <Tile
                            key={`project${index}`}
                            title={project.title}
                            body={project.body}
                            url={project.url}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
