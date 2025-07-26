import React from 'react';
import './Hero.css';
import slabImage from '../assets/mj-slab.png'; // Adjust path if needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>GRADING WITH<br />PRECISION.<br />BUILT FOR TRUST.</h1>
        <button>Submit Your Card</button>
      </div>
      <img src={slabImage} alt="Graded Card Slab" />
    </section>
  );
};

export default Hero;
