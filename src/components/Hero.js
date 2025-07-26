// src/components/Hero.js
import React from 'react';
import bgStars from '../assets/bg-stars.jpg';
import slabImage from '../assets/pcg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Prime Card Grading</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
        Transparent. Trustworthy. Tech-driven grading for your sports cards.
      </p>
      <img
        src={slabImage}
        alt="PCG Slab"
        style={{
          width: '300px',
          maxWidth: '90%',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        }}
      />
    </section>
  );
};

export default Hero;
