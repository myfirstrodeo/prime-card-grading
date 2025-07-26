import React from 'react';
import './Navbar.css';
import logo from '../assets/pcg.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="PCG Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">GRADING PROCESS</a></li>
        <li><a href="#">LOOKUP</a></li>
        <li><a href="#">SUBMIT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}
