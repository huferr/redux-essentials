import React from 'react';
import logo from './logo.svg';
import { Boolean } from './features/boolean/boolean';
import './App.css';
import { Section01 } from './components/section1/Section1';
import { Section02 } from './components/section2/Section2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Boolean />
        <Section01 />
        <Section02 />
      </header>
    </div>
  );
}

export default App;
