import { useState } from 'react';
import '../styles/header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-symbol">⚙️</span>
          <span className="logo-text">ProFit</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cta-button">Get Started</button>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
