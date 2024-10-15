import React from 'react';
import '../index.css'; 
import ProjectCard from './Project';
import '../ProjectCard.css'

const Portfolio = () => {
  return (
    <div className = "portfolio-container">
      <h1 className="card portfolio-title-card">My Creations:</h1>
      <div className="projects-container">
        {/* First ProjectCard */}
        <ProjectCard 
          image="../../public/images/calculator.png"
          title="Calculator Project"
          summary="A simple calculator built with React that performs basic arithmetic operations."
          githubLink="https://github.com/your-github/calculator-project"
          deployedLink="https://calculator-live.com"
        />

        {/* Second ProjectCard */}
        <ProjectCard 
          image="../../public/images/storm.png"
          title="Web API Project"
          summary="A RESTful Web API project that interacts with a public API to retrieve data."
          githubLink="https://github.com/your-github/webapi-project"
          deployedLink="https://webapi-live.com"
        />

        {/* More ProjectCards */}
        <ProjectCard 
          image="../../public/images/number-3.png"
          title="Project 3"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-4.png"
          title="Project 4"
          summary="This will store a brief summary of the project"
         githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-5.png"
          title="Project 5"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-6.png"
          title="Project 6"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-7.png"
          title="Project 7"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-8.png"
          title="Project 8"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-9.png"
          title="Project 9"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />

        <ProjectCard 
          image="../../public/images/number-10.png"
          title="Project 10"          
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-11.png"
          title="Project 11"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../../public/images/number-12.png"
          title="Project 12"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
      </div>
    </div>
  );
}

export default Portfolio;
