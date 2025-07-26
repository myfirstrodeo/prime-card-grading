import React from 'react';
import './Hero.css';
import bgStars from '../assets/bg-stars.jpg';
import slabImage from '../assets/pcg.png';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="hero-content">
        <img
          src={slabImage}
          alt="Slab mockup"
          style={{
            maxWidth: '300px',
            width: '100%',
            marginBottom: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
          }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Prime Card Grading
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
          AI-enhanced grading with speed, transparency, and top-tier presentation. Your cards deserve better.
        </p>
        <button
          style={{
            padding: '15px 30px',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            border: 'none',
            borderRadius: '6px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Submit Your Cards
        </button>
      </div>
    </section>
  );
};

export default Hero;
