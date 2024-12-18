import React from 'react';
import { cn } from '../../../utils/cn';
import AnimatedLetter from './AnimatedLetter';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({ text, className, delay = 0, as: Component = 'span' }: AnimatedTextProps) => {
  return (
    <Component className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <AnimatedLetter 
          key={index} 
          index={index}
          delay={delay}
          className={char === ' ' ? 'mr-1' : undefined}
        >
          {char}
        </AnimatedLetter>
      ))}
    </Component>
  );
};

export default AnimatedText;