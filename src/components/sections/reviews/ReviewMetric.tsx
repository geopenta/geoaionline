import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ReviewMetricProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const bounceVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ReviewMetric = ({ icon: Icon, value, label, delay = 0 }: ReviewMetricProps) => {
  return (
    <motion.div 
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 mx-auto text-purple-400/80 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors duration-700">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-2xl font-bold font-mono bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:opacity-90 transition-all duration-500 whitespace-nowrap">
          {value}
        </p>
        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-500 whitespace-nowrap">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default ReviewMetric;