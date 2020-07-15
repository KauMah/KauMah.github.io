import About from './components/about/index';
import CustomNav from './components/nav/index';
import HashLinkObserver from 'react-hash-link';
import IntroSection from './components/landing/index';
import React from 'react';

function App() {
  return (
    <div className="App">
      <HashLinkObserver />
      <CustomNav />
      <IntroSection />
      <About />
    </div>
  );
}

export default App;
