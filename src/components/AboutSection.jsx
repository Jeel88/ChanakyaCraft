import React from 'react';
import characterPng from '../assets/images/character.png';
import stevePng from '../assets/images/Steve.png';
import dogPng from '../assets/images/Dog.png';
import hackathonPhotoPng from '../assets/images/HackathonSecphoto.png';
import './AboutSection.css';

export default function AboutSection() {
  // Faculty Coordinators Data
  const facultyCoordinators = [
    {
      id: 1,
      name: "NAME 1",
      role: "HOD & VICE PRINCIPAL",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: characterPng
    },
    {
      id: 2,
      name: "NAME 2",
      role: "FACULTY COORDINATOR",
      roleBg: "#0284c7", // Blue badge
      roleColor: "#ffffff",
      avatar: stevePng
    },
    {
      id: 3,
      name: "NAME 3",
      role: "FACULTY COORDINATOR",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: characterPng
    },
    {
      id: 4,
      name: "NAME 4",
      role: "FACULTY COORDINATOR",
      roleBg: "#0284c7", // Blue badge
      roleColor: "#ffffff",
      avatar: stevePng
    }
  ];

  // Core Team Leads Data
  const coreLeads = [
    {
      id: 1,
      name: "NAME 1",
      role: "CHAIRPERSON",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: characterPng
    },
    {
      id: 2,
      name: "NAME 2",
      role: "VICE CHAIRPERSON",
      roleBg: "#0284c7", // Blue badge
      roleColor: "#ffffff",
      avatar: stevePng
    }
  ];

  // Department Heads Data (8 Members)
  const departmentHeads = [
    { id: 1, name: "NAME 1", role: "TECHNICAL HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 2, name: "NAME 2", role: "SPONSORSHIP HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 3, name: "NAME 3", role: "SPONSORSHIP HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 4, name: "NAME 4", role: "FINANCE HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: stevePng },
    { id: 5, name: "NAME 5", role: "MANAGEMENT HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 6, name: "NAME 6", role: "DESIGN HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 7, name: "NAME 7", role: "SOCIAL MEDIA HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: characterPng },
    { id: 8, name: "NAME 8", role: "SECURITY HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: stevePng }
  ];

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

        {/* SECTION 3: FACULTY COORDINATORS */}
        <div className="mc-team-section-container">
          <div className="mc-section-header-banner">
            <span>FACULTY COORDINATORS</span>
          </div>

          {/* Top Row: 3 Faculty Cards */}
          <div className="mc-faculty-grid-top">
            {facultyCoordinators.slice(0, 3).map((faculty) => (
              <div key={faculty.id} className="mc-paper-card mc-team-card">
                <div className="mc-team-photo-container">
                  <img
                    src={faculty.avatar}
                    alt={faculty.name}
                    className="mc-team-photo-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mc-team-info-box" style={{ backgroundColor: faculty.roleBg, color: faculty.roleColor }}>
                  <h3 className="mc-team-member-name">{faculty.name}</h3>
                  <div className="mc-team-role-tag">{faculty.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 1 Centered Faculty Card */}
          <div className="mc-faculty-grid-bottom">
            {facultyCoordinators.slice(3).map((faculty) => (
              <div key={faculty.id} className="mc-paper-card mc-team-card mc-team-card-center">
                <div className="mc-team-photo-container">
                  <img
                    src={faculty.avatar}
                    alt={faculty.name}
                    className="mc-team-photo-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mc-team-info-box" style={{ backgroundColor: faculty.roleBg, color: faculty.roleColor }}>
                  <h3 className="mc-team-member-name">{faculty.name}</h3>
                  <div className="mc-team-role-tag">{faculty.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: MEET THE CORE TEAM */}
        <div className="mc-team-section-container">
          <div className="mc-section-header-banner">
            <span>MEET THE CORE TEAM</span>
          </div>

          {/* Core Leads (Dhreeti Solanki & Tatva Jain) */}
          <div className="mc-core-leads-grid">
            {coreLeads.map((lead) => (
              <div key={lead.id} className="mc-paper-card mc-team-card">
                <div className="mc-team-photo-container">
                  <img
                    src={lead.avatar}
                    alt={lead.name}
                    className="mc-team-photo-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mc-team-info-box" style={{ backgroundColor: lead.roleBg, color: lead.roleColor }}>
                  <h3 className="mc-team-member-name">{lead.name}</h3>
                  <div className="mc-team-role-tag">{lead.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Heads (4x2 Responsive Grid) */}
          <div className="mc-dept-heads-grid">
            {departmentHeads.map((head) => (
              <div key={head.id} className="mc-paper-card mc-head-compact-card">
                <div className="mc-head-photo-container">
                  <img
                    src={head.avatar}
                    alt={head.name}
                    className="mc-head-photo-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mc-head-info-box" style={{ backgroundColor: head.roleBg, color: head.roleColor }}>
                  <h4 className="mc-head-member-name">{head.name}</h4>
                  <div className="mc-head-role-tag">{head.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: THE VISIONARIES BEHIND CHANAKYA */}
        <div className="mc-paper-card mc-visionaries-banner-card">
          <div className="mc-visionaries-badge-tag">
            <span>THE VISIONARIES BEHIND CHANAKYA</span>
          </div>
          <div className="mc-visionaries-img-wrapper">
            <img
              src={hackathonPhotoPng}
              alt="The Visionaries Behind Chanakya"
              className="mc-visionaries-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
