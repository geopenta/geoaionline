import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
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

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true }}
      className="p-8 rounded-xl bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] border border-purple-500/10 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-blue-900/20 transition-all duration-700 group"
    >
      <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors duration-700">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-purple-200 transition-colors duration-700 whitespace-nowrap">
        {title}
      </h3>
      <p className="text-gray-400 font-mono text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;