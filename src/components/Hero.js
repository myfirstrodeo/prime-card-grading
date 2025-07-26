import React from 'react';
import './Hero.css'; // optional, if you want to style it separately

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Prime Card Grading</h1>
        <p>Your cards deserve expert eyes. Get fast, transparent grading with AI-enhanced accuracy.</p>
        <button>Submit Your Cards</button>
      </div>
    </section>
  );
};

export default Hero;

