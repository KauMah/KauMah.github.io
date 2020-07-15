import { $white } from '../../assets/colors';
import React from 'react';
import profile from '../../assets/img/profile.jpg';

const styles = {
    sect: {
        background: $white,
    },
    container: {
        marginTop: '50px',
        marginBottom: '50px',
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
                            I am a {calcAgeYears()} year old software engineer.
                            Since a young age, I have been inclined toward the
                            field of engineering starting with Lego
                            constructions to simple Arduino based machines in
                            high school. My other interests include running,
                            playing the guitar and piano, going to the driving
                            range, playing online chess, and spending time with
                            my friends. These are some of the things that I find
                            myself the most drawn to when I am not working or
                            watching some kind of TV.
                        </p>
                        <p>
                            In addition, I have a deep interest in self
                            development and becoming fully in control of my time
                            and actions through constant attention. A good
                            portion of my recent reading has been focused on
                            this matter in an attempt to dissipate less of my
                            energy when it can be better utilized elsewhere. In
                            doing this, I also intend to gain an fuller
                            understanding of the human condition and therefore,
                            myself.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
