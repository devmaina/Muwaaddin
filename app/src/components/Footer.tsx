import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/muwaadin-logo.jpg" alt="Muwaaddin Logo" />
            <span>MUWAADDIN</span>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="newsletter">
            <h4>Subscribe to our newsletter</h4>
            <div className="input-group">
              <input type="email" placeholder="Enter your email here..." />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/politics">Politics</Link>
            <Link to="/opinion">Opinion</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/multimedia">Multimedia</Link>
            <Link to="/interviews">Interviews</Link>
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="copyright">
          <span>&copy; 2025 Muwaaddin, All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;