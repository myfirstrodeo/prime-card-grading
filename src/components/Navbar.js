// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/pcg-logo.png'; // make sure this image exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="PCG Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#why">Why PCG</a></li>
        <li><a href="#submit">Submit</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
