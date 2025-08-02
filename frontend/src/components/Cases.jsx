import React from 'react';
import {
  Scale,
  Calendar,
  Award,
  Users,
  Building,
  Shield,
  Gavel,
  DollarSign
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@radix-ui/react-accordion';
import './Cases.css';
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { Mail } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: "Corporate Merger Victory - Tech Acquisition",
      category: "Corporate Law",
      result: "$85M Settlement",
      description: "Successfully represented a major corporation in a complex merger dispute involving intellectual property rights and regulatory compliance.",
      year: "2024",
      icon: Building,
      details: {
        challenge: "Our client faced significant regulatory hurdles and IP disputes during a high-stakes technology acquisition worth $2.3 billion.",
        strategy: "We assembled a multidisciplinary team to address antitrust concerns, negotiate IP licensing agreements, and ensure regulatory compliance across three jurisdictions.",
        outcome: "Secured favorable merger terms, resolved all IP disputes, and obtained regulatory approval, resulting in successful acquisition and $85M additional value for our client.",
        timeline: "18 months from initial engagement to closing",
        keyFactors: ["Regulatory expertise", "IP law specialization", "International coordination", "Strategic negotiation"]
      }
    },
    {
      title: "Personal Injury Landmark Case - Medical Malpractice",
      category: "Personal Injury",
      result: "$12M Award",
      description: "Secured record-breaking compensation for client injured in surgical malpractice case, setting new precedent for safety regulations.",
      year: "2023",
      icon: Users,
      details: {
        challenge: "Client suffered permanent disability due to surgical error at prestigious hospital. Hospital denied liability and fought aggressively.",
        strategy: "Retained top medical experts, conducted extensive discovery, and built comprehensive case demonstrating hospital's systemic failures and cover-up attempts.",
        outcome: "Jury awarded $12M in damages, highest medical malpractice verdict in county history. Hospital implemented new safety protocols.",
        timeline: "3.5 years from filing to verdict",
        keyFactors: ["Expert medical testimony", "Thorough investigation", "Compelling trial presentation", "Precedent-setting victory"]
      }
    },
    {
      title: "Criminal Defense Acquittal - White Collar Case",
      category: "Criminal Defense",
      result: "Complete Acquittal",
      description: "Successfully defended executive against serious federal fraud charges, achieving full acquittal through thorough investigation and expert testimony.",
      year: "2023",
      icon: Shield,
      details: {
        challenge: "Client faced 47 federal fraud charges with potential 25-year sentence. Government had extensive documentation and cooperating witnesses.",
        strategy: "Conducted parallel investigation, challenged evidence admissibility, discredited key witnesses, and presented alternative narrative showing client was scapegoat.",
        outcome: "Jury delivered not guilty verdict on all counts after 6-hour deliberation. Client's reputation and career fully restored.",
        timeline: "2 years from indictment to acquittal",
        keyFactors: ["Forensic accounting expertise", "Witness credibility challenges", "Constitutional violations", "Compelling defense narrative"]
      }
    },
    {
      title: "Real Estate Development Victory",
      category: "Real Estate Law",
      result: "$25M Project Approved",
      description: "Navigated complex zoning and regulatory challenges to secure approval for major commercial development project against strong opposition.",
      year: "2022",
      icon: Calendar,
      details: {
        challenge: "Mixed-use development faced fierce community opposition, environmental concerns, and complex zoning requirements across multiple municipalities.",
        strategy: "Coordinated with environmental consultants, engaged community stakeholders, negotiated benefit agreements, and navigated regulatory maze.",
        outcome: "Secured all permits and approvals for $250M development project, creating 500 jobs and revitalizing downtown area.",
        timeline: "4 years from initial planning to final approval",
        keyFactors: ["Community engagement", "Environmental compliance", "Multi-jurisdictional coordination", "Public-private partnerships"]
      }
    },
    {
      title: "Employment Class Action Settlement",
      category: "Employment Law",
      result: "$18M Class Settlement",
      description: "Led successful class action lawsuit representing 2,500 employees in wage and hour dispute against major retailer.",
      year: "2023",
      icon: Gavel,
      details: {
        challenge: "Large retailer systematically violated overtime laws affecting thousands of employees across multiple states over 5-year period.",
        strategy: "Obtained class certification, managed complex discovery across multiple jurisdictions, and negotiated comprehensive settlement addressing all violations.",
        outcome: "Secured $18M settlement plus ongoing compliance monitoring, resulting in average $7,200 payment per class member and policy changes.",
        timeline: "3 years from filing to final settlement approval",
        keyFactors: ["Class action expertise", "Multi-state coordination", "Comprehensive damages analysis", "Policy reform achievement"]
      }
    },
    {
      title: "Family Law Custody Victory",
      category: "Family Law",
      result: "Full Custody Awarded",
      description: "Protected children's welfare in high-conflict custody case involving domestic violence and parental alienation allegations.",
      year: "2024",
      icon: Users,
      details: {
        challenge: "Client faced false allegations of abuse while trying to protect children from genuinely abusive ex-spouse with superior financial resources.",
        strategy: "Gathered extensive documentation of abuse, retained child psychology experts, and built comprehensive case demonstrating children's best interests.",
        outcome: "Court awarded full custody to our client with supervised visitation for abusive parent. Children are now safe and thriving.",
        timeline: "18 months of intensive litigation",
        keyFactors: ["Child advocacy expertise", "Domestic violence knowledge", "Expert witness coordination", "Evidence preservation"]
      }
    }
  ];

  const practiceAreas = [
    { name: "Corporate Law", cases: 145, recovery: "$2.3B" },
    { name: "Personal Injury", cases: 523, recovery: "$125M" },
    { name: "Criminal Defense", cases: 387, recovery: "95% Success Rate" },
    { name: "Real Estate", cases: 267, recovery: "$850M" },
    { name: "Employment Law", cases: 189, recovery: "$45M" },
    { name: "Family Law", cases: 445, recovery: "92% Favorable Outcomes" }
  ];

  return (
    <>

    
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* All your JSX sections remain the same (Hero, Practice Areas, Statistics, Testimonials) */}

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any case below to learn about the challenges we faced, strategies we employed, and results we achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="text-right">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold block mb-2">
                          {caseItem.year}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {caseItem.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{caseItem.description}</p>

                    <div className="border-t pt-4 mb-6">
                      <p className="text-2xl font-bold text-green-600 mb-2">{caseItem.result}</p>
                    </div>

                    <Accordion.Root type="multiple" className="w-full">
                      <AccordionItem value="challenge">
                        <AccordionTrigger className="text-left font-semibold text-blue-600">The Challenge</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{caseItem.details.challenge}</AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="strategy">
                        <AccordionTrigger className="text-left font-semibold text-blue-600">Our Strategy</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{caseItem.details.strategy}</AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="outcome">
                        <AccordionTrigger className="text-left font-semibold text-blue-600">The Outcome</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          <p className="mb-4">{caseItem.details.outcome}</p>
                          <p className="mb-4"><strong>Timeline:</strong> {caseItem.details.timeline}</p>
                          <div>
                            <strong>Key Success Factors:</strong>
                            <ul className="mt-2 space-y-1">
                              {caseItem.details.keyFactors.map((factor, idx) => (
                                <li key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion.Root>
                  </div>
                </div>
              );
            })}
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
        </>
  );
};

export default Cases;
