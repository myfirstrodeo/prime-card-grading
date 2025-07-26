import React from 'react';
import bgStars from '../assets/bg-stars.jpg'; // ✅ import image
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Prime Card Grading</h1>
        <p>Your cards deserve expert eyes. Get fast, transparent grading with AI-enhanced accuracy.</p>
        <button>Submit Your Cards</button>
      </div>
    </section>
  );
};

export default Hero;
