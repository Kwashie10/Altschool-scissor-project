import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="welcome-message">
      
      <h1>Welcome to Scissor URL Shortener</h1>
      <p>
        Scissor allows you to shorten URLs for your business, events, or any other purposes. 
        Easily create shorter, more manageable links to share with others.
      </p>
      <p>
        Get started by entering your long URL in the input field below and clicking the "Shorten" button.
      </p>
      <Link to="SignUp" className="signup-link">Sign Up</Link>
      <i className="material-icons">scissors</i> {/* Material Icons representing Scissor URL Shortener */}
    </div>
  );
};

export default WelcomeMessage;
