import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="hero">
        <h1>Prime Card Grading</h1>
        <p>AI-Powered Sports Card Authentication</p>
        <button>Submit Your Card</button>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Step-by-step AI grading process goes here.</p>
      </section>
      <section className="slab-showcase">
        <h2>Sample Label + Slab</h2>
        <p>Showcase your slab design here.</p>
      </section>
      <section className="lookup">
        <h2>Card Lookup</h2>
        <input placeholder="Enter 8-digit code" />
      </section>
      <section className="why">
        <h2>Why PCG?</h2>
        <ul>
          <li>AI-Based Grading</li>
          <li>High Accuracy</li>
          <li>Transparent Reports</li>
          <li>Fast Turnaround</li>
        </ul>
      </section>
      <section className="submit">
        <h2>Submit Your Card</h2>
        <p>[Upload form will go here]</p>
      </section>
      <section className="faq">
        <h2>FAQ</h2>
        <p>[FAQ content here]</p>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Follow us @PrimeCardGrading</p>
      </section>
    </div>
  );
}

export default App;