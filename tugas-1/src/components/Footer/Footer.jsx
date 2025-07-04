import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Budy Santoso. Crafted with passion and code.</p>
          </div>
          
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/budysantoso" 
              className="social-link" 
              aria-label="LinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Busan24" 
              className="social-link" 
              aria-label="GitHub" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.instagram.com/budysantoso24_" 
              className="social-link" 
              aria-label="Instagram" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
