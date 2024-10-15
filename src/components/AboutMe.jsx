import React from 'react';
import '../index.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Image Section */}
      <section className="card">
        <img 
          src="path-to-your-image.jpg" 
          alt="A portrait or graphic representing me" 
          className="about-me-image"
        />
      </section>

      {/* Text Section */}
      <section className="card">
        <h2>Welcome!</h2>
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
