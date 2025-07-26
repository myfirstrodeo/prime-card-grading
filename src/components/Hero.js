import React from 'react';
import './Hero.css';
import cardImage from '../assets/pcg.png'; // replace with card slab image if needed

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <div className="hero-text">
          <h1>GRADING<br />WITH<br />PRECISION.<br />BUILT FOR<br />TRUST.</h1>
          <button className="submit-btn">SUBMIT YOUR CARD</button>
        </div>
        <div className="hero-image">
          <img src={cardImage} alt="Graded Card" />
        </div>
      </div>

      <div className="why-section">
        <h2>WHY PCG?</h2>
        <p>
          We’re built different. No subgrades. No confusion.<br />
          Just clear, objective, tech-assisted grading you can trust.
        </p>
      </div>
    </div>
  );
};

export default Hero;
