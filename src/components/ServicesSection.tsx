import React from 'react';
import { Bot, LineChart, Users, Database } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Workflow Automation',
    description: 'Streamline and optimize processes with AI-powered systems'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Support AI',
    description: 'Revolutionize customer service with intelligent, 24/7 AI solutions'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Predictive Analytics',
    description: 'Turn raw data into actionable insights for smarter decisions'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Custom CRM Integrations',
    description: 'Unify your tools with AI-enhanced systems for maximum productivity'
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-black/95 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Explore GEO.AI Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;