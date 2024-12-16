// Import React and the CSS file for styling
import React from 'react';
import './Project.css';

// Project component to display an individual project
function Project({ title, image, liveLink, repoLink }) {
  return (
    <div className="project">
      {/* Display the project's screenshot */}
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      {/* Project title */}
      <h3 className="project-title">{title}</h3>
      {/* Links to the live app and GitHub repository */}
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noreferrer">Live Site</a>
        <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
