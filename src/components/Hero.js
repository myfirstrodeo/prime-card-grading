// src/components/Hero.js
import React from 'react';
import './Hero.css';
import cardImage from '../assets/pcg.png';
import bgStars from '../assets/bg-stars.jpg';

const Hero = () => {
  return (
    <div
      className="hero-wrapper"
      style={{
        backgroundImage: `url(${bgStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1>GRADING<br />WITH<br />PRECISION.<br />BUILT FOR<br />TRUST.</h1>
          <button className="submit-btn">SUBMIT YOUR CARD</button>
        </div>
        <div className="hero-image">
          <img src={cardImage} alt="Graded Card" />
        </div>
      </div>

      <div className="why-section" id="why">
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
