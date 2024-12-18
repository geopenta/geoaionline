import React from 'react';
import { motion } from 'framer-motion';

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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={index * 0.2}
      viewport={{ once: true }}
      className="p-8 rounded-xl bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] border border-purple-500/10 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-blue-900/20 transition-all duration-700 group"
    >
      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 font-mono group-hover:text-purple-200 transition-colors duration-700 whitespace-nowrap">
        {title}
      </h3>
      <p className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-700">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;