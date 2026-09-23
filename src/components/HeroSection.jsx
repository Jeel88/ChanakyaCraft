import React from 'react';
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
        
        {/* Content Box aligned to bottom-left matching the screenshot */}
        <div className="hero-content-wrapper">
          <div className="hero-text-box">
            
            <h1 className="minecraft-pixel-title">
              Unite the<br />Overworld
            </h1>

            <p className="hero-description">
              Raise your banner high and inspire your allies to defeat the ravenous piglins and save the Overworld! Minecraft Legends is coming April 18, 2023.
            </p>

            <div className="hero-action-area">
              {/* Minecraft Pixel Block Button */}
              <button className="mc-pixel-gold-btn">
                <span className="btn-inner-text">LEARN MORE</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
