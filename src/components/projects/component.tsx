import { ApolloClient, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';

import { gql } from '@apollo/client';

const styles = {
    container: {
        marginTop: '50px',
        marginBottom: '50px',
        textAlign: 'center' as 'center',
    },
};

const Projects = () => {
    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://api.github.com/graphql',
            cache: new InMemoryCache(),
            headers: {
                authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
            },
        });

        client
            .query({
                query: gql`
                    query GetProjects {
                        viewer {
                            repositories(
                                first: 5
                                orderBy: { field: UPDATED_AT, direction: DESC }
                                isFork: false
                            ) {
                                nodes {
                                    object(
                                        expression: "master:projDynamic.json"
                                    ) {
                                        ... on Blob {
                                            text
                                        }
                                    }
                                    name
                                    url
                                    description
                                }
                            }
                        }
                    }
                `,
            })
            .then((result) =>
                console.log(result.data.viewer.repositories.nodes)
            );
    });
    return (
        <section id="projects">
            <div style={styles.container} className="container"></div>
        </section>
    );
};

export default Projects;
