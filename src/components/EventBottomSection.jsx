import React from 'react';
import backdropWoolWebp from '../assets/images/BackdropWool.webp';
import backdropWoolPng from '../assets/images/BackdropWool.png';

import swordIconWebp from '../assets/images/SwordPixels.webp';
import swordIconPng from '../assets/images/SwordPixels.png';

import goldIconWebp from '../assets/images/GoldPixel.webp';
import goldIconPng from '../assets/images/GoldPixel.png';

import compassIconWebp from '../assets/images/CompassPixel.webp';
import compassIconPng from '../assets/images/CompassPixel.png';

import './EventBottomSection.css';

// 3-Pixel Minecraft Corner Glass Shine Component (Top-Left & Opposite Bottom-Right)
const MinecraftGlassCornerShines = () => (
  <>
    <div className="mc-glass-shine top-left" aria-hidden="true">
      <span className="shine-pixel p1"></span>
      <span className="shine-pixel p2"></span>
      <span className="shine-pixel p3"></span>
    </div>
    <div className="mc-glass-shine bottom-right" aria-hidden="true">
      <span className="shine-pixel p1"></span>
      <span className="shine-pixel p2"></span>
      <span className="shine-pixel p3"></span>
    </div>
  </>
);

export default function EventBottomSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Shri+Bhagubhai+Mafatlal+Polytechnic+and+College+of+Engineering";

  return (
    <section className="mc-bottom-section">
      {/* Background Image with HTML Lazy Loading */}
      <picture className="mc-bottom-bg-picture">
        <source srcSet={backdropWoolWebp} type="image/webp" />
        <img 
          src={backdropWoolPng} 
          alt="Backdrop Wool Texture" 
          className="mc-bottom-bg-img"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="mc-bottom-container">
        
        {/* Title Header */}
        <div className="mc-news-header">
          <h2 className="mc-news-title">DETAILS & LOCATION</h2>
        </div>

        {/* 3 Main Minecraft Feature Cards (Equal Box Sizes) */}
        <div className="mc-cards-row">

          {/* CARD 1: DATES (Blue Cyan Glass Theme with Sword Icon) */}
          <div className="mc-feature-card card-blue-glass">
            <MinecraftGlassCornerShines />
            
            <div className="card-icon-wrapper">
              <picture>
                <source srcSet={swordIconWebp} type="image/webp" />
                <img 
                  src={swordIconPng} 
                  alt="Minecraft Sword" 
                  className="mc-asset-icon sword-icon" 
                  loading="lazy"
                  decoding="async"
                  width="88"
                  height="88"
                />
              </picture>
            </div>
            <h3 className="card-main-title text-cyan">23RD & 24TH OCT</h3>
            <p className="card-sub-title text-cyan-sub">2 DAYS OF ENDLESS POSSIBILITIES</p>
          </div>

          {/* CARD 2: PRIZE POOL (Minecraft Gold Bar Theme with Gold Bar Icon) */}
          <div className="mc-feature-card card-gold-bar">
            <MinecraftGlassCornerShines />

            <div className="card-icon-wrapper">
              <picture>
                <source srcSet={goldIconWebp} type="image/webp" />
                <img 
                  src={goldIconPng} 
                  alt="Minecraft Gold" 
                  className="mc-asset-icon gold-icon" 
                  loading="lazy"
                  decoding="async"
                  width="84"
                  height="84"
                />
              </picture>
            </div>
            <h3 className="card-main-title text-gold">PRIZE POOL</h3>
            <p className="card-sub-title prize-highlight-gold">₹50K WORTH OF PRIZES</p>
          </div>

          {/* CARD 3: LOCATION (Blue Cyan Glass Theme with Compass Icon & Google Maps Redirect) */}
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-feature-card card-blue-glass card-location-link"
            title="Click to view location on Google Maps"
          >
            <MinecraftGlassCornerShines />
            
            <div className="card-icon-wrapper">
              <picture>
                <source srcSet={compassIconWebp} type="image/webp" />
                <img 
                  src={compassIconPng} 
                  alt="Minecraft Compass" 
                  className="mc-asset-icon compass-icon" 
                  loading="lazy"
                  decoding="async"
                  width="84"
                  height="84"
                />
              </picture>
            </div>
            <h3 className="card-main-title location-title text-cyan">
              SHRI BHAGUBHAI MAFATLAL AND COLLEGE OF ENGINEERING
            </h3>
            <p className="card-sub-title text-cyan-sub">VILE PARLE</p>
            
            <div className="location-redirect-tag-cyan">
              <span>OPEN GOOGLE MAPS ↗</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

