import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Redrop Logo" className="navbar-logo" />
          <span className="navbar-title">Redrop</span>
        </div>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#about">Über uns</a>
          <a href="#join">Mitmachen</a>
        </div>
      </div>
    </nav>
  );
}
