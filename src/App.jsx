import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="app-main-layout">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
