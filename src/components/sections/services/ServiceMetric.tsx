import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';

interface ServiceMetricProps {
  value: string;
  label: string;
  delay?: number;
}

const popVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.08,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ServiceMetric = ({ value, label, delay = 0 }: ServiceMetricProps) => {
  return (
    <motion.div 
      className="text-center"
      initial="initial"
      whileHover="hover"
    >
      <motion.p 
        variants={popVariants}
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-mono mb-1 group-hover:opacity-90 transition-all duration-500"
      >
        <AnimatedText text={value} delay={delay} />
      </motion.p>
      <motion.p 
        variants={popVariants}
        className="text-[10px] text-gray-500 font-mono uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-500"
      >
        <AnimatedText text={label} delay={delay + 0.1} />
      </motion.p>
    </motion.div>
  );
};

export default ServiceMetric;