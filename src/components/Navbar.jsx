import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="minecraft-navbar">
      <div className="navbar-inner">
        
        {/* Left Navigation Links */}
        <div className="nav-left">
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setGamesOpen(true)}
            onMouseLeave={() => setGamesOpen(false)}
          >
            <button className="nav-link dropdown-btn">
              GAMES <ChevronDown size={14} className={`chevron-icon ${gamesOpen ? 'rotate' : ''}`} />
            </button>
            {gamesOpen && (
              <div className="dropdown-menu">
                <a href="#minecraft" className="dropdown-item">CHANAKYACRAFT</a>
                <a href="#dungeons" className="dropdown-item">DUNGEONS</a>
                <a href="#legends" className="dropdown-item">LEGENDS</a>
                <a href="#education" className="dropdown-item">EDUCATION</a>
              </div>
            )}
          </div>

          <a href="#community" className="nav-link">COMMUNITY</a>
          <a href="#merch" className="nav-link external-link">
            MERCH <ExternalLink size={12} className="inline-icon" />
          </a>
          <a href="#support" className="nav-link external-link">
            SUPPORT <ExternalLink size={12} className="inline-icon" />
          </a>
        </div>

        {/* Center Logo */}
        <div className="nav-center-logo">
          <a href="/" className="minecraft-logo-text">
            MINECRAFT
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="nav-right">
          <button className="mc-btn-green">
            GET MINECRAFT
          </button>

          {/* Mobile hamburger menu toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#games" className="mobile-nav-link">GAMES</a>
          <a href="#community" className="mobile-nav-link">COMMUNITY</a>
          <a href="#merch" className="mobile-nav-link">MERCH ↗</a>
          <a href="#support" className="mobile-nav-link">SUPPORT ↗</a>
          <button className="mc-btn-green mobile-btn">
            GET MINECRAFT
          </button>
        </div>
      )}
    </nav>
  );
}
