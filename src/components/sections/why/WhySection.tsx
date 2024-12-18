import React from 'react';
import { Terminal, Cpu, Zap } from 'lucide-react';
import GradientText from '../../ui/GradientText';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Terminal,
    title: 'AI WORKFLOWS',
    description: 'Build automation tailored to your business needs and goals.'
  },
  {
    icon: Cpu,
    title: 'INTEGRATION',
    description: 'Works perfectly with your existing tools and platforms.'
  },
  {
    icon: Zap,
    title: 'RESULTS',
    description: 'Real-world success in reducing costs and boosting growth.'
  }
];

const WhySection = () => {
  return (
    <div className="bg-black py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-mono flex items-center justify-center gap-2">
            <span className="text-purple-400">&gt;_</span>
            <span className="text-white">Why</span>
            <GradientText>GEO.AI?</GradientText>
          </h2>
          
          <div className="space-y-2 text-gray-400 font-mono text-lg">
            <p>We design custom AI automation solutions that optimize your workflows,</p>
            <p>so you can focus on what truly matters.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;