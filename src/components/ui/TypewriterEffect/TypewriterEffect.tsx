import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  messages: string[];
  className?: string;
}

const TypewriterEffect = ({ messages, className = '' }: TypewriterEffectProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    const typingSpeed = 50;
    const pauseDuration = 2000;

    if (displayText === currentMessage) {
      // When message is complete, wait and move to next message
      timeoutRef.current = setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setDisplayText('');
      }, pauseDuration);
    } else {
      // Type next character
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, displayText.length + 1));
      }, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentMessageIndex, messages]);

  return (
    <div className={`font-mono relative inline-block ${className}`}>
      <span className="text-gray-300">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -right-4 top-0 text-purple-400 font-bold"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterEffect;