// src/components/Hero.js
import React from 'react';
import './Hero.css'; // optional: if you want styles later

const Hero = () => {
  return (
    <section className="hero">
      <h1>Prime Card Grading</h1>
      <p>The most trusted name in modern card authentication.</p>
      <button>Submit a Card</button>
    </section>
  );
};

export default Hero;
