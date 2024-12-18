import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  index: number;
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

const StatItem = ({ value, label, index }: StatItemProps) => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={index * 0.2}
      viewport={{ once: true }}
      className="group"
    >
      <p className="text-4xl font-bold mb-2 font-mono bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:opacity-90 transition-all duration-500 whitespace-nowrap">
        {value}
      </p>
      <p className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-500 whitespace-nowrap">
        {label}
      </p>
    </motion.div>
  );
};

export default StatItem;