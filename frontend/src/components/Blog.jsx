import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';
import pin from '../assets/images/pin.jpg';
import cl from '../assets/images/cl.jpg';
import cm from '../assets/images/cm.jpg';
import re from '../assets/images/re.jpg';
import rep from '../assets/images/rep.jpg';
import el from '../assets/images/el.jpg';
import im from '../assets/images/im.jpg';
import fl from '../assets/images/fl.jpg';
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { Mail } from 'lucide-react';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Personal Injury Law",
      excerpt: "Explore the fundamentals of personal injury law and what it means for accident victims.",
      author: "Jane Doe",
      phone: "123-456-7890",
      date: "May 15, 2025",
      category: "Personal Injury",
      tags: ["Injury", "Law", "Accident"],
      featured: true,
      image: pin
    },
    {
      id: 2,
      title: "Corporate Law: What Every Business Owner Should Know",
      excerpt: "A comprehensive guide on corporate law essentials for startups and established businesses.",
      author: "John Smith",
      phone: "987-654-3210",
      date: "June 1, 2025",
      category: "Corporate Law",
      tags: ["Business", "Corporate", "Law"],
      featured: true,
      image: cl
    },
    {
      id: 3,
      title: "The Basics of Criminal Defense",
      excerpt: "Understand your rights and the criminal defense process with this beginner's guide.",
      author: "Alice Johnson",
      phone: "555-321-6789",
      date: "April 22, 2025",
      category: "Criminal Defense",
      tags: ["Criminal", "Defense", "Rights"],
      featured: false,
      image: cm
    },
    {
      id: 4,
      title: "Navigating Real Estate Transactions",
      excerpt: "Tips and legal considerations for buying or selling property smoothly.",
      author: "Michael Brown",
      phone: "222-333-4444",
      date: "March 30, 2025",
      category: "Real Estate",
      tags: ["Real Estate", "Property", "Transactions"],
      featured: false,
      image: re
    },
    {
      id: 5,
      title: "Estate Planning: Protect Your Legacy",
      excerpt: "Why estate planning matters and how to get started.",
      author: "Emily Davis",
      phone: "444-555-6666",
      date: "May 10, 2025",
      category: "Estate Planning",
      tags: ["Estate", "Planning", "Will"],
      featured: true,
      image: rep
    },
    {
      id: 6,
      title: "Employment Law: Know Your Rights at Work",
      excerpt: "Key aspects of employment law every employee and employer should be aware of.",
      author: "Robert Wilson",
      phone: "999-888-7777",
      date: "June 5, 2025",
      category: "Employment Law",
      tags: ["Employment", "Workplace", "Rights"],
      featured: false,
      image: el
    },
    {
      id: 7,
      title: "Immigration Law Updates in 2025",
      excerpt: "Latest changes and how they affect immigrants and businesses.",
      author: "Sophia Martinez",
      phone: "123-789-4560",
      date: "May 20, 2025",
      category: "Immigration Law",
      tags: ["Immigration", "Visa", "Law"],
      featured: false,
      image: im
    },
    {
      id: 8,
      title: "Family Law: Custody and Support Explained",
      excerpt: "Essential information about family law, child custody, and support.",
      author: "David Lee",
      phone: "888-999-0000",
      date: "April 15, 2025",
      category: "Family Law",
      tags: ["Family", "Custody", "Support"],
      featured: false,
      image: fl
    }
  ];

  const categories = [
    "All",
    "Personal Injury",
    "Corporate Law",
    "Criminal Defense",
    "Real Estate",
    "Estate Planning",
    "Employment Law",
    "Immigration Law",
    "Family Law"
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
    <div className="blog-container">
      <section className="blog-hero">
        <h1>Legal Insights & Expert Analysis</h1>
        <p>
          Stay informed with the latest legal news, insights, and expert analysis
          from our experienced team of attorneys.
        </p>
      </section>

      <section className="featured-articles-section">
        <h2>Featured Articles</h2>
        <div className="featured-articles-grid">
          {featuredPosts.map(post => (
            <div key={post.id} className="featured-article-card">
              <div className="badges">
                <span className="badge featured">Featured</span>
                <span className="badge">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="tags">
                {post.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
              <div className="meta">
                <span><User size={16} /> {post.author}</span>
                <div className="phone">📞 {post.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-filter-section">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="blog-posts-section">
        <h2>{selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}</h2>
        <p>{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found</p>
        <div className="blog-posts-grid">
          {filteredPosts.map(post => (
            <div key={post.id} className="blog-post-card">
              <img src={post.image} alt={post.title} />
              <div className="info">
                <span className="category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="meta">
                  <span><User size={16} /> {post.author}</span>
                  <div className="phone">📞 {post.phone}</div>
                </div>
              </div>
            </div>
          ))}
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
        </>
  );
}

export default Blog;
