import React from 'react';
import { Settings, Zap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Tailored AI Solutions',
    description: 'Crafted for your specific business goals'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Effortless Integration',
    description: 'Works seamlessly with your current tools and platforms'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Proven Results',
    description: 'Reduced costs and boosted operational efficiency'
  }
];

const WhySection = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why GEO.AI?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our mission is to revolutionize your workflows with intelligent AI automation, tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;