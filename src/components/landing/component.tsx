import { TypeAnimation } from 'react-type-animation';
import { $white } from '../../assets/colors';

const styles = {
  sect: {
    background:
      'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,87,95,1) 54%, rgba(93,123,125,1) 90%)',
    height: '100vh',
  },
  textContainer: {
    padding: '0 20px',
  },
  mainText: {
    color: $white,
    fontSize: 'calc(1em + 3.5vw)',
  },
  change: {
    fontWeight: 'bold' as const,
    fontStyle: 'italic',
  },
};

const IntroSection = () => {
  const vals = [
    'Kaushik',
    1000,
    'an Engineer',
    1000,
    'a Full Stack Developer',
    1000,
    'a Student',
    1000,
    'a Problem Solver',
    1000,
    'a Bookworm',
    1000,
  ];

  return (
    <section id="landing" style={styles.sect}>
      <div
        className="container h-100 d-flex justify-content-center align-items-center"
        style={styles.textContainer}>
        <h1 style={styles.mainText}>
          Hi, I'm{' '}
          <TypeAnimation
            sequence={vals}
            style={styles.change}
            repeat={Infinity}
          />{' '}
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
