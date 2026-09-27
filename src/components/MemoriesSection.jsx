import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import hackathonSecPhoto from '../assets/images/HackathonSecphoto.png';
import landingPageAqua from '../assets/images/LandingPageAqua.jpg';
import runPhoto from '../assets/images/Run.png';
import dogPhoto from '../assets/images/Dog.png';
import characterPhoto from '../assets/images/character.png';
import blockAbovePhoto from '../assets/images/BlockAbovePixels.png';
import './MemoriesSection.css';

const samplePhotos = [
  { id: 1, image: hackathonSecPhoto, alt: 'Chanakya Moment 1' },
  { id: 2, image: landingPageAqua, alt: 'Chanakya Moment 2' },
  { id: 3, image: runPhoto, alt: 'Chanakya Moment 3' },
  { id: 4, image: dogPhoto, alt: 'Chanakya Moment 4' },
  { id: 5, image: characterPhoto, alt: 'Chanakya Moment 5' },
  { id: 6, image: blockAbovePhoto, alt: 'Chanakya Moment 6' },
];

export default function MemoriesSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % samplePhotos.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + samplePhotos.length) % samplePhotos.length);
  };

  return (
    <div className="mc-memories-page-wrapper">
      <div className="mc-memories-container">
        
        {/* Header Section matching ChanakyaCraft Design System */}
        <div className="mc-memories-header">
          <span className="mc-memories-badge">GALLERY</span>
          <h1 className="mc-memories-main-title">MEMORIES</h1>
          <p className="mc-memories-subtitle">
            Glimpses, fun, problem-solving, and excitement from the Chanakya hackathon!
          </p>
          <div className="mc-memories-divider-line" />
        </div>

        {/* Photo Grid with Minecraft Solid Border & Shadow Cards */}
        <div className="mc-memories-grid">
          {samplePhotos.map((item, idx) => (
            <div 
              key={item.id} 
              className="mc-photo-block-card"
              onClick={() => openLightbox(idx)}
            >
              <div className="mc-photo-frame">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="mc-photo-img" 
                  loading="lazy"
                />
                <div className="mc-photo-overlay">
                  <ZoomIn size={28} className="zoom-icon" />
                  <span className="expand-text">EXPAND</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="mc-lightbox-modal" onClick={closeLightbox}>
          <button className="mc-lightbox-close-btn" onClick={closeLightbox} aria-label="Close modal">
            <X size={24} />
          </button>

          <button className="mc-lightbox-nav-btn prev" onClick={prevImage} aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>

          <div className="mc-lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <img 
              src={samplePhotos[lightboxIndex].image} 
              alt={samplePhotos[lightboxIndex].alt} 
              className="mc-lightbox-full-img"
            />
          </div>

          <button className="mc-lightbox-nav-btn next" onClick={nextImage} aria-label="Next image">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
