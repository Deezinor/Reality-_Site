import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import BeatBox from './pages/beatbox';
import Contact from './pages/contact';
import Services from './pages/services';
import Projects from './pages/projects';
// import Header from './components/header';

// EmailJS
// import emailjs from '@email.js/browser';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/beatbox" element={<BeatBox />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
