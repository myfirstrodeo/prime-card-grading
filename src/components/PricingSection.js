// src/components/PricingSection.js
import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
  return (
    <div className="pricing-wrapper">
      <h2>Our Grading Tiers</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Standard</h3>
          <p className="price">$15</p>
          <p>30-day turnaround</p>
        </div>
        <div className="card featured">
          <h3>Express</h3>
          <p className="price">$30</p>
          <p>7-day turnaround</p>
        </div>
        <div className="card">
          <h3>Walkthrough</h3>
          <p className="price">$75</p>
          <p>24-hour turnaround</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
