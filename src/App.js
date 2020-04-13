import React, { useEffect } from 'react';
import './App.css';

function App() {
  const danger = '<script>alert("Hello world!")</script>';

  useEffect(() => {
    const el = document.querySelector('.danger');
    el.appendChild(document.createRange().createContextualFragment(danger));
  }, []);

  return (
    <div className='App'>
      <h1>Render and execute script tag</h1>
      <div className='danger'></div>
    </div>
  );
}

export default App;
