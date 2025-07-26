import React from 'react';
import bgStars from '../assets/bg-stars.jpg';
import mjSlab from '../assets/mj-slab.png';

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgStars})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        color: 'white',
      }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            GRADING <br />
            WITH PRECISION. <br />
            BUILT FOR TRUST.
          </h1>
          <button className="cta-button">SUBMIT YOUR CARD</button>
        </div>
        <div className="hero-image">
          <img src={mjSlab} alt="Michael Jordan PCG Slab" />
        </div>
      </div>
    </section>
  );
}
