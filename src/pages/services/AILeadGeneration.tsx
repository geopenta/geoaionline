import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, LineChart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import CursorCloud from '../../components/ui/CursorCloud';
import ServiceHero from './components/ServiceHero';
import FeatureCard from './components/FeatureCard';
import ServiceStats from './components/ServiceStats';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Smart Lead Targeting',
    description: 'AI-powered algorithms identify and prioritize high-value prospects'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Automated Outreach',
    description: 'Personalized communication at scale with potential leads'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Performance Analytics',
    description: 'Real-time tracking and optimization of lead generation campaigns'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Quick Integration',
    description: 'Seamless integration with your existing CRM and marketing tools'
  }
];

const stats = [
  { value: '45%', label: 'Increase in Lead Quality' },
  { value: '3x', label: 'Faster Lead Generation' },
  { value: '60%', label: 'Cost Reduction' }
];

const AILeadGeneration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative">
      <GridBackground />
      <CursorCloud />
      
      <div className="relative z-10">
        <motion.div 
          className="fixed top-8 left-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavButton icon={ArrowLeft} onClick={() => navigate('/')}>
            Back to Home
          </NavButton>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-24">
          <ServiceHero
            title="AI Lead Generation"
            description="Transform your lead generation process with AI-powered automation. Generate high-quality leads, optimize outreach, and boost conversion rates."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          <ServiceStats
            title="Proven Results"
            stats={stats}
          />
        </div>
      </div>
    </div>
  );
};

export default AILeadGeneration;