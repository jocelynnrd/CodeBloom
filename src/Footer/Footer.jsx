// Import React and the CSS file for styling
import React from 'react';
import './Footer.css';

// Footer component to display copyright and social media links
function Footer() {
  return (
    <footer className="footer">
      {/* Copyright notice */}
      <p>&copy; 2024 Jocelyn</p>
      {/* Social media and portfolio links */}
      <ul className="footer-links">
        <li><a href="https://github.com/jocelynnrd" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
