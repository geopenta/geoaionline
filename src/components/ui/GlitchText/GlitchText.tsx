import React from 'react';
import { cn } from '../../../utils/cn';
import './glitch.css';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  return (
    <div className={cn("relative inline-block", className)}>
      {/* Original text */}
      <span className="relative z-10">{text}</span>
      
      {/* Glitch layers */}
      <span className="absolute inset-0 text-purple-400 animate-[glitch_3s_infinite] opacity-70">{text}</span>
      <span className="absolute inset-0 text-blue-400 animate-[glitch_2.7s_infinite_0.3s] opacity-70">{text}</span>
    </div>
  );
};

export default GlitchText;