import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText/AnimatedText';
import GradientText from './GradientText';

const CompanyCaption = () => {
  return (
    <motion.div 
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <h1 className="text-4xl font-bold font-mono tracking-[0.2em] relative">
        <span className="absolute -inset-0.5 blur-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20"></span>
        <GradientText className="relative">
          <AnimatedText text="GEO.AI" delay={0.2} />
        </GradientText>
      </h1>
    </motion.div>
  );
};

export default CompanyCaption;