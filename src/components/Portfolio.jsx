import React from 'react';
import '../index.css'; 
import ProjectCard from './Project';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* First ProjectCard */}
        <ProjectCard 
          image="/path/to/calculator.jpg"
          title="Calculator Project"
          summary="A simple calculator built with React that performs basic arithmetic operations."
          githubLink="https://github.com/your-github/calculator-project"
          deployedLink="https://calculator-live.com"
        />

        {/* Second ProjectCard */}
        <ProjectCard 
          image="/path/to/webapi.jpg"
          title="Web API Project"
          summary="A RESTful Web API project that interacts with a public API to retrieve data."
          githubLink="https://github.com/your-github/webapi-project"
          deployedLink="https://webapi-live.com"
        />

        {/* More ProjectCards */}
        <ProjectCard 
          image="/path/to/portfolio.jpg"
          title="Personal Portfolio"
          summary="A portfolio website built with React to showcase my projects and skills."
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
      </div>
    </div>
  );
}

export default Portfolio;
