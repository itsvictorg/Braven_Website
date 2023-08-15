import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/fonts/fonts.css';

import About from "./pages/about-me";
import Homepage from "./pages/homepage";
import Projects from "./pages/philosophy.js";
import Contact from "./pages/contact.js";
import MyNavbar from "./components/nav";
import MediaQuery from 'react-responsive'
import Services from "./pages/services";

const backgroundImage = require("./assets/images/background.jpg")

const mBackgroundStyle =  {
 
  background:"white",
  backgroundImage:`url(${backgroundImage})`,
  backgroundSize: "600%",
  height: "100vh"

}

const App = () => {

  return (
    <>
    
      <MediaQuery query="(min-width: 769px)">
    
      <Router>
        <MyNavbar />
        <div className="background">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        
        </div>
    
      </Router>
      
      
      </MediaQuery>


      <MediaQuery query="(max-width: 1224px)">
      
      <Router>
        <MyNavbar />
        <div className="background" style={mBackgroundStyle}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>
    </div>
      </Router>
     
      </MediaQuery>
      
      
    </>
  );
};

export default App;
