import {
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import React, { Component } from 'react';

import About from './components/about/index';
import CustomNav from './components/nav/index';
import HashLinkObserver from 'react-hash-link';
import IntroSection from './components/landing/index';

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
            </div>
        );
    }
}

export default App;
