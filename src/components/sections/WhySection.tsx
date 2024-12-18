import React from 'react';
import { Globe2, Brain, Workflow, Map, LineChart, Compass } from 'lucide-react';
import FeatureCard from './why/FeatureCard';
import IndustryCard from './why/IndustryCard';
import GradientText from '../ui/GradientText';
import AnimatedText from '../ui/AnimatedText/AnimatedText';

const features = [
  {
    icon: Globe2,
    title: 'Geospatial Intelligence',
    description: 'Transform location data into actionable insights with AI-powered analysis'
  },
  {
    icon: Brain,
    title: 'Advanced ML Models',
    description: 'Custom machine learning models optimized for spatial data processing'
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description: 'Streamline complex geospatial operations with intelligent automation'
  },
  {
    icon: Map,
    title: 'Real-time Mapping',
    description: 'Dynamic visualization of spatial data with AI-enhanced insights'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast spatial trends and patterns with machine learning'
  },
  {
    icon: Compass,
    title: 'Location Intelligence',
    description: 'Make data-driven decisions based on geographic context'
  }
];

const industries = [
  {
    title: 'Urban Planning',
    description: 'Optimize city development with AI-powered spatial analysis'
  },
  {
    title: 'Environmental Monitoring',
    description: 'Track and predict environmental changes with precision'
  },
  {
    title: 'Agriculture',
    description: 'Enhance crop yields through AI-driven field analysis'
  },
  {
    title: 'Transportation',
    description: 'Improve routing and logistics with intelligent spatial optimization'
  }
];

const WhySection = () => {
  return (
    <div className="bg-black py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-mono">
            <AnimatedText text="Why " />
            <GradientText>
              <AnimatedText text="GEO.AI?" delay={0.2} />
            </GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            <AnimatedText 
              text="Unleash the power of artificial intelligence combined with geographic information systems to transform your spatial data into strategic advantages." 
              delay={0.4}
            />
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 * index}
            />
          ))}
        </div>

        {/* Industry Applications */}
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">
            <AnimatedText text="Industry Applications" />
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;