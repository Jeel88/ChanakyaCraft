import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Desktop primary links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Update', path: '/update' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  // Complete Mobile Hamburger Drawer links (including all removed footer items with unique hash paths)
  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Event Updates', path: '/update' },
    { name: 'Timeline', path: '/update#timeline' },
    { name: 'About Us', path: '/about' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Gallery', path: '/about#gallery' },
    { name: 'FAQ', path: '/contact#faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const currentFullPath = location.pathname + location.hash;

  const isLinkActive = (linkPath) => {
    if (linkPath.includes('#')) {
      return currentFullPath === linkPath;
    }
    return location.pathname === linkPath && !location.hash;
  };

  return (
    <nav className="minecraft-navbar">
      <div className="navbar-inner">

        {/* Left Navigation Links */}
        <div className="nav-left">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="nav-center-logo">
          <Link to="/" className="minecraft-logo-text">
            CHANAKYA
          </Link>
        </div>

        {/* Right Actions */}
        <div className="nav-right">
          {/* Desktop Register Button */}
          <Link to="/register" className="mc-btn-green desktop-btn flex-center">
            <span>REGISTER</span>
            <ArrowRight size={16} className="btn-arrow-icon" />
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu with All Links */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-links">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-link ${isLinkActive(link.path) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/register"
            className="mc-btn-green mobile-btn flex-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>REGISTER</span>
            <ArrowRight size={16} className="btn-arrow-icon" />
          </Link>
        </div>
      )}
    </nav>
  );
}
