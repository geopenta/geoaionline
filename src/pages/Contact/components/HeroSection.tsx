import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../../components/ui/GradientText';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-6 font-mono">
        <GradientText>Get in Touch</GradientText>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
        Have questions? We're here to help. Reach out through any of our channels.
      </p>
    </motion.div>
  );
};

export default HeroSection;