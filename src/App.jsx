import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services';

function App() {
  return (
    <div>
      <Router>
      <nav className='nav'>
        <img src="../public/vite.svg" alt="" /> &nbsp;&nbsp;&nbsp;
        <Link to="/home">Home</Link> <Link to="/about">About</Link> <Link to="/contact">Contact</Link> <Link to="/services">Services</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>

    <h1 className='head'>TOP GRACE HOSPITAL AND DENTAL CARE</h1>
    <p className='pg'>Your Health is our concern</p>
    <div className='app-container'>
      <video autoPlay loop muted >
        <source width={1200} src="/public/AdobeStock_539933893_Video_HD_Preview.mov" type="video/mp4" />
      </video>
    </div>
    

    </div>
    
  );
}

export default App;