import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Selamat Datang di <span className="highlight">Maqdis Dev</span>
            </h1>
            <p className="hero-description">
              Frontend Developer yang fokus pada tampilan antarmuka yang menarik, responsif, dan mudah digunakan. Mari bangun pengalaman digital terbaik bersama!
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Mulai Sekarang</button>
              <button className="btn btn-secondary">Lihat Profil</button>
            </div>
          </div>

           <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-card card-1">
                <div className="card-content">
                  <div className="card-icon">💻</div>
                  <h4>Frontend Dev</h4>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <div className="card-icon">🎨</div>
                  <h4>Responsive</h4>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <div className="card-icon">🚀</div>
                  <h4>Performance</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
