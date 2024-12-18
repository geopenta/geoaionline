import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import './neon.css';

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  flicker?: boolean;
}

const NeonText = ({ 
  children, 
  className,
  glowColor = "rgba(88, 28, 135, 0.4)", // Increased base opacity
  flicker = false 
}: NeonTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative inline-block",
        flicker ? "animate-[flicker_5s_linear_infinite]" : "animate-[glow_3s_ease-in-out_infinite]",
        className
      )}
      style={{
        textShadow: `0 0 2px ${glowColor},
                     0 0 4px ${glowColor},
                     0 0 8px ${glowColor},
                     0 0 12px ${glowColor}`
      }}
    >
      {children}
    </motion.div>
  );
};

export default NeonText;