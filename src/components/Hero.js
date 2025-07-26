import React from 'react';
import './Hero.css';
import bgStars from '../assets/bg-stars.jpg';
import slabImage from '../assets/pcg.png';

function Hero() {
  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${bgStars})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            GRADING <br />
            WITH <br />
            PRECISION. <br />
            BUILT FOR <br />
            TRUST.
          </h1>
          <button className="submit-btn">SUBMIT YOUR CARD</button>
        </div>
        <div className="hero-image">
          <img src={slabImage} alt="PCG Slab" />
        </div>
      </div>

      <div className="why-section">
        <h2>WHY PCG?</h2>
        <p>
          We’re built different. No subgrades. No confusion. <br />
          Just clear, objective, tech-assisted grading you can trust.
        </p>
      </div>
    </div>
  );
}

export default Hero;
