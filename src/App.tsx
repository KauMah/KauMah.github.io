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
    </div>
  );
}

export default App;
