import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { Check, Shield, Landmark,Mail} from "lucide-react";

import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>

     <header className="hero hero-city">
  {/* Optional: top nav bar here if needed */}
</header>

<section className="icon-bar">
  <div className="icon-card">
    <i className="fas fa-bullseye"></i>
    <p>Criminal Lawyers</p>
  </div>
  <div className="icon-card">
    <i className="fas fa-car"></i>
    <p>Family Lawyers</p>
  </div>
  <div className="icon-card">
    <i className="fas fa-balance-scale"></i>
    <p>ntellectual Property Lawyers</p>
  </div>
  <div className="icon-card">
    <i className="fas fa-gavel"></i>
    <p>Environmental Lawyers</p>
  </div>
  <div className="icon-card">
    <i className="fas fa-car-crash"></i>
    <p>Corporate Lawyers</p>
  </div>
  <div className="icon-card">
    <i className="fas fa-chart-line"></i>
    <p>Personal injury lawyer</p>
  </div>
</section>

      <section className="clients-success">
        <div className="content">
          
          <div className="text">
            <h2>Committed To Helping Our Clients Succeed.</h2>
            <p>Our clients' success is our top priority, and we are committed to delivering expert legal support across family, corporate, criminal, and immigration law cases. We believe in advocacy, accuracy, and communication to achieve your goals.</p>
          </div>
        </div>
      </section>

      <section className="practice-areas">
        <h2>How We Can Help</h2>
        <div className="cards">
          <div className="card"><h3>Family Law</h3><p>Divorces, custody disputes, and domestic abuse representation.</p></div>
          <div className="card"><h3>Corporate Law</h3><p>Incorporation, compliance consulting, and business litigation.</p></div>
          <div className="card"><h3>Criminal Law</h3><p>Strong legal defense for misdemeanor and felony charges.</p></div>
          <div className="card"><h3>Immigration Law</h3><p>Help with visas, permanent residency, and citizenship matters.</p></div>
          <div className="card"><h3>Real Estate Law</h3><p>Contracts, leases, disputes, and transactions for residential and commercial clients.</p></div>
         
        </div>
      </section>

      <section className="why-us">
        <h2>Why Legal Edge LLC?</h2>
        <ul>
          <li>Client-Centered Approach</li>
          <li>Commitment to Communication</li>
          <li>Strong Negotiation Skills</li>
          <li>Trial-Ready Representation</li>
          <li>Affordable Pricing with Transparent Billing</li>
          <li>Personalized Legal Strategies</li>
        </ul>
      </section>

      <section className="attorneys">
        <h2>Meet Our Attorneys</h2>
        <div className="profiles">
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Lucia Garcia" />
            <h4>LUCIA GARCIA</h4>
            <p>Founding Partner, expert in family law and domestic litigation.</p>
          </div>
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Adam Barnes" />
            <h4>ADAM BARNES</h4>
            <p>Senior Partner, focuses on corporate and real estate law.</p>
          </div>
          <div className="profile">
            <img src="https://thumbs.dreamstime.com/b/indonesian-female-lawyer-portrait-her-workplace-62426285.jpg" alt="Ava Williams" />
            <h4>AVA WILLIAMS</h4>
            <p>Litigation Specialist, renowned for trial readiness and client defense.</p>
          </div>
          <div className="profile">
            <img src="https://static.vecteezy.com/system/resources/previews/010/141/010/large_2x/attractive-young-lawyer-in-office-business-woman-and-lawyers-discussing-contract-papers-with-brass-scale-on-wooden-desk-in-office-law-legal-services-advice-justice-and-real-estate-concept-free-photo.jpg" alt="Noah Bryan" />
            <h4>NOAH BRYAN</h4>
            <p>Immigration Law Lead, supports individuals and families with immigration matters.</p>
          </div>
        </div>
      </section>


      <section className="reviews">
        <h2>What Our Clients Say</h2>
        <blockquote>“The Legal Edge team guided me through a difficult divorce. They were professional, kind, and always one step ahead. Highly recommend!”</blockquote>
        <blockquote>“Adam handled our company’s acquisition seamlessly. His attention to detail saved us thousands.”</blockquote>
      </section>
      
       <section className="news">
  <h2>Legal News & Insights</h2>
  <div className="blog-posts">
    <div className="post">Article 101: Understanding the Impact of AI on Data Privacy Laws</div>
    <div className="post">Article 102: What Every Small Business Should Know About Employment Law Compliance</div>
    <div className="post">Article 103: Your Legal Rights in the Age of Social Media and Online Defamation</div>
  </div>
</section>

    

      

      <section className="call-to-action">
        <h2>Talk To A Lawyer</h2>
        <p>Contact us today to schedule a free consultation and take the first step toward resolving your legal matter.</p>
        <button className="cta-btn">Request A Call</button>
      </section>

      <footer style={{ 
              background: "#222", 
              color: "#eee", 
              padding: "2rem 1rem", 
              textAlign: "center",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
                
                {/* About Section */}
                <div style={{ flex: "1 1 250px", textAlign: "left" }}>
                  <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>About LegalPro</h3>
                  <p>
                    Trusted legal services for individuals and businesses since 1998. We are committed to integrity, excellence, and innovation.
                  </p>
                </div>
        
                {/* Quick Links */}
                <div style={{ flex: "1 1 150px", textAlign: "left" }}>
                  <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>Quick Links</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li><a href="/about" style={{ color: "#eee", textDecoration: "none" }}>About Us</a></li>
                    <li><a href="/services" style={{ color: "#eee", textDecoration: "none" }}>Services</a></li>
                    <li><a href="/cases" style={{ color: "#eee", textDecoration: "none" }}>Cases</a></li>
                    <li><a href="/contact" style={{ color: "#eee", textDecoration: "none" }}>Contact</a></li>
                  </ul>
                </div>
        
                {/* Contact Info */}
                <div style={{ flex: "1 1 250px", textAlign: "left" }}>
                  <h3 style={{ marginBottom: "1rem", color: "#f0a500" }}>Contact Us</h3>
                  <p>Email: <a href="mailto:info@legalpro.com" style={{ color: "#eee", textDecoration: "none" }}>info@legalpro.com</a></p>
                  <p>Phone: <a href="tel:+1234567890" style={{ color: "#eee", textDecoration: "none" }}>+91 9876543210</a></p>
                  <p>Address: 123 Main St, Suite 400, NRT</p>
                </div>
        
                {/* Social Media */}
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
      }
   




