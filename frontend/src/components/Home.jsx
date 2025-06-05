import React from 'react';
import './Home.css';
import Typing from './Typing';
import { Link, useNavigate } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import esgimage from '../assets/esg.png'
import unihubimage from '../assets/unihub.png'
import cbimage from '../assets/cb.png'
import cbchatbotimage from '../assets/cbchatbot.png'
const projects = [
  {
    title: 'ESGGuardian',
    description: 'A blockchain-powered platform to validate ESG agreements with AI.',
    image: esgimage,
    link: 'https://github.com/vanshsrivastava49/ESGGuardian',
  },
  {
    title: 'UniHub',
    description: 'A college specific social media platform with chats, posts, and communities.',
    image: unihubimage,
    link: 'https://github.com/vanshsrivastava49/UniHub',
  },
  {
    title: 'CampusBuzz',
    description: 'A platform for college students to discover clubs and events of SRM Institute of Science and Technology.',
    image: cbimage,
    link: 'https://campusbuzz.vercel.app/',
  },
  {
    title: 'CampusBuzz Bot',
    description: 'A college info chatbot using LangChain and RAG model for student queries.',
    image: cbchatbotimage,
    link: 'https://campusbuzz-chatbot-bp19.onrender.com/',
  },
];
const Home = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo"><a href="/">Vansh Srivastava</a></div>
        <ul className="nav-links">
         <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
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
      <div className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer interested in AI/ML, web development, and building creative digital experiences. 
          Currently pursuing B.Tech in Computer Science, I enjoy solving real-world problems through code and collaboration.
        </p>
        <p>
          Skilled in JavaScript, Python, React, Node.js, and Machine Learning libraries like scikit-learn and TensorFlow.
          Always eager to learn and grow in the tech community.
        </p>
      </div>
      <div className="work-container" id="work">
      <h2 className="work-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-icon" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="learn-more-btn">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Home;