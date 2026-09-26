import React, { useState, useEffect } from 'react';
import blockAbovePixelsPng from '../assets/images/BlockAbovePixels.png';
import hackathonPhotoPng from '../assets/images/HackathonSecphoto.png';
import backdropWoolPng from '../assets/images/BackdropWool.png';
import backdropWoolWebp from '../assets/images/BackdropWool.webp';
import './HackathonInfoSection.css';

export default function HackathonInfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press & handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section className="mc-hackathon-sec-wrapper">
      {/* Dark Wool Background */}
      <picture className="mc-hackathon-bg-picture">
        <source srcSet={backdropWoolWebp} type="image/webp" />
        <img 
          src={backdropWoolPng} 
          alt="Dark Wool Background" 
          className="mc-hackathon-bg-img"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* 100% Width Banner Wrapper */}
      <div className="mc-hackathon-banner-wrapper">
        
        {/* BlockAbovePixels Image Layered as Backdrop */}
        <img 
          src={blockAbovePixelsPng} 
          alt="Hackathon Pixel Banner" 
          className="mc-banner-base-img"
        />

        {/* Content Positioned ON TOP of BlockAbovePixels using CSS Positioning */}
        <div className="mc-banner-content-overlay">
          
          {/* Left Side: Content */}
          <div className="mc-hackathon-text-col">
            <h2 className="mc-hackathon-heading">
              WHAT IS HACKATHON?
            </h2>

            <p className="mc-hackathon-desc">
              Challenge yourself in an intensive 18-hour hackathon where teams collaborate to transform innovative ideas into functional solutions. Participants will spend 18 hours developing their projects, followed by 6 hours of evaluation by an expert judging panel. Work on real-world challenges, demonstrate your technical expertise, and compete for exciting prizes while networking with fellow innovators
            </p>

            {/* Bullet List */}
            <ul className="mc-hackathon-feature-list">
              <li className="mc-feature-item">
                <span className="mc-radio-bullet" aria-hidden="true">
                  <span className="mc-radio-inner"></span>
                </span>
                <span className="mc-feature-text">18 Hours of Intensive Building</span>
              </li>
              <li className="mc-feature-item">
                <span className="mc-radio-bullet" aria-hidden="true">
                  <span className="mc-radio-inner"></span>
                </span>
                <span className="mc-feature-text">Industry Mentorship</span>
              </li>
            </ul>

            {/* Learn More Button */}
            <button 
              className="mc-learn-more-btn"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              <span className="btn-arrow">➜</span>
              <span className="btn-text">LEARN MORE</span>
            </button>
          </div>

          {/* Right Side: Single Photo */}
          <div className="mc-hackathon-image-col">
            <img 
              src={hackathonPhotoPng} 
              alt="ChanakyaCraft Hackathon Event" 
              className="mc-single-front-img"
            />
          </div>

        </div>

      </div>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div 
          className="mc-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="mc-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mc-modal-title"
          >
            {/* Modal Header */}
            <div className="mc-modal-header">
              <h3 id="mc-modal-title" className="mc-modal-title">
                CHANAKYACRAFT HACKATHON
              </h3>
              <button 
                className="mc-modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close popup modal"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="mc-modal-content">
              <div className="mc-modal-tag">⚡ 18-HOUR BUILD & 6-HOUR EVALUATION</div>

              <h4 className="mc-modal-subheading">ABOUT THE EVENT</h4>
              <p className="mc-modal-text">
                Challenge yourself in an intensive 18-hour hackathon where teams collaborate to transform innovative ideas into functional solutions. Participants will spend 18 hours developing their projects, followed by 6 hours of evaluation by an expert judging panel. Work on real-world challenges, demonstrate your technical expertise, and compete for exciting prizes while networking with fellow innovators.
              </p>

              <div className="mc-modal-grid">
                <div className="mc-modal-card">
                  <span className="mc-card-label">⏱ TIME DURATION</span>
                  <span className="mc-card-value">18 Hours Hackathon + 6 Hours Judging</span>
                </div>
                <div className="mc-modal-card">
                  <span className="mc-card-label">💡 MENTORSHIP</span>
                  <span className="mc-card-value">1-on-1 Industry Mentorship</span>
                </div>
              </div>

              <div className="mc-modal-placeholder-box">
                <p>📌 Detailed schedule, rulebook, and track guidelines will be updated here in the upcoming task.</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mc-modal-footer">
              <button 
                className="mc-modal-btn-close"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
