import React from 'react';
import logo from './logo.svg';
import { Boolean } from './features/boolean/boolean';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Boolean />
      </header>
    </div>
  );
}

export default App;
