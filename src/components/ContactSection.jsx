import React from 'react';
import { Phone } from 'lucide-react';
import backdropWoolWebp from '../assets/images/BackdropWool.webp';
import backdropWoolPng from '../assets/images/BackdropWool.png';
import characterPng from '../assets/images/character.png';
import stevePng from '../assets/images/Steve.png';
import compassIconPng from '../assets/images/CompassPixel.png';
import compassIconWebp from '../assets/images/CompassPixel.webp';
import './ContactSection.css';

// SVG Instagram Icon
const InstagramIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// SVG WhatsApp Icon
const WhatsappIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function ContactSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Shri+Bhagubhai+Mafatlal+Polytechnic+and+College+of+Engineering";

  // 2 Committee Leads data
  const committeeLeads = [
    {
      id: 1,
      name: "DHREETI SOLANKI",
      role: "CHAIRPERSON",
      roleColor: "#f59e0b", // Yellow badge
      phone: "+91 70397 45708",
      avatar: characterPng
    },
    {
      id: 2,
      name: "TATVA JAIN",
      role: "VICE CHAIRPERSON",
      roleColor: "#fca5a5", // Peach/Pink badge
      phone: "+91 90047 06625",
      avatar: stevePng
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
            <span>SVKM'S SBMPCOE — CHANAKYA</span>
          </div>
          <h1 className="mc-contact-main-title">
            CONTACT US
          </h1>
          <p className="mc-contact-subtitle">
            Have questions about registration, schedules, or technical guidelines? Reach out to our organizing team!
          </p>
        </div>

        {/* MASTER 2-COLUMN GRID */}
        <div className="mc-contact-master-grid">

          {/* LEFT COLUMN: Committee Leads + Campus Location */}
          <div className="mc-contact-left-col">

            {/* BLOCK 1: COMMITTEE LEADS (Sky Blue Outer Frame with Hover Animation) */}
            <div className="mc-leads-outer-frame">
              <div className="mc-frame-header-box">
                <span>COMMITTEE LEADS</span>
              </div>

              {/* 2 Side-by-Side Compact Cards */}
              <div className="mc-leads-horizontal-row">
                {committeeLeads.map((lead) => (
                  <div key={lead.id} className="mc-paper-card mc-lead-person-card">
                    {/* Circular Avatar Frame */}
                    <div className="mc-circle-avatar-wrapper">
                      <img
                        src={lead.avatar}
                        alt={lead.name}
                        className="mc-circle-avatar-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="mc-person-name">{lead.name}</h3>

                    {/* Role Badge */}
                    <div
                      className="mc-person-role-badge"
                      style={{ backgroundColor: lead.roleColor }}
                    >
                      {lead.role}
                    </div>

                    {/* Black Phone Action Button (Color unchanged on hover) */}
                    <a href={`tel:${lead.phone}`} className="mc-black-phone-btn">
                      <Phone size={14} className="phone-icon-svg" />
                      <span>{lead.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOCK 2: FEST VENUE LOCATION (Homepage Style Location Box) */}
            <div className="mc-paper-card mc-campus-block">
              <div className="mc-campus-badge-tag">
                <span>FEST VENUE</span>
              </div>

              <div className="mc-campus-content-grid">
                <div className="card-icon-wrapper">
                  <picture>
                    <source srcSet={compassIconWebp} type="image/webp" />
                    <img
                      src={compassIconPng}
                      alt="Minecraft Compass"
                      className="mc-asset-icon compass-icon"
                      loading="lazy"
                      decoding="async"
                      width="68"
                      height="68"
                    />
                  </picture>
                </div>

                <h3 className="mc-campus-inst-title">
                  SVKM'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & SBMPCOE
                </h3>

                <p className="mc-campus-subtitle">VILE PARLE (WEST), MUMBAI</p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-redirect-tag-cyan"
                >
                  <span>OPEN GOOGLE MAPS ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: TALL CONNECT HUB BLOCK */}
          <div className="mc-contact-right-col">
            <div className="mc-paper-card mc-social-hq-card">
              {/* Angled Badge */}
              <div className="mc-wham-badge">
                <span>CHANAKYA!</span>
              </div>

              {/* Inner Header Box */}
              <div className="mc-social-header-box">
                <span>CONNECT WITH US</span>
              </div>

              <p className="mc-social-desc">
                Transmit your signals across the web. We are monitoring all frequencies.
              </p>

              {/* Action Social Buttons */}
              <div className="mc-social-btns-stack">
                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/chanakya_sbmpce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-social-action-btn btn-instagram"
                >
                  <div className="btn-left">
                    <InstagramIcon size={22} />
                    <span>INSTAGRAM</span>
                  </div>
                  <span className="btn-arrow">➔</span>
                </a>

                {/* WhatsApp Button (Green) */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-social-action-btn btn-whatsapp"
                >
                  <div className="btn-left">
                    <WhatsappIcon size={22} />
                    <span>WHATSAPP</span>
                  </div>
                  <span className="btn-arrow">➔</span>
                </a>
              </div>

              {/* Mascot Graphic at bottom of Connect Hub */}
              <div className="mc-hq-mascot-row">
                <img
                  src={characterPng}
                  alt="Minecraft Mascot"
                  className="mc-hq-mascot-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
