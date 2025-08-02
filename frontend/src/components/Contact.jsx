import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Clock,Send } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './contact.css'; 
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = React.useState({
  name: '',
  email: '',
  phone: '',
  urgency: 'normal',
  subject: '',
  message: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wywm2od',        
        'template_u63irti',        
        form.current,
        'VFvBpd_9EZ3xFonZb'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };




 
    
  return (
    <>
      <div className="contact-container">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact LegalPro</h1>
            <p className="contact-hero-description">
              Ready to discuss your legal needs? We're here to help. Schedule your free consultation today.
            </p>
          </div>
        </section>

        <section className="contact-main-section">
          <div className="contact-main-container">
            <div className="contact-grid">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Get Your Free Consultation</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="form-input" placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="urgency" className="form-label">Urgency Level</label>
                      <select id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange} className="form-select">
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Legal Matter Type *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="form-input" placeholder="e.g., Personal Injury, Family Law" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Tell Us About Your Case *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="form-textarea" placeholder="Please provide details about your legal matter..." />
                  </div>

                  <button type="submit" className="form-submit-button">
                    <Send className="submit-icon" /> Send Message
                  </button>
                </form>
                <div className="confidentiality-notice">
                  <p><strong>Confidentiality Notice:</strong> All information is protected by attorney-client privilege.</p>
                </div>
              </div>

              <div className="contact-info-section">
                <div className="contact-info-card">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <Phone className="contact-icon" />
                      <div><h4>Phone</h4><p>(555) 123-4567</p><p>Available 24/7</p></div>
                    </div>
                    <div className="contact-info-item">
                      <Mail className="contact-icon" />
                      <div><h4>Email</h4><p>info@legalpro.com</p><p>We respond within 24 hours</p></div>
                    </div>
                    <div className="contact-info-item">
                      <MapPin className="contact-icon" />
                      <div><h4>Office Address</h4><p>123 Legal Street, Downtown, ST 12345</p><p>Free parking available</p></div>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <h3 className="contact-info-title">Hours</h3>
                  <div className="office-hours-list">
                    <div><Clock className="hours-icon" /><span>Mon - Fri: 8:00 AM - 6:00 PM</span></div>
                    <div><Clock className="hours-icon" /><span>Saturday: 9:00 AM - 2:00 PM</span></div>
                    <div><Clock className="hours-icon" /><span>Sunday: By appointment only</span></div>
                  </div>
                  <p><strong>Emergency Services:</strong> Available 24/7</p>
                </div>

                <div className="why-contact-card">
                  <h3 className="why-contact-title">Why Contact Us?</h3>
                  <ul className="why-contact-list">
                    <li>Free initial consultation</li>
                    <li>No obligation case evaluation</li>
                    <li>Immediate response to urgent matters</li>
                    <li>Confidential and secure communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;