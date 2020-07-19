import { Events, scrollSpy } from 'react-scroll';
import React, { Component } from 'react';

import About from './components/about/';
import Contact from './components/contact/';
import CustomNav from './components/nav/';
import HashLinkObserver from 'react-hash-link';
import IntroSection from './components/landing/';

interface Props {}
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
                <HashLinkObserver />
                <CustomNav />
                <IntroSection />
                <About />
                <Contact />
            </div>
        );
    }
}

export default App;
