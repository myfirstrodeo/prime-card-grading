import React from 'react';
import './Navbar.css';
import logo from '../assets/pcg.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="PCG Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#grading">GRADING PROCESS</a></li>
        <li><a href="#lookup">LOOKUP</a></li>
        <li><a href="#submit">SUBMIT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
