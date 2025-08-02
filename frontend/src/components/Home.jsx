import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Scale, Users, FileText, Phone, Star, ArrowRight, Mail } from 'lucide-react';
import './Home.css';

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content: 'LegalPro helped us navigate a complex merger. Their expertise and professionalism were outstanding.',
      rating: 5
    },
    {
      name: 'Michael Davis',
      role: 'Individual Client',
      content: 'The team provided excellent support during my personal injury case. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Family Client',
      content: 'Compassionate and skilled representation during a difficult divorce. Thank you for everything.',
      rating: 5
    }
  ];

  return (
    <>
      <div className="home-container">
        {/* Logout */}
        <div className="logout-container" style={{ textAlign: 'right', padding: '1rem' }}>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              background: '#f0a500',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        <Hero />
        

       

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="why-choose-grid">
              <div className="why-choose-content">
                <h2>Why Choose LegalPro?</h2>
                <p>
                  With decades of combined experience, our team has successfully represented
                  thousands of clients across various legal matters.
                </p>
                <div className="space-y-6">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="feature-title">Experienced Team</h3>
                      <p className="feature-description">Over 25 years of combined legal experience</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="feature-title">Client-Centered Approach</h3>
                      <p className="feature-description">Personalized attention and dedicated support</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="feature-title">24/7 Availability</h3>
                      <p className="feature-description">Always here when you need us most</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-card">
                <h3>Get Your Free Consultation</h3>
                <p>
                  Schedule a no-obligation consultation to discuss your legal needs.
                  We're here to help you understand your options.
                </p>
                <Link to="/contact" className="cta-button">
                  Schedule Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="star-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star" />
                    ))}
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div>
                    <p className="testimonial-author">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#222",
        color: "#eee",
        padding: "2rem 1rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
          <div style={{ flex: "1 1 250px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>About LegalPro</h3>
            <p>Trusted legal services for individuals and businesses since 1998.</p>
          </div>
          <div style={{ flex: "1 1 150px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="/about" style={{ color: "#eee", textDecoration: "none" }}>About Us</a></li>
              <li><a href="/services" style={{ color: "#eee", textDecoration: "none" }}>Services</a></li>
              <li><a href="/cases" style={{ color: "#eee", textDecoration: "none" }}>Cases</a></li>
              <li><a href="/contact" style={{ color: "#eee", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </div>
          <div style={{ flex: "1 1 250px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>Contact Us</h3>
            <p>Email: <a href="mailto:info@legalpro.com" style={{ color: "#eee" }}>info@legalpro.com</a></p>
            <p>Phone: <a href="tel:+1234567890" style={{ color: "#eee" }}>+91 9876543210</a></p>
            <p>Address: 123 Main St, Suite 400, NRT</p>
          </div>
          <div style={{ flex: "1 1 150px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="https://facebook.com/legalpro" target="_blank" rel="noopener noreferrer" style={{ color: "#eee" }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://github.com/Durga-1400" target="_blank" rel="noopener noreferrer" style={{ color: "#eee" }}>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/durgabhavani-tumma-14b29028b/" target="_blank" rel="noopener noreferrer" style={{ color: "#eee" }}>
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:info@legalpro.com" style={{ color: "#eee" }}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
        <p style={{ fontSize: "0.9rem" }}>
          © 2025 LegalPro. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
