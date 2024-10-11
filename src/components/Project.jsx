import React from 'react';
import './ProjectCard.css';

function ProjectCard({ image, title, summary, githubLink, deployedLink }) {
  return (
    <div className="project-card">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={title} className="project-image" />
        </div>
        {/* Back Side */}
        <div className="card-back">
          <h3>{title}</h3>
          <p>{summary}</p>
          <div className="links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;