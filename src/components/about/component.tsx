import { $white } from '../../assets/colors';
import profile from '../../assets/img/profile.jpg';

const styles = {
  sect: {
    background: $white,
  },
  container: {
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center' as 'center',
  },
  profilePic: {
    width: '80%',
    borderRadius: '50%',
    paddingBottom: '20px',
  },
  text: {
    padding: '20px 20px',
    textAlign: 'left' as 'left',
    fontSize: '1.1em',
  },
};

const calcAgeYears = () => {
  let birthday = new Date(1999, 8, 10);
  let elapsed = Date.now() - birthday.getTime();
  return Math.floor(elapsed / 1000 / 60 / 60 / 24 / 365.25);
};

const About = () => {
  return (
    <section id="about" style={styles.sect}>
      <div className="container" style={styles.container}>
        <h3>ABOUT ME</h3>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src={profile}
              className="img-fluid"
              alt=""
              style={styles.profilePic}
            />
          </div>
          <div className="col-md-6 col-sm-12" style={styles.text}>
            <p>
              I am a {calcAgeYears()} year old software engineer. I like using
              <strong> Typescript</strong>,{' '}
              <strong>React (and React Native)</strong>, and{' '}
              <strong>Node.js</strong> to build performant and aesthetically
              pleasing applications.
            </p>
            <h4>My strengths:</h4>
            <ul>
              <li>
                Learning concepts and languages quickly by reading or consulting
                the appropriate authority (human or online knowledge base)
              </li>
              <li>
                Communicating directly and effectively with my team and manager
              </li>
              <li>
                Applying business requirements to engineering work and being
                able to relay information to both technical and non-technical
                people
              </li>
            </ul>
            <h4>My interests:</h4>
            <ul>
              <li>
                Using my skills and other tools to automate or simplify my day
                to day activities
              </li>
              <li>Soccer, football, baseball, exercising, and pow days</li>
              <li>Producing music and playing the piano and guitar</li>
              <li>
                Reading books and staying up to date on latest news in tech,
                sports, and social issues
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
