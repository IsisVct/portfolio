import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          Isabelle<span className="dot">.</span>
        </a>
        <div className="navbar-links">
          <a href="#sobre" className="nav-link">Sobre Mim</a>
          <a href="#projetos" className="nav-link">Projetos</a>
          
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contato" className="nav-btn">Contato</a>
        </div>
      </div>
    </nav>
  );
}
