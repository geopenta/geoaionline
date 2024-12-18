import React from 'react';
import { cn } from '../../utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span 
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-mono",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;