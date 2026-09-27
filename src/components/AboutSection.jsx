import React from 'react';
import characterPng from '../assets/images/character.png';
import stevePng from '../assets/images/Steve.png';
import dogPng from '../assets/images/Dog.png';
import hackathonPhotoPng from '../assets/images/HackathonSecphoto.png';
import './AboutSection.css';
import jeelPhoto from '../assets/images/JeelS.jpeg';
import RahilS from '../assets/images/RahilS.jpeg';
import JayD from '../assets/images/JayGs.jpeg';

import NeetaK from '../assets/images/NeetaK.jpeg';
import MZShaikh from '../assets/images/MZShaikh.jpeg';

// SIMPLY IMPORT YOUR MEMBER PHOTOS HERE (Supports .jpeg, .jpg, .png, .webp):
// Example:
// import neetaPhoto from '../assets/images/neeta.jpeg';
// import sureshPhoto from '../assets/images/suresh.jpg';
// import jeelPhoto from '../assets/images/jeel.jpeg';

export default function AboutSection() {
  // Faculty Coordinators Data
  const facultyCoordinators = [
    {
      id: 1,
      name: "Dr. M. Z. Shaikh ",
      role: "PRINCIPAL",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: MZShaikh // Replace with imported photo variable (e.g. neetaPhoto)
    },
    {
      id: 2,
      name: "MRS. NEETA G. KADUKAR ",
      role: "VICE PRINCIPAL",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: NeetaK // Replace with imported photo variable (e.g. neetaPhoto)
    },
    {
      id: 3,
      name: "MR. Suresh Rajpurohit",
      role: "FACULTY COORDINATOR",
      roleBg: "#0284c7", // Blue badge
      roleColor: "#ffffff",
      avatar: stevePng // Replace with imported photo variable (e.g. sureshPhoto)
    },
  ];

  // Core Team Leads Data
  const coreLeads = [
    {
      id: 1,
      name: "Jay Devgania",
      role: "PRESIDENT",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: JayD
    },
    {
      id: 2,
      name: "Shiv Kumbhar",
      role: "VICE PRESIDENT",
      roleBg: "#0284c7", // Blue badge
      roleColor: "#ffffff",
      avatar: stevePng
    },
    {
      id: 3,
      name: "Rahil Shah",
      role: "SECRETARY",
      roleBg: "#fbbf24", // Yellow badge
      roleColor: "#111827",
      avatar: RahilS
    },
  ];

  // Department Heads Data
  const departmentHeads = [
    { id: 1, name: "Jeel Savaliya", role: "TECHNICAL HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: jeelPhoto },
    { id: 2, name: "Jay Metha", role: "TECH SUPPORT HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 3, name: "Preet Dudhat", role: "TECH SUPPORT HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 4, name: "Yug Moradiya", role: "FINANCE HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 5, name: "Yug Shah", role: "SPONSORSHIP HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 6, name: "Khushi Patel", role: "CREATIVE HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 7, name: "Paran Vasa", role: "CREATIVE HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 8, name: "Yash Parmar", role: "CREATIVE HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 9, name: "Mann Lodaliya", role: "SOCIAL MEDIA HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 10, name: "Aanya Ghelani", role: "SOCIAL MEDIA HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 11, name: "Kevin Mendapara", role: "MARKETING & PR HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng },
    { id: 12, name: "Aryan Jevani", role: "LOGISTICS & SECURITY HEAD", roleBg: "#0284c7", roleColor: "#ffffff", avatar: characterPng },
    { id: 13, name: "Dev Chande", role: "LOGISTICS SUPPORT HEAD", roleBg: "#fbbf24", roleColor: "#111827", avatar: stevePng }
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

          {/* Faculty Coordinators Grid */}
          <div className="mc-faculty-grid">
            {facultyCoordinators.map((faculty) => (
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
        </div>

        {/* SECTION 4: MEET THE CORE TEAM */}
        <div className="mc-team-section-container">
          <div className="mc-section-header-banner">
            <span>MEET THE CORE TEAM</span>
          </div>

          {/* Core Leads */}
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

          {/* Department Heads Grid */}
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
