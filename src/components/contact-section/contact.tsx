import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <form>
          <div className="floating-label-container">
            <input
              type="text"
              id="name"
              className="name-input contact-form-input"
            />
            <label htmlFor="name" className="label contact-form-label">
              Name
            </label>
          </div>
          <div className="floating-label-container">
            <input
              type="text"
              id="name"
              className="name-input contact-form-input"
            />
            <label htmlFor="name" className="label contact-form-label">Subject</label>
          </div>
          <textarea />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-form-info">
        <span className="contact-form-logo"></span>
        <div className="contact-form-social">
          <span className="linked-icon"></span>
          <span className="github-icon"></span>
        </div>
      </div>
    </div>
  );
};
