import React from 'react';
import Word from './Word';
import { cn } from '../../../utils/cn';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedTitle = ({ text, className, delay = 0 }: AnimatedTitleProps) => {
  const words = text.split(' ');
  let letterCount = 0;

  return (
    <div className={cn("inline-block", className)}>
      {words.map((word, index) => {
        const currentIndex = letterCount;
        letterCount += word.length;
        return (
          <React.Fragment key={index}>
            <Word startIndex={currentIndex + delay}>{word}</Word>
            {index !== words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AnimatedTitle;