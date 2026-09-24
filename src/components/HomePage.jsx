import React from 'react';
import HeroSection from './HeroSection';
import EventBottomSection from './EventBottomSection';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <HeroSection />
      <EventBottomSection />
    </div>
  );
}
