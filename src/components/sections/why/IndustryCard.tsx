import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';

interface IndustryCardProps {
  title: string;
  description: string;
  delay?: number;
}

const IndustryCard = ({ title, description, delay = 0 }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors"
    >
      <h4 className="text-lg font-semibold text-white mb-2 font-mono">
        <AnimatedText text={title} delay={delay + 0.2} />
      </h4>
      <p className="text-gray-400 text-sm font-mono">
        <AnimatedText text={description} delay={delay + 0.3} />
      </p>
    </motion.div>
  );
};

export default IndustryCard;