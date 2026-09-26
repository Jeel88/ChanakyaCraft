import React from 'react';
import characterPng from '../assets/images/character.png';
import dogPng from '../assets/images/Dog.png';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <div className="mc-about-page-wrapper">
      <div className="mc-about-container">

        {/* Page Title Header */}
        <div className="mc-about-header">
          <div className="mc-about-badge">
            <span>SVKM'S SBMPCOE</span>
          </div>
          <h1 className="mc-about-main-title">
            ABOUT CHANAKYA
          </h1>
        </div>

        {/* SECTION 1: Chanakya Overview Card + Main Character */}
        <div className="mc-about-row">

          {/* Left Card: CHANAKYA Overview Card */}
          <div className="mc-paper-card mc-fest-card">
            {/* Top Right Yellow Badge */}
            <div className="mc-fest-badge">
              <span>CHANAKYA</span>
            </div>

            {/* Headline */}
            <div className="mc-fest-headline">
              <span className="hl-cyan">CRAFTING INNOVATION.</span>
              <span className="hl-dark">EMPOWERING MINDS.</span>
              <span className="hl-green">BUILDING THE FUTURE.</span>
            </div>

            <div className="mc-fest-divider" />

            {/* Description Text */}
            <p className="mc-fest-desc">
              <strong>CHANAKYA</strong> is the flagship annual technical festival of the Information Technology Department at SVKM's Shri Bhagubhai Mafatlal Polytechnic. It serves as a premier platform where creativity, innovation, and technology converge to empower the next generation of engineers and innovators. CHANAKYA brings together brilliant minds to collaborate, compete, and showcase their technical prowess through hands-on hackathons and diverse technical challenges.
            </p>
          </div>

          {/* Right Graphic: Main Minecraft Character (Hidden on Mobile) */}
          <div className="mc-char-wrapper">
            <img
              src={characterPng}
              alt="Minecraft Character"
              className="mc-char-img"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>

        {/* SECTION 2: ABOUT SBMP & COLLEGE OF ENGINEERING with Dog Graphic */}
        <div className="mc-about-bottom-block">
          <div className="mc-paper-card mc-sbmp-card">

            <div className="mc-sbmp-header-row">
              <div>
                <h2 className="mc-sbmp-title">
                  ABOUT SBMP & COLLEGE OF ENGINEERING
                </h2>
                <div className="mc-sbmp-title-underline" />
              </div>

              {/* Prominent Minecraft Dog Character */}
              <div className="mc-dog-wrapper">
                <img
                  src={dogPng}
                  alt="Minecraft Dog"
                  className="mc-dog-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="mc-sbmp-inner-box">
              <p className="mc-sbmp-desc">
                <strong>SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering</strong> has been a pioneer in providing <strong>need-based technical education</strong> for over six decades in Vile Parle, Mumbai. Established in 1963 by Shri Vile Parle Kelavani Mandal (SVKM), the institution offers premier autonomous diploma courses alongside AICTE-approved B.Tech degree programs. Committed to academic excellence and industry relevance, the institution equips students with practical engineering skills, robust theoretical knowledge, and innovative problem-solving capabilities.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
