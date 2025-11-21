import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import { ThemeToggle } from '../Background/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Um den aktiven Link zu stylen

  // Links in ein Array auslagern für saubereren Code
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/project', label: 'Project' },
    { path: '/contact', label: 'Contact' },
    
  ];

  // Funktion zum Schließen des Menüs nach Klick (auf Mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Der Cursor sollte global sein, aber wir lassen ihn hier wie gewünscht */}
    
      <header className='sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-all duration-300'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center gap-2'>
          
          {/* Logo */}
          <a href="/" className='font-bold text-xl tracking-wide hover:text-blue-600 transition-colors'>
            Sinthujan Sivanantham
          </a>

          {/* Desktop Menu (versteckt auf Mobile) */}
          <nav className='hidden md:flex items-center'>
            <ul className="flex space-x-8 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className={`relative group transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-blue-600' : 'hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    {/* Unterstrich-Animation beim Hover */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
             <ThemeToggle></ThemeToggle>
          </nav>

          {/* Mobile Hamburger Button (sichtbar nur auf Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden text-2xl focus:outline-none z-50'
            aria-label="Toggle Menu"
          >
            {/* Einfaches SVG Icon, wechselt zwischen Burger und X */}
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
           {navLinks.map((link) => (
            
              <Link 
                key={link.label}
                to={link.path} 
                onClick={closeMenu}
                 
                className={`text-xl font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === link.path ? 'text-blue-600' : ''
                }`}
              >
               
                {link.label}
              </Link>
              
            ))}
        </div>
        
      </header>
    </>
  )
}

export default Navbar
