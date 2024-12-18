import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Link, Workflow, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import CursorCloud from '../../components/ui/CursorCloud';
import ServiceHero from './components/ServiceHero';
import FeatureCard from './components/FeatureCard';
import ServiceStats from './components/ServiceStats';

const features = [
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Unified Data',
    description: 'Centralize your customer data from multiple sources'
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'Seamless Integration',
    description: 'Connect with popular CRM platforms and tools'
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Automated Workflows',
    description: 'Streamline processes with intelligent automation'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Solutions',
    description: 'Tailored integrations for your specific needs'
  }
];

const stats = [
  { value: '99.9%', label: 'Data Accuracy' },
  { value: '60%', label: 'Time Saved' },
  { value: '40%', label: 'Increased Productivity' }
];

const CRMIntegrations = () => {
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
            title="CRM Integrations"
            description="Unify your customer data and streamline operations with our intelligent CRM integration solutions."
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
            title="Integration Benefits"
            stats={stats}
          />
        </div>
      </div>
    </div>
  );
};

export default CRMIntegrations;