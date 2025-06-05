import React from 'react';
import './App.css';
import Typing from './Typing';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Vansh Srivastava</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </ul>
        <div className="social-links">
          <a href="https://twitter.com/Vansh_49" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icons" />
          </a>
          <a href="https://linkedin.com/in/vansh-srivastava49" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icons" />
          </a>
          <a href="https://github.com/vanshsrivastava49" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icons" />
          </a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <p>Hello, I’m Vansh,</p>
          <Typing />
          <p className="location">based in India.</p>
          <button
            className="resume-btn"
            onClick={() => window.open('./Vansh_Srivastava_Resume.pdf', '_blank')}
          >
            Resume
          </button>

        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/vansh_photo.jpg" alt="Profile" />
            <div className="decoration">+++</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;