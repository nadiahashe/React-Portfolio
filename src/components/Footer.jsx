import React from 'react';
import './footer.css'; // Import the CSS file for the footer styles
import git from '../assets/gitWhite.png'; // Import the image file for the GitHub logo
import linked from '../assets/linkWhite.png'; // Import the image file for the LinkedIn logo

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className='footer-content'>
          <a href="https://github.com/nadiahashe" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={git} alt="GitHub" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={linked} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;