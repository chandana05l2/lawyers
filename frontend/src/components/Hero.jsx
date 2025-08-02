import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Expert Legal <span className="hero-title-highlight">Representation</span>
              <br />You Can Trust
            </h1>
            <p className="hero-subtitle">
              Over 25 years of experience delivering successful outcomes for our clients. 
              We fight for your rights with unwavering dedication.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-btn-primary">
                Free Consultation
                <ArrowRight className="hero-icon" />
              </Link>
              <Link to="/services" className="hero-btn-secondary">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero-features">
            <div className="hero-feature-card">
              <Shield className="hero-feature-icon" />
              <h3 className="hero-feature-title">Proven Track Record</h3>
              <p className="hero-feature-description">98% success rate in cases handled</p>
            </div>
            <div className="hero-feature-card">
              <Users className="hero-feature-icon" />
              <h3 className="hero-feature-title">Client-Focused</h3>
              <p className="hero-feature-description">Personalized attention for every case</p>
            </div>
            <div className="hero-feature-card">
              <Award className="hero-feature-icon" />
              <h3 className="hero-feature-title">Award-Winning</h3>
              <p className="hero-feature-description">Recognized excellence in legal practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
