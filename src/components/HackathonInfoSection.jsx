import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              WHAT IS CHANAKYA HACKATHON?
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
            {/* Minecraft Theme Header Bar */}
            <div className="mc-modal-header-theme">
              <h3 id="mc-modal-title" className="mc-modal-theme-title">
                CHANAKYA HACKATHON
              </h3>
              <button
                className="mc-modal-theme-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close popup modal"
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Light Content Body */}
            <div className="mc-modal-body-light">

              {/* Gold Highlight Stat Card */}
              <div className="mc-gold-stat-card">
                <div className="mc-gold-stat-icon">⚡</div>
                <div className="mc-gold-stat-text">
                  <div className="mc-gold-stat-title">CHANAKYA HACKATHON</div>
                  <div className="mc-gold-stat-sub">18 Hours of Intensive Building</div>
                </div>
              </div>

              {/* Main Introduction */}
              <p className="mc-modal-intro-text">
                Welcome to the <strong>Chanakya 18-Hour Hackathon</strong>! This intense hands-on experience challenges participants to ideate, prototype, and pitch innovative technical projects under the guidance of industry mentors and expert judges.
              </p>

              {/* Consists Of Section */}
              <div className="mc-modal-section">
                <h4 className="mc-section-heading">THE HACKATHON CONSISTS OF:</h4>
                <div className="mc-cards-grid">
                  <div className="mc-detail-card">
                    <div className="mc-card-header">
                      <span className="mc-card-emoji">⏱️</span>
                      <span className="mc-card-title">18 Hours of Development</span>
                    </div>
                    <p className="mc-card-desc">
                      Teams will brainstorm, design, code, test, and refine their projects while receiving guidance from mentors throughout the event.
                    </p>
                  </div>

                  <div className="mc-detail-card">
                    <div className="mc-card-header">
                      <span className="mc-card-emoji">🏆</span>
                      <span className="mc-card-title">Project Evaluation</span>
                    </div>
                    <p className="mc-card-desc">
                      After development, each team will present their solution to an expert panel. Projects will be evaluated based on innovation, technical implementation, usability, scalability, presentation, and overall impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emerging Tech Domain Statement */}
              <p className="mc-modal-intro-text">
                Participants are encouraged to build solutions across multiple emerging technology domains, fostering creativity and interdisciplinary collaboration. Whether your idea addresses societal challenges, business needs, or technological advancements, this hackathon provides the perfect platform to showcase your skills and transform ideas into reality.
              </p>

              {/* Why Participate Section */}
              <div className="mc-modal-section">
                <h4 className="mc-section-heading">🚀 WHY PARTICIPATE?</h4>
                <ul className="mc-list-bullets">
                  <li>🚀 Build innovative solutions in just 18 hours</li>
                  <li>🤝 Collaborate with talented developers and designers</li>
                  <li>💡 Solve real-world challenges</li>
                  <li>👨‍🏫 Receive mentorship from industry professionals</li>
                  <li>🏅 Present your project before an expert jury</li>
                  <li>🌐 Expand your professional network</li>
                  <li>🎯 Enhance your technical and problem-solving skills</li>
                  <li>🏆 Compete for ₹50K Cash Prize Pool</li>
                </ul>
              </div>

              {/* Eligibility Section */}
              <div className="mc-modal-section">
                <h4 className="mc-section-heading">📋 ELIGIBILITY</h4>
                <div className="mc-info-box">
                  <p>• Open to students from recognized institutions.</p>
                  <p>• Team size: 2–4 members</p>
                </div>
              </div>

              {/* What to Expect Section */}
              <div className="mc-modal-section">
                <h4 className="mc-section-heading">🎯 WHAT TO EXPECT?</h4>
                <ul className="mc-list-bullets">
                  <li>⚡ Continuous coding and development sessions</li>
                  <li>💡 Mentor guidance throughout the event</li>
                  <li>🌐 Technical support and networking opportunities</li>
                  <li>🏅 Professional project evaluation</li>
                  <li>📜 Certificates for all eligible participants</li>
                  <li>🏆 Exciting rewards for outstanding projects</li>
                </ul>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="mc-modal-footer-light">
              <Link
                to="/register"
                className="mc-modal-register-btn"
                onClick={() => setIsModalOpen(false)}
              >
                JOIN THE HACKATHON
              </Link>
              <button
                className="mc-modal-close-btn-style"
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
