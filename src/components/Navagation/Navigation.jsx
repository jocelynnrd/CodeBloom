// Import React, useState for handling active section state, and CSS for styling
import React, { useState } from 'react';
import './Navigation.css';

// Navigation component to display clickable links
function Navigation() {
  // State to track which section is active
  const [active, setActive] = useState('About Me');

  // Array of section names for easy updates
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {sections.map((section) => (
          <li
            key={section} // Unique key for each section
            className={`navigation-item ${active === section ? 'active' : ''}`}
            onClick={() => setActive(section)} // Update active section on click
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
