import React from 'react';
import { motion } from 'framer-motion';

interface ServiceFeatureProps {
  text: string;
  delay?: number;
}

const popVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ServiceFeature = ({ text, delay = 0 }: ServiceFeatureProps) => {
  return (
    <motion.div 
      className="flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-500"
      initial="initial"
      whileHover="hover"
    >
      <motion.span 
        variants={popVariants}
        className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400/50 transition-colors duration-500" 
      />
      <motion.p 
        variants={popVariants}
        className="text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-500"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default ServiceFeature;