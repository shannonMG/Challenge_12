import React from 'react';
import '../index.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      {/* Image Section */}
      <section >
       <h2 className= "card portfolio-title-card">Welcome!</h2>
      </section>


      <section className="card image-container">
        <img 
          src="../images/headshot.png" 
          alt="A portrait or graphic representing me" 
          className="about-me-image"
        />
      </section>

    

      {/* Text Section */}
      <section className="card text-container">
        <p>
          With a teaching background that shaped my love for simplifying the complex, 
          my journey to becoming a developer feels like a natural evolution. 
          I’ve learned that great teaching isn’t just about explaining concepts—it’s about 
          making knowledge accessible and inspiring curiosity. 
          That’s the spirit I bring to coding. Every line I write is crafted with the hope 
          that it will be educational for someone else, whether they’re debugging, learning, 
          or building on what I’ve started. 
          I see development as an opportunity to not only create but also to teach through my code, 
          ensuring that technology is approachable and empowering for everyone.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
