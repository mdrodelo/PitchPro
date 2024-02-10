import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PitchPro</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Website
        </a>
        <a
          className="App-link"
          href="https://docs.djangoproject.com/en/5.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Django Website
        </a>
      </header>
    </div>
  );
}

export default App;
