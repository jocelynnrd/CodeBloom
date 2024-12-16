// Import React and the CSS file for styling
import React from 'react';
import './Header.css';
// Import the Navigation component to include it in the header
import Navigation from '../Navigation/Navigation';

// Header component to display the title and navigation
function Header() {
  return (
    <header className="header">
      {/* Site title */}
      <h1 className="header-title">Jocelyn's Portfolio</h1>
      {/* Navigation bar */}
      <Navigation />
    </header>
  );
}

export default Header;
