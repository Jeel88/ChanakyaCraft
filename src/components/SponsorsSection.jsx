import React from 'react';
import { ExternalLink, Phone, Award } from 'lucide-react';
import novaLogo from '/assets/sponsors/sponsor_nova.svg';
import apexLogo from '/assets/sponsors/sponsor_apex.svg';
import starlightLogo from '/assets/sponsors/sponsor_starlight.svg';
import bytecraftLogo from '/assets/sponsors/sponsor_bytecraft.svg';
import './SponsorsSection.css';

const sponsorsData = [
  {
    id: 1,
    name: 'NOVA TECH SOLUTIONS',
    logo: novaLogo,
    description: 'Empowering next-generation enterprise innovation through cutting-edge cloud infrastructure, AI solutions, and high-performance software development.',
    website: 'https://novatechsolutions.example.com',
    phone: '+91 98765 43210',
  },
  {
    id: 2,
    name: 'APEX CYBER DYNAMICS',
    logo: apexLogo,
    description: 'Pioneering secure digital ecosystems, advanced cybersecurity protocols, and scalable tech solutions for modern global enterprises.',
    website: 'https://apexcyberdynamics.example.com',
    phone: '+91 91234 56789',
  },
  {
    id: 3,
    name: 'STARLIGHT INNOVATIONS',
    logo: starlightLogo,
    description: 'Transforming ground-breaking ideas into reality through immersive tech, smart IoT engineering, and sustainable hardware systems.',
    website: 'https://starlightinnovations.example.com',
    phone: '+91 99887 76655',
  },
  {
    id: 4,
    name: 'BYTECRAFT LABS',
    logo: bytecraftLogo,
    description: 'Crafting scalable web applications, real-time data analytics engines, and digital experiences for high-impact tech hackathons.',
    website: 'https://bytecraftlabs.example.com',
    phone: '+91 90000 11122',
  }
];

export default function SponsorsSection() {
  return (
    <div className="mc-sponsor-page-wrapper">
      <div className="mc-sponsor-container">

        {/* Header Section matching ChanakyaCraft Design Tokens */}
        <div className="mc-sponsor-header">
          <span className="mc-sponsor-badge">OFFICIAL SPONSORS</span>
          <h1 className="mc-sponsor-main-title">SPONSOR</h1>
          <p className="mc-sponsor-subtitle">
            Brands supporting Chanakya Hackathon
          </p>
          <div className="mc-sponsor-divider-line" />
        </div>

        {/* Sponsor Cards Grid in Project Theme Paper Cards */}
        <div className="mc-sponsor-grid">
          {sponsorsData.map((sponsor) => (
            <div key={sponsor.id} className="mc-sponsor-paper-card">
              
              {/* Purely Visible Logo Container */}
              <div className="mc-sponsor-logo-box">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="mc-sponsor-logo-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<span class="mc-sponsor-fallback-name">${sponsor.name}</span>`;
                  }}
                />
              </div>

              {/* Sponsor Name & Description */}
              <h3 className="mc-sponsor-card-title">{sponsor.name}</h3>

              <p className="mc-sponsor-card-desc">
                {sponsor.description}
              </p>

              {/* Action Buttons: Visit Website & Call Us */}
              <div className="mc-sponsor-actions-row">
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mc-btn-visit"
                >
                  <span>VISIT WEBSITE</span>
                  <ExternalLink size={14} />
                </a>

                <a 
                  href={`tel:${sponsor.phone.replace(/\s+/g, '')}`} 
                  className="mc-btn-call"
                  title={`Call ${sponsor.name}`}
                >
                  <Phone size={14} />
                  <span>CALL US</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Direct Call Banner matching Project Theme */}
        <div className="mc-sponsor-call-banner">
          <div className="mc-sponsor-call-info">
            <Award size={36} className="mc-call-award-icon" />
            <div>
              <h3 className="mc-call-banner-title">BECOME A SPONSOR</h3>
              <p className="mc-call-banner-desc">Partner with us to empower innovators at Chanakya Hackathon</p>
            </div>
          </div>

          <a href="tel:+919999999999" className="mc-call-now-btn">
            <Phone size={16} />
            <span>CALL NOW: +91 99999 99999</span>
          </a>
        </div>

      </div>
    </div>
  );
}
