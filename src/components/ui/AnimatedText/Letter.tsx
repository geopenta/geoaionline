import React from 'react';
import { cn } from '../../../utils/cn';
import { motion } from 'framer-motion';

interface LetterProps {
  children: string;
  index: number;
  className?: string;
}

const Letter = ({ children, index, className }: LetterProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.215, 0.61, 0.355, 1]
        }
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
};

export default Letter;