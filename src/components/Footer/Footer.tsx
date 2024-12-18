import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterSection } from './FooterSection';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    switch (item) {
      case 'Home':
        if (window.location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        }
        break;
        
      case 'Services':
        if (window.location.pathname === '/') {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/?scrollTo=services');
        }
        break;
        
      case 'Contact':
        navigate('/contact');
        break;

      // Services
      case 'AI Lead Generation':
        navigate('/services/lead-generation');
        break;
        
      case 'Customer Support':
        navigate('/services/customer-support');
        break;
        
      case 'CRM Integrations':
        navigate('/services/crm-integrations');
        break;

      // Tools  
      case 'Analytics':
        navigate('/analytics');
        break;
        
      case 'Integration':
        navigate('/integration');
        break;
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <FooterSection
            title="GEO.AI"
            isMain
            description="Empowering businesses with intelligent automation solutions."
          />
          
          {/* Quick Links */}
          <FooterSection
            title="Quick Links"
            items={['Home', 'Services', 'Contact']}
            onItemClick={handleNavigation}
          />
          
          {/* Services */}
          <FooterSection
            title="Services"
            items={[
              'AI Lead Generation',
              'Customer Support',
              'CRM Integrations'
            ]}
            onItemClick={handleNavigation}
          />

          {/* Tools */}
          <FooterSection
            title="Tools"
            items={[
              'Analytics',
              'Integration'
            ]}
            onItemClick={handleNavigation}
          />
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm font-mono">
            © {new Date().getFullYear()} GEO.AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;