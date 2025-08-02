import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X, Scale } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Cases', path: '/cases' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
    
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <Scale className="header-logo-icon" />
            <span className="header-logo-text">LegalPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`header-nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action */}
          <Link to="/contact" className="header-cta-btn">
            Free Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="header-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="header-mobile-icon" />
            ) : (
              <Menu className="header-mobile-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-nav">
            <nav className="header-mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`header-mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="header-mobile-cta-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
