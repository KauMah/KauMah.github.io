import NavBar from './nav';
import React from 'react';
import { homedir } from 'os';

function App() {
  const buttons = [
    {
      name: 'Home',
      link: '#intro'
    },
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Projects',
      link: '#projects'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  return (
    <div className="App">
      <NavBar buttons={ buttons }>

      </NavBar>
    </div>
  );
}

export default App;
