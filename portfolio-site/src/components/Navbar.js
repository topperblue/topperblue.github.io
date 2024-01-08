import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand">Adam Gerig</span>
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </span>
      <ul className={`main-nav ${isOpen ? 'active' : ''}`} id="js-menu">
        <li>
          <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-links" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/projects" className="nav-links" onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;