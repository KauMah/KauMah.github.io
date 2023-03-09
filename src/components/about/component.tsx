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
              I am a {calcAgeYears()} year old software engineer. I like
              learning new things, skiing, chess, reading, making music, and
              solving problems. My motivation comes stems my desire to ensure
              that I make something amazing of my 20's and I want to live up to
              the incredible stories I've heard from all the people who have
              mentored me.
            </p>
            <p>
              I operate on 3 major pillars: Thoughtfulness, Inquisivity, and
              Playfulness. It is very important to me that my actions do not
              adversely affect those around me. This can range from the words I
              choose to omit form my vernacular to the way I drive on a highway
              to minimize my impact on traffic. Curiosity has driven me to learn
              all that I have in my life, and I recognize how valuable it has
              been in motivating me to learn new things. Finally, life would be
              unbelievably bland if everything was serious, so I think it's
              important to have fun, even in serious contexts. If possible, I
              choose to have fun even through the most mundane aspects of my
              life. If there are things that have to be done, it might as well
              be fun to do them. The hope is that these principles help me
              acheive my goals in a way that is sustainable and constructive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
