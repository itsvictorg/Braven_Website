import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from '../pages/about-me';
import Projects from './projects.js';
import Contact from './contact.js';
import Nav from '../components/nav';



function App() {
  return (
    
      <Router>
      <Nav />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/philosophy" 
                element={<Projects />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
              <Route 
                path="/services" 
                element={<Contact />} 
              />
              <Route 
                path="/press" 
                element={<Contact />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>

  );
}

export default Header;