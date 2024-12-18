import { NavigateFunction } from 'react-router-dom';

export const handleNavigation = (item: string, navigate: NavigateFunction) => {
  switch (item) {
    case 'Home':
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        // Add a small delay to ensure the navigation completes before scrolling
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