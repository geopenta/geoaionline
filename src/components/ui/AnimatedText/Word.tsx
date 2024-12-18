import React from 'react';
import Letter from './Letter';
import { cn } from '../../../utils/cn';

interface WordProps {
  children: string;
  className?: string;
  startIndex?: number;
}

const Word = ({ children, className, startIndex = 0 }: WordProps) => {
  return (
    <span className={cn("inline-block whitespace-nowrap", className)}>
      {children.split('').map((letter, index) => (
        <Letter 
          key={index} 
          index={startIndex + index}
          className={letter === ' ' ? 'mr-1' : undefined}
        >
          {letter}
        </Letter>
      ))}
    </span>
  );
};

export default Word;