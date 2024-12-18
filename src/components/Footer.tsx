import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    switch (service) {
      case 'AI Lead Generation':
        navigate('/services/lead-generation');
        break;
      case 'Customer Support':
        navigate('/services/customer-support');
        break;
      case 'CRM Integrations':
        navigate('/services/crm-integrations');
        break;
    }
  };

  const handleToolClick = (tool: string) => {
    switch (tool) {
      case 'Analytics':
        navigate('/analytics');
        break;
      case 'Integration':
        navigate('/integration');
        break;
    }
  };

  const handleQuickLinkClick = (link: string) => {
    switch (link) {
      case 'Home':
        navigate('/');
        break;
      case 'Services':
        navigate('/?scrollTo=services');
        break;
      case 'Contact':
        navigate('/contact');
        break;
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 font-mono">GEO.AI</h3>
            <p className="text-gray-400 text-sm font-mono">
              Empowering businesses with intelligent automation solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-gray-400 hover:text-white transition-colors font-mono"
                    onClick={() => handleQuickLinkClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-mono">Services</h4>
            <ul className="space-y-2">
              {[
                'AI Lead Generation',
                'Customer Support',
                'CRM Integrations'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleServiceClick(item)}
                    className="text-gray-400 hover:text-white transition-colors font-mono"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-mono">Tools</h4>
            <ul className="space-y-2">
              {[
                'Analytics',
                'Integration'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleToolClick(item)}
                    className="text-gray-400 hover:text-white transition-colors font-mono"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm font-mono">
            © 2024 GEO.AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;