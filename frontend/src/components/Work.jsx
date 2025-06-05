import React from 'react';
import './Work.css';
import esgimage from '../assets/esg.png'
import unihubimage from '../assets/unihub.png'
import cbimage from '../assets/cb.png'
import cbchatbotimage from '../assets/cbchatbot.png'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
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

const Work = () => {
  return (
    <div className="work-container">
        <nav className="navbar">
                <div className="logo"><a href="/">Vansh Srivastava</a></div>
                <ul className="nav-links">
                 <li><a href="/">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="/Work">Work</a></li>
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
  );
};

export default Work;
