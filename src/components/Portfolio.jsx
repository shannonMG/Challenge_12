import React from 'react';
import '../index.css'; 
import ProjectCard from './Project';
import '../ProjectCard.css'


const Portfolio = () => {
  return (
    <div className = "portfolio-container">
      <h2 className="card portfolio-title-card">My Creations:</h2>
      <div className="projects-container">
        {/* First ProjectCard */}
        <ProjectCard 
          image="../images/book.png"
          title="Pre-Work Study Guide"
          summary="My first dabble into coding! This is the pre-work study guide I created prior to my bootcamp."
          githubLink="https://github.com/shannonMG/prework-study-guide"
          deployedLink="https://shannonmg.github.io/prework-study-guide/"
        />

        {/* Second ProjectCard */}
        <ProjectCard 
          image="../images/reading-book.png"
          title="Read-Me Generator"
          summary="A CLI that prompts the user for information in order to produce a README file"
          githubLink="https://github.com/shannonMG/Challenge-7"
          deployedLink="https://webapi-live.com"
        />

        {/* More ProjectCards */}
        <ProjectCard 
          image="../images/car.png"
          title="Vehicle Builder"
          summary="A CLI application that allows user to build vehicles and perform actions with them."
          githubLink="https://github.com/shannonMG/challenge-8-vehicle-builder"
          deployedLink="https://drive.google.com/file/d/1EFne-v2JNCAo38XWKmdk9YZ4b57e53B6/view?usp=sharing"
        />
         <ProjectCard 
          image="../images/employee.png"
          title="Employee Management System"
          summary="A CLI application that allows user to manage and update employee records."
         githubLink="https://github.com/shannonMG/Challenge_10_Restarted"
          deployedLink="https://drive.google.com/file/d/1GEHkSX4mKjI7CvW8S4q0_sJBRBRdLxcw/view?usp=sharing"
        />
         <ProjectCard 
          image="../images/number-5.png"
          title="Project 5"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-6.png"
          title="Project 6"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-7.png"
          title="Project 7"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-8.png"
          title="Project 8"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-9.png"
          title="Project 9"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />

        <ProjectCard 
          image="../images/number-10.png"
          title="Project 10"          
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-11.png"
          title="Project 11"
          summary="This will store a brief summary of the project"
          githubLink="https://github.com/your-github/portfolio-project"
          deployedLink="https://portfolio-live.com"
        />
         <ProjectCard 
          image="../images/number-12.png"
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
