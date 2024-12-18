import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';

interface MetricItemProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricItem = ({ value, label, delay = 0 }: MetricItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-mono">
        <AnimatedText text={value} delay={delay} />
      </p>
      <p className="text-xs text-gray-400 font-mono mt-1">
        <AnimatedText text={label} delay={delay + 0.1} />
      </p>
    </motion.div>
  );
};

export default MetricItem;