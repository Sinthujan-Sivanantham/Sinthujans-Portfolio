import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importieren Sie hier Ihre Komponenten, z. B. für Home, About, etc.
import CustomCursor from './components/Navbar/CustomCursor';
import Navbar from './components/Navbar/Navbar';

import Home from './components/About/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/About';
import { ThemeToggle } from './components/Background/ThemeToggle';
import { StarBackground } from './components/Background/StarBackground';


function App() {
  return (
    <div className='  min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
     <StarBackground />
      <Navbar />
         <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />      
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
