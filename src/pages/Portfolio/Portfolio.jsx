import React from 'react';
import './Portfolio.css';
import Project from '../../components/Project/Project'; // Reusing the Project component

// Sample project data
const projects = [
  {
    title: 'Project One',
    image: '/path/to/project-one.jpg',
    liveLink: 'https://project-one.com',
    repoLink: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    image: '/path/to/project-two.jpg',
    liveLink: 'https://project-two.com',
    repoLink: 'https://github.com/username/project-two',
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
