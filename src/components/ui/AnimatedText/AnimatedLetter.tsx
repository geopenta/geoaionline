import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

interface AnimatedLetterProps {
  children: string;
  index: number;
  className?: string;
  delay?: number;
}

const AnimatedLetter = ({ children, index, className, delay = 0 }: AnimatedLetterProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.3,
          delay: (index * 0.05) + delay,
          ease: [0.215, 0.61, 0.355, 1]
        }
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedLetter;