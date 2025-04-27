import { useState, useEffect } from 'react';
import '../styles/header.css';

export default function Header({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Theme: check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      closeMobileMenu();
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h1 className="logo">Abdullah.</h1>

        {/* Theme Toggle Button */}
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="theme-toggle-icon">{darkMode ? '☀️' : '🌙'}</span>
          <span className="theme-toggle-text">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`nav-links-container ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <button 
                onClick={() => handleNavClick('home')} 
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')} 
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('certifications')} 
                className={activeSection === 'certifications' ? 'active' : ''}
              >
                Certifications
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')} 
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
