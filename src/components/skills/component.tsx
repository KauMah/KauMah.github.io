import { $primarySolid, $twhite, $white } from '../../assets/colors';

import { css } from '@emotion/react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/img/bg.jpg';
import Progress from './progress';

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
  subtitle: css({
    color: $primarySolid,
    backgroundColor: $twhite,
    width: 'initial',
    margin: '0 auto',
    borderRadius: 5,
    padding: '5px',
  }),
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

const languages: ProgressProps[] = [
  {
    title: 'Typescript/ES6+',
    progress: 75,
  },
  {
    title: 'Rust',
    progress: 40,
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
    title: 'C/C++',
    progress: 70,
  },
  {
    title: 'SQL',
    progress: 65,
  },
];

const frameworks: ProgressProps[] = [
  {
    title: 'React',
    progress: 85,
  },
  {
    title: 'React Native',
    progress: 65,
  },
  {
    title: 'Spring Boot',
    progress: 50,
  },
  {
    title: 'GraphQL',
    progress: 55,
  },
  {
    title: 'Jest',
    progress: 80,
  },
  {
    title: 'Concurrency',
    progress: 45,
  },
];

const tools: ProgressProps[] = [
  {
    title: 'Git',
    progress: 85,
  },
  {
    title: 'Docker',
    progress: 65,
  },
  {
    title: 'Unix (commands/scripting)',
    progress: 70,
  },
  {
    title: 'MongoDB',
    progress: 75,
  },
  {
    title: 'AWS',
    progress: 60,
  },
];
const Skills = () => {
  return (
    <section id="skills" style={styles.sectionBg}>
      <Parallax
        bgImage={bg}
        bgImageAlt={'whoops'}
        strength={300}
        blur={{ min: 0, max: 7 }}
        style={{ padding: '50px 0' }}>
        <div className="container" style={styles.centered}>
          <h2>TECHNICAL SKILLS</h2>
          <p>
            These are all tools and languages that I have used in some capacity
            either in my <strong>professional experience</strong>,{' '}
            <strong>personal projects</strong>, or
            <strong> university classes</strong>
          </p>
          <hr style={{ borderColor: $white }} />
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-4 ">
              <div className="row">
                <h3 css={styles.subtitle} className="col-12">
                  Languages
                </h3>
                {languages.map((skill) => (
                  <Progress
                    title={skill.title}
                    progress={skill.progress}
                    key={`lang-${skill.title}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 ">
              <div className="row">
                <h3 css={styles.subtitle} className="col-12">
                  Paradigms/Concepts
                </h3>
                {frameworks.map((skill) => (
                  <Progress
                    title={skill.title}
                    progress={skill.progress}
                    key={`lang-${skill.title}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 ">
              <div className="row">
                <h3 css={styles.subtitle} className="col-12">
                  Tools
                </h3>
                {tools.map((skill) => (
                  <Progress
                    title={skill.title}
                    progress={skill.progress}
                    key={`lang-${skill.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <div className="row">
            {skills.map((skill) => (
              <Progress
                title={skill.title}
                progress={skill.progress}
                key={skill.title}
              />
            ))}
          </div> */}
        </div>
      </Parallax>
    </section>
  );
};
export default Skills;
