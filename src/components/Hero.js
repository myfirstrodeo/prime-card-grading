import React from 'react';
import './Hero.css';
import cardImage from '../assets/mj-slab.png'; // Put your image in /src/assets/

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>GRADING WITH<br />PRECISION.<br />BUILT FOR TRUST.</h1>
        <a href="#submit" className="cta-button">SUBMIT YOUR CARD</a>
      </div>
      <div className="hero-image">
        <img src={cardImage} alt="Graded Card" />
      </div>
    </section>
  );
};

export default Hero;
