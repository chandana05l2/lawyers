import React from 'react';
import { Scale, Users, FileText, Building, Shield, Gavel, Heart, Briefcase, Home } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import './Services.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const serviceAreas = [
  { title: "Divorce", desc: "Expert support through divorce complexities and legal requirements.", icon: <Gavel /> },
  { title: "Child Support", desc: "Advocating for fair and sustainable support mechanisms for family matters.", icon: <Heart /> },
  { title: "Adoption", desc: "Navigating adoption and guardianship with care and legal expertise.", icon: <Users /> },
  { title: "Agreements", desc: "Drafting solid agreements for your legal peace of mind and protection.", icon: <FileText /> },
  { title: "Support", desc: "Comprehensive legal support for your diverse needs and challenges ahead.", icon: <Scale /> },
  { title: "Property", desc: "Expert guidance in property matters for seamless legal experiences.", icon: <Home /> },
];

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses of all sizes, from startups to Fortune 500 companies.',
      features: ['Business Formation & Structure', 'Contract Drafting & Review', 'Mergers & Acquisitions', 'Corporate Governance', 'Securities Law', 'Employment Law'],
      detailedInfo: {
        overview: 'Our corporate law practice provides end-to-end legal solutions for businesses at every stage of growth. We understand that business success depends on solid legal foundations and strategic planning.',
        process: 'We begin with a comprehensive assessment of your business needs, then develop customized legal strategies that align with your goals. Our team works closely with your management to ensure compliance and maximize opportunities.',
        pricing: 'Starting from $350/hour for associates, $500/hour for partners. Flat fee arrangements available for certain services like business formation ($2,500-$5,000) and contract reviews ($1,500-$3,000).',
        timeline: 'Business formation: 2-4 weeks, Contract reviews: 3-7 days, M&A transactions: 2-6 months depending on complexity.',
        benefits: ['Reduced legal risk', 'Improved operational efficiency', 'Strategic business advantage', 'Regulatory compliance', 'Cost-effective solutions']
      }
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate representation for sensitive family matters with a focus on protecting your interests.',
      features: ['Divorce & Separation', 'Child Custody & Support', 'Adoption Services', 'Prenuptial Agreements', 'Domestic Violence Protection', 'Property Division'],
      detailedInfo: {
        overview: 'Our family law practice combines legal expertise with emotional intelligence to guide families through difficult transitions. We prioritize the best interests of children while protecting our clients\' rights.',
        process: 'Initial consultation to understand your situation, development of a strategic approach, mediation when possible, and aggressive representation when necessary. We maintain open communication throughout the process.',
        pricing: 'Hourly rates: $300-$450. Uncontested divorce: $2,500 flat fee. Contested divorce: $5,000-$15,000. Child custody modifications: $2,500-$7,500.',
        timeline: 'Uncontested divorce: 2-4 months, Contested divorce: 6-18 months, Custody modifications: 2-6 months, Adoption: 3-12 months.',
        benefits: ['Emotional support during difficult times', 'Protection of parental rights', 'Fair financial settlements', 'Minimized impact on children', 'Efficient resolution']
      }
    },
    {
      icon: FileText,
      title: 'Personal Injury',
      description: 'Fighting for fair compensation for injury victims with aggressive representation and personal attention.',
      features: ['Auto Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Slip & Fall Cases', 'Product Liability', 'Wrongful Death'],
      detailedInfo: {
        overview: 'Our personal injury attorneys have recovered over $100 million for clients. We work on contingency, meaning you pay nothing unless we win your case.',
        process: 'Free consultation, thorough investigation, medical documentation, negotiation with insurance companies, and trial representation if necessary. We handle all aspects while you focus on recovery.',
        pricing: 'Contingency fee: 33% if settled before trial, 40% if case goes to trial. No upfront costs or attorney fees unless we win.',
        timeline: 'Simple cases: 3-6 months, Complex cases: 1-3 years, Medical malpractice: 2-4 years average.',
        benefits: ['No upfront costs', 'Maximum compensation', 'Expert medical network', 'Proven track record', 'Personal attention']
      }
    },
    {
      icon: Home,
      title: 'Real Estate Law',
      description: 'Expert guidance through all aspects of real estate transactions and property-related legal matters.',
      features: ['Property Purchases & Sales', 'Title Disputes', 'Zoning Issues', 'Landlord-Tenant Law', 'Construction Contracts', 'Real Estate Litigation'],
      detailedInfo: {
        overview: 'Our real estate practice handles billions in transactions annually. We provide comprehensive legal services for residential, commercial, and industrial real estate matters.',
        process: 'Contract review and negotiation, due diligence, title examination, closing coordination, and post-closing support. We ensure smooth transactions and protect your investment.',
        pricing: 'Residential closings: $800-$1,500, Commercial transactions: $2,500-$10,000, Hourly work: $250-$400/hour.',
        timeline: 'Residential closings: 30-45 days, Commercial transactions: 60-120 days, Litigation: 6 months to 2 years.',
        benefits: ['Risk mitigation', 'Smooth transactions', 'Title protection', 'Regulatory compliance', 'Investment security']
      }
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Aggressive defense representation protecting your rights and freedom in criminal proceedings.',
      features: ['DUI/DWI Defense', 'Drug Crimes', 'White Collar Crimes', 'Assault & Battery', 'Theft Charges', 'Appeals'],
      detailedInfo: {
        overview: 'Our criminal defense team has successfully defended thousands of clients, achieving dismissals, acquittals, and reduced charges. We protect your constitutional rights at every stage.',
        process: 'Immediate consultation, investigation, evidence review, plea negotiations, trial preparation, and appeals if necessary. Available 24/7 for arrests.',
        pricing: 'Misdemeanors: $2,500-$7,500, Felonies: $7,500-$25,000, DUI: $3,500-$8,500, Appeals: $10,000-$20,000.',
        timeline: 'Misdemeanors: 2-6 months, Felonies: 6-18 months, Appeals: 6-12 months, Complex cases may take longer.',
        benefits: ['Constitutional protection', 'Reduced penalties', 'Case dismissals', 'Plea bargaining expertise', 'Trial experience']
      }
    },
    {
      icon: Briefcase,
      title: 'Employment Law',
      description: 'Protecting workers\' rights and helping employers navigate complex employment regulations.',
      features: ['Wrongful Termination', 'Discrimination Claims', 'Wage & Hour Disputes', 'Harassment Cases', 'Employment Contracts', 'Workplace Policies'],
      detailedInfo: {
        overview: 'We represent both employees and employers in employment matters. Our goal is to create fair workplaces while protecting our clients\' rights and interests.',
        process: 'Case evaluation, documentation review, EEOC filings when applicable, mediation, litigation, and settlement negotiations. We aim for quick, fair resolutions.',
        pricing: 'Employee cases: Contingency (25-40%) or hourly ($300-$450). Employer services: $250-$400/hour, policy development: $2,500-$7,500.',
        timeline: 'EEOC process: 6-12 months, Litigation: 1-2 years, Policy development: 2-6 weeks.',
        benefits: ['Workplace justice', 'Fair compensation', 'Policy compliance', 'Risk reduction', 'Legal protection']
      }
    },
    {
      icon: Gavel,
      title: 'Estate Planning',
      description: 'Comprehensive estate planning services to protect your assets and secure your family\'s future.',
      features: ['Wills & Trusts', 'Probate Administration', 'Power of Attorney', 'Estate Tax Planning', 'Guardian Nominations', 'Asset Protection'],
      detailedInfo: {
        overview: 'Our estate planning practice helps families protect and transfer wealth efficiently. We create comprehensive plans that minimize taxes and ensure your wishes are honored.',
        process: 'Family consultation, asset review, goal setting, document drafting, execution, and ongoing updates as needed. We provide lifetime support for your estate plan.',
        pricing: 'Simple will: $500-$1,500, Trust packages: $2,500-$7,500, Complex estates: $7,500-$25,000, Probate: $5,000-$15,000.',
        timeline: 'Simple wills: 1-2 weeks, Trust documents: 2-4 weeks, Complex planning: 4-8 weeks, Probate: 6-18 months.',
        benefits: ['Tax minimization', 'Asset protection', 'Family security', 'Probate avoidance', 'Peace of mind']
      }
    },
    {
      icon: Heart,
      title: 'Immigration Law',
      description: 'Guiding individuals and families through the complex immigration process with expertise and care.',
      features: ['Visa Applications', 'Green Card Process', 'Citizenship Applications', 'Deportation Defense', 'Family Immigration', 'Business Immigration'],
      detailedInfo: {
        overview: 'Our immigration attorneys have helped thousands achieve their American dream. We provide comprehensive immigration services with culturally sensitive representation.',
        process: 'Case assessment, document preparation, application filing, interview preparation, and ongoing support throughout the process. We handle all government communications.',
        pricing: 'Family petitions: $2,500-$5,000, Employment visas: $3,500-$8,500, Citizenship: $1,500-$3,000, Deportation defense: $5,000-$15,000.',
        timeline: 'Family visas: 8-24 months, Employment visas: 6-18 months, Citizenship: 8-14 months, Varies by case type and country.',
        benefits: ['Expert navigation', 'Cultural understanding', 'Family reunification', 'Legal status security', 'American dream realization']
      }
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Skilled courtroom advocacy and dispute resolution for complex civil and commercial matters.',
      features: ['Civil Litigation', 'Commercial Disputes', 'Contract Disputes', 'Business Litigation', 'Appellate Practice', 'Alternative Dispute Resolution'],
      detailedInfo: {
        overview: 'Our litigation team has tried hundreds of cases with a 90% success rate. We provide aggressive representation while seeking cost-effective resolutions for our clients.',
        process: 'Case evaluation, discovery, motion practice, mediation, trial preparation, and appeals if necessary. We keep clients informed at every stage.',
        pricing: 'Hourly rates: $350-$550, Contingency available for certain cases, Retainers typically $10,000-$50,000 depending on case complexity.',
        timeline: 'Simple disputes: 6-12 months, Complex litigation: 1-3 years, Appeals: 6-18 months additional.',
        benefits: ['Expert advocacy', 'Cost-effective resolution', 'Trial experience', 'Strategic planning', 'Maximum recovery']
      }
    }
  ];

  return (
    <>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Legal Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive legal solutions tailored to meet your specific needs. Our experienced team provides expert representation across multiple practice areas with detailed service offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Detailed Dropdowns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any service below to learn more about our comprehensive offerings, pricing, and how we can help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Information Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-left font-semibold text-blue-600">
                        Service Overview & Approach
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-4">{service.detailedInfo.overview}</p>
                        <p><strong>Our Process:</strong> {service.detailedInfo.process}</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="pricing">
                      <AccordionTrigger className="text-left font-semibold text-blue-600">
                        Pricing & Timeline
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-4"><strong>Pricing:</strong> {service.detailedInfo.pricing}</p>
                        <p><strong>Typical Timeline:</strong> {service.detailedInfo.timeline}</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="benefits">
                      <AccordionTrigger className="text-left font-semibold text-blue-600">
                        Benefits & Why Choose Us
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <ul className="space-y-2">
                          {service.detailedInfo.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines legal expertise with personalized attention to deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">25+ Years Experience</h3>
              <p className="text-gray-600">Decades of combined experience across all practice areas with proven results</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Tailored strategies designed for your unique situation with dedicated attention</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">98% Success Rate</h3>
              <p className="text-gray-600">Proven track record of successful outcomes and client satisfaction</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Understanding support throughout your legal journey with regular updates</p>
            </div>
          </div>
        </div>
      </section>



    


      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait to get the legal help you need. Contact us today for a free consultation and let us help you navigate your legal challenges with confidence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule Free Consultation
          </a>
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

export default Services;