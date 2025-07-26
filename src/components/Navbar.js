import React from 'react';
import './Navbar.css';
import pcgLogo from '../assets/pcg.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={pcgLogo} alt="Prime Card Grading" />
      </div>
      <ul className="navbar-links">
        <li><a href="#grading">Grading</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#lookup">Lookup</a></li>
        <li><a href="#submit">Submit</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
