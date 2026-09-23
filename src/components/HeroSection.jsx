import React from 'react';
import { Link } from 'react-router-dom';
import landingBg from '../assets/images/LandingPageAqua.jpg';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-viewport">
      {/* Background Image Container */}
      <div
        className="hero-bg-container"
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <div className="hero-gradient-overlay" />

        {/* Content Box */}
        <div className="hero-content-wrapper">
          <div className="hero-text-box">

            <div className="hero-badge">
              <span>⚡ 18-HOUR HACKATHON</span>
            </div>

            <h1 className="minecraft-pixel-title">
              Craft the<br />Future
            </h1>

            <p className="hero-description">
              18 hours of non-stop building, coding, and crafting next-gen solutions.
            </p>

            <div className="hero-action-area">
              {/* Button 1: Gold Block Button */}
              <Link to="/register" className="mc-pixel-gold-btn">
                <span className="btn-inner-text">JOIN THE CRAFT</span>
              </Link>

              {/* Button 2: Minecraft Stone Block Button for Timeline */}
              <Link to="/update" className="mc-pixel-stone-btn">
                <span className="btn-inner-text">QUEST TIMELINE</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
