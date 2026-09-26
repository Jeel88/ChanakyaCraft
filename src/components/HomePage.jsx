import React from 'react';
import HeroSection from './HeroSection';
import EventBottomSection from './EventBottomSection';
import HackathonInfoSection from './HackathonInfoSection';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <HeroSection />
      <EventBottomSection />
      <HackathonInfoSection />
    </div>
  );
}

