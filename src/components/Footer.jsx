import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

// SVG Instagram Icon
const InstagramIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mc-footer">
      <div className="mc-footer-top-accent" />

      <div className="mc-footer-container">
        
        {/* Left Column: Brand & Tagline */}
        <div className="mc-footer-brand-col">
          <Link to="/" className="mc-footer-logo-text">
            CHANAKYACRAFT
          </Link>

          <p className="mc-footer-tagline">
            Flagship technical fest of Information Technology Dept, SVKM's SBMP.
          </p>

          <div className="mc-footer-copyright">
            © 2026 CHANAKYACRAFT — ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Links Column 1: EXPLORE */}
        <div className="mc-footer-nav-col">
          <h4 className="mc-footer-col-title">EXPLORE</h4>
          <ul className="mc-footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Links Column 2: EVENT */}
        <div className="mc-footer-nav-col">
          <h4 className="mc-footer-col-title">EVENT</h4>
          <ul className="mc-footer-links">
            <li><Link to="/update">Event Updates</Link></li>
            <li><Link to="/update">Timeline</Link></li>
          </ul>
        </div>

        {/* Links Column 3: COMMUNITY */}
        <div className="mc-footer-nav-col">
          <h4 className="mc-footer-col-title">COMMUNITY</h4>
          <ul className="mc-footer-links">
            <li><Link to="/about">Mentors</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
          </ul>
        </div>

        {/* Links Column 4: MEDIA & INFO */}
        <div className="mc-footer-nav-col">
          <h4 className="mc-footer-col-title">MEDIA & INFO</h4>
          <ul className="mc-footer-links">
            <li><Link to="/about">Gallery</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </div>

        {/* Right Actions Column: Instagram & Register Now */}
        <div className="mc-footer-actions-col">
          <div className="mc-footer-social-row">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mc-social-btn-icon"
              title="Follow us on Instagram"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>

            <Link to="/register" className="mc-footer-register-btn">
              <span>REGISTER NOW</span>
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
