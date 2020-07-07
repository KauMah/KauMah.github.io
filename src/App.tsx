import CustomNav from './components/nav/index';
import HashLinkObserver from 'react-hash-link';
import Radium from 'radium';
import React from 'react';

function App() {
  return (
    <div className="App">
      <HashLinkObserver />
      <CustomNav />
    </div>
  );
}

export default Radium(App);
