// src/App.js
import React from 'react';
import './App.css';
import logo from './assets/pcg.png'; // Make sure this path is correct

function App() {
  return (
    <div className="coming-soon-wrapper">
      <img src={logo} alt="PCG Logo" className="logo" />
      <h1>The Future of AI Card Grading</h1>
      <p>Coming Soon</p>
    </div>
  );
}

export default App;
