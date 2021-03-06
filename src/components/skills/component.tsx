import { $white } from '../../assets/colors';
import { Parallax } from 'react-parallax';
import Progress from './progress';
import React from 'react';

export interface ProgressProps {
    title: string;
    progress: number;
}

const styles = {
    sectionBg: {
        background: 'rgb(45, 70, 85)',
        color: $white,
    },
    centered: {
        textAlign: 'center' as 'center',
    },
};

const skills: ProgressProps[] = [
    {
        title: 'Typescript/ES6+',
        progress: 75,
    },
    {
        title: 'React',
        progress: 65,
    },
    {
        title: 'Node.js',
        progress: 65,
    },
    {
        title: 'C++',
        progress: 80,
    },
    {
        title: 'HTML/CSS',
        progress: 90,
    },
    {
        title: 'Java',
        progress: 70,
    },
    {
        title: 'Python',
        progress: 40,
    },
    {
        title: 'Arduino',
        progress: 85,
    },
];

const Skills = () => {
    return (
        <section id="skills" style={styles.sectionBg}>
            <Parallax
                bgImage={require('../../assets/img/bg.jpg')}
                bgImageAlt={'whoops'}
                strength={300}
                blur={{ min: 0, max: 7 }}
                style={{ padding: '50px 0' }}>
                <div className="container" style={styles.centered}>
                    <h3>SKILLS</h3>
                    <hr style={{ borderColor: $white }} />
                    <div className="row">
                        {skills.map((skill) => (
                            <Progress
                                title={skill.title}
                                progress={skill.progress}
                                key={skill.title}
                            />
                        ))}
                    </div>
                </div>
            </Parallax>
        </section>
    );
};
export default Skills;
