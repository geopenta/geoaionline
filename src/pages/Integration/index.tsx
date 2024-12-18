import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import CursorCloud from '../../components/ui/CursorCloud';
import IntegrationShowcase from './components/IntegrationShowcase';
import IntegrationFeatures from './components/IntegrationFeatures';
import IntegrationDemo from './components/IntegrationDemo';

const Integration = () => {
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

        <div className="max-w-7xl mx-auto px-4 py-16">
          <IntegrationShowcase />
          <IntegrationFeatures />
          <IntegrationDemo />
        </div>
      </div>
    </div>
  );
};

export default Integration;