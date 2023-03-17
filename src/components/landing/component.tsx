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
  boldital: {
    fontWeight: 'bold' as const,
    fontStyle: 'italic',
  },
};

const IntroSection = () => {
  return (
    <section id="landing" style={styles.sect}>
      <div
        className="container h-100 d-flex justify-content-center align-items-center"
        style={styles.textContainer}>
        <h1 style={styles.mainText}>
          {/* Kaushik: <span css={styles.boldital}>n.</span> Full Stack Developer */}
          Hi, I'm Kaushik
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
