import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import Tile from './tile';

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

const Projects = () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://api.github.com/graphql',
            cache: new InMemoryCache(),
            headers: {
                authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
            },
        });
        if (!loaded) {
            client
                .query({
                    query: gql`
                        query GetProjects {
                            viewer {
                                pinnedItems(first: 6, types: [REPOSITORY]) {
                                    nodes {
                                        ... on Repository {
                                            name
                                            url
                                            description
                                        }
                                    }
                                }
                            }
                        }
                    `,
                })
                .then((result) => {
                    setLoaded(true);
                    console.log(result.data.viewer.pinnedItems.nodes);
                    setData(result.data.viewer.pinnedItems.nodes);
                });
        }
    });
    return (
        <section id="projects" style={styles.darker}>
            <div style={styles.container} className="container">
                <h3 style={styles.header}>PROJECTS</h3>
                <hr />
            </div>
            <div className="container-fluid row">
                {data !== null &&
                    data.map((item: any, index) => {
                        return (
                            <Tile
                                title={item.name}
                                body={item.description}
                                url={item.url}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default Projects;
