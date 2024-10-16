import React from 'react';
import '../ContactCard.css';
import '../index.css'

const Contact = () => {
  return (
    <div className="card contact-card">
      <h2 className= "contact-title">Let's Chat!</h2>
      <form className="contact-form">
        {/* Name Field */}
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        {/* Email Field */}
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        {/* Message Field */}
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;