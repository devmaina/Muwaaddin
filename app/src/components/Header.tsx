import React from 'react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="top-bar">
          <div className="date-location">
            <span>Thursday, August 21, 2025</span>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <LanguageToggle />
        </div>
        <div className="main-nav">
          <div className="logo">
            <img src="https://placeholder.co/50x50/333333/FFFFFF?text=Logo" alt="Muwaaddin Logo" />
            <Link to="/">MUWAADDIN</Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/politics">Politics</Link></li>
            <li><Link to="/opinion">Opinion</Link></li>
            <li><Link to="/culture">Culture</Link></li>
            <li><Link to="/multimedia">Multimedia</Link></li>
            <li><Link to="/interviews">Interviews</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <div className="search-icon">
            <a href="#"><i className="fas fa-search"></i></a>
          </div>
          <div className="hamburger-menu" id="hamburger-menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;