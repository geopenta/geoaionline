import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground = ({ className }: GridBackgroundProps) => {
  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      {/* Main grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/90 to-black" />
      
      {/* Animated dots at intersections */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0.5px, transparent 0.5px)',
          backgroundSize: '64px 64px',
          backgroundPosition: '-32px -32px'
        }}
      />
    </div>
  );
};

export default GridBackground;