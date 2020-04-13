import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const danger = '<script>alert("Hi")</script>'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div dangerouslySetInnerHTML={{ __html: danger}}></div>
    </div>
  );
}

export default App;
