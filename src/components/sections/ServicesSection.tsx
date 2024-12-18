import React from 'react';
import { Bot, LineChart, Users, Database } from 'lucide-react';
import Card from '../ui/Card';
import GradientText from '../ui/GradientText';

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
    <div className="bg-black/95 py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <GradientText className="text-4xl font-bold text-center block mb-16">
          Explore GEO.AI Services
        </GradientText>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm font-light">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;