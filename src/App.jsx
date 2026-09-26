import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function PlaceholderPage({ title, description }) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1 className="minecraft-pixel-title">{title}</h1>
        <p className="hero-description">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-main-layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/update" 
          element={<PlaceholderPage title="Latest Updates" description="Stay tuned for the newest announcements, timeline reveals, and rulebook updates for Chanakya." />} 
        />
        <Route 
          path="/about" 
          element={<AboutSection />} 
        />
        <Route 
          path="/contact" 
          element={<ContactSection />} 
        />
        <Route 
          path="/sponsors" 
          element={<PlaceholderPage title="Our Sponsors" description="Meet the incredible tech partners and sponsors making Chanakya possible." />} 
        />
        <Route 
          path="/register" 
          element={<PlaceholderPage title="Register Now" description="Form your squad and register your team for the 18-hour Chanakya Hackathon!" />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
