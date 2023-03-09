import { Component } from 'react';
import { Events, scrollSpy } from 'react-scroll';

import About from './components/about/';
import Contact from './components/contact/';
import IntroSection from './components/landing/';
import CustomNav from './components/nav/';
import Projects from './components/projects';
import Skills from './components/skills';

class App extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, elements) {
            console.log('begin', arguments);
        });
        Events.scrollEvent.register('end', function (to, elements) {
            console.log('end', arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="App">
                <CustomNav />
                <IntroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default App;
