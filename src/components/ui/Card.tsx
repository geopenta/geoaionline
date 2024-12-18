import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10",
        hover && "hover:border-purple-500/50 transition-all group cursor-pointer",
        "backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;