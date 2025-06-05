import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;