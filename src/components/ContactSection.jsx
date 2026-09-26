import React from 'react';
import backdropWoolWebp from '../assets/images/BackdropWool.webp';
import backdropWoolPng from '../assets/images/BackdropWool.png';
import characterPng from '../assets/images/character.png';
import stevePng from '../assets/images/Steve.png';
import dogPng from '../assets/images/Dog.png';
import './ContactSection.css';

export default function ContactSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Shri+Bhagubhai+Mafatlal+Polytechnic+and+College+of+Engineering";

  // Sample contacts array (user can swap out images/details later)
  const contactLeads = [
    {
      id: 1,
      name: "Event Lead Coordinator",
      role: "Student President & Management",
      phone: "+91 98765 43210",
      email: "contact@chanakyacraft.in",
      avatar: stevePng,
      badge: "GENERAL ENQUIRIES"
    },
    {
      id: 2,
      name: "Technical Hackathon Lead",
      role: "Problem Statements & Tech Ops",
      phone: "+91 98765 43211",
      email: "tech@chanakyacraft.in",
      avatar: characterPng,
      badge: "HACKATHON TECH"
    }
  ];

  return (
    <div className="mc-contact-page-wrapper">
      {/* Dark Wool Background */}
      <picture className="mc-contact-bg-picture">
        <source srcSet={backdropWoolWebp} type="image/webp" />
        <img
          src={backdropWoolPng}
          alt="Dark Wool Background"
          className="mc-contact-bg-img"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="mc-contact-container">

        {/* Page Title Header */}
        <div className="mc-contact-header">
          <div className="mc-contact-badge">
            <span>SVKM'S SBMP — CHANAKYACRAFT</span>
          </div>
          <h1 className="mc-contact-main-title">
            CONTACT US
          </h1>
          <p className="mc-contact-subtitle">
            Have questions about registration, event schedules, or technical guidelines? Reach out to our organizing team!
          </p>
        </div>

        {/* SECTION 1: People Face / Organizing Committee Leads (FIRST) */}
        <div className="mc-leads-section">
          <div className="mc-leads-header">
            <h2 className="mc-leads-title">ORGANIZING COMMITTEE LEADS</h2>
            <div className="mc-leads-underline" />
          </div>

          <div className="mc-leads-grid">
            {contactLeads.map((lead) => (
              <div key={lead.id} className="mc-paper-card mc-lead-card">
                <div className="mc-lead-badge">{lead.badge}</div>

                {/* Avatar Image Frame */}
                <div className="mc-lead-avatar-frame">
                  <img
                    src={lead.avatar}
                    alt={lead.name}
                    className="mc-lead-avatar-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Lead Information */}
                <h3 className="mc-lead-name">{lead.name}</h3>
                <div className="mc-lead-role">{lead.role}</div>

                <div className="mc-lead-divider" />

                <div className="mc-lead-contact-info">
                  <div className="mc-lead-info-row">
                    <span className="info-icon">📞</span>
                    <a href={`tel:${lead.phone}`} className="info-link">{lead.phone}</a>
                  </div>
                  <div className="mc-lead-info-row">
                    <span className="info-icon">✉️</span>
                    <a href={`mailto:${lead.email}`} className="info-link">{lead.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Contact Information Card + Mascot Graphic (SECOND) */}
        <div className="mc-contact-row">

          {/* Left Paper Card: Main Contact Info */}
          <div className="mc-paper-card mc-info-card">
            {/* Top Right Yellow Badge */}
            <div className="mc-info-badge">
              <span>GET IN TOUCH</span>
            </div>

            {/* Headline */}
            <div className="mc-info-headline">
              <span className="hl-cyan">REACH OUT.</span>
              <span className="hl-dark">WE ARE HERE TO HELP.</span>
              <span className="hl-green">CONNECT WITH US.</span>
            </div>

            <div className="mc-info-divider" />

            {/* Contact Details List */}
            <div className="mc-contact-details-grid">
              <div className="mc-detail-item">
                <div className="mc-detail-icon">📧</div>
                <div className="mc-detail-text">
                  <div className="mc-detail-label">OFFICIAL EMAIL</div>
                  <a href="mailto:chanakya.sbmp@gmail.com" className="mc-detail-value">
                    chanakya.sbmp@gmail.com
                  </a>
                </div>
              </div>

              <div className="mc-detail-item">
                <div className="mc-detail-icon">📍</div>
                <div className="mc-detail-text">
                  <div className="mc-detail-label">VENUE LOCATION</div>
                  <div className="mc-detail-value">
                    SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering, Vile Parle (W), Mumbai - 400056
                  </div>
                </div>
              </div>

              <div className="mc-detail-item">
                <div className="mc-detail-icon">📸</div>
                <div className="mc-detail-text">
                  <div className="mc-detail-label">INSTAGRAM</div>
                  <a
                    href="https://www.instagram.com/chanakya_sbmpce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-detail-value"
                  >
                    @chanakya_sbmpce ↗
                  </a>
                </div>
              </div>

              <div className="mc-detail-item">
                <div className="mc-detail-icon">⏱️</div>
                <div className="mc-detail-text">
                  <div className="mc-detail-label">HELP DESK HOURS</div>
                  <div className="mc-detail-value">
                    Monday – Saturday: 9:00 AM – 5:00 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mascot Graphic (Hidden on Mobile) */}
          <div className="mc-contact-mascot-wrapper">
            <img
              src={characterPng}
              alt="Minecraft Character Helper"
              className="mc-contact-mascot-img"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>

        {/* SECTION 3: Visit Campus / Google Maps Banner Block (THIRD) */}
        <div className="mc-campus-bottom-block">
          <div className="mc-paper-card mc-campus-card">
            <div className="mc-campus-header">
              <h2 className="mc-campus-title">VISIT OUR CAMPUS</h2>
              <div className="mc-campus-underline" />
            </div>

            <p className="mc-campus-desc">
              SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering is located in Vile Parle (West), Mumbai — opposite Cooper Hospital. Easy to reach via suburban rail (Vile Parle station) and metro connections.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-maps-btn"
              title="Open Campus Location on Google Maps"
            >
              <span>OPEN GOOGLE MAPS ↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
