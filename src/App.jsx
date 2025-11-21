import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importieren Sie hier Ihre Komponenten, z. B. für Home, About, etc.

import Navbar from './components/Navbar/Navbar';


import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/Home';

import { StarBackground } from './components/Background/StarBackground';


function App() {
  return (
    <div className='  min-h-screen bg-background text-foreground overflow-x-hidden'>
 
     <StarBackground />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />      
        <Route path="/project" element={<Project />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
