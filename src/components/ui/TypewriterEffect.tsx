import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  messages: string[];
  className?: string;
}

const TypewriterEffect = ({ messages, className = '' }: TypewriterEffectProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    const typingSpeed = 50; // Speed for typing
    const deletingSpeed = 30; // Speed for deleting
    const pauseDuration = 2000; // Pause duration after typing

    const typeNextChar = () => {
      if (!isDeleting && displayText.length < currentMessage.length) {
        setDisplayText(currentMessage.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentMessage.length) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(displayText.slice(0, -1));
      } else if (isDeleting && displayText.length === 0) {
        // Move to next message
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    };

    const timeout = setTimeout(
      typeNextChar,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentMessageIndex, messages]);

  return (
    <div className={`font-mono relative inline-block ${className}`}>
      <span className="text-gray-300">{displayText}</span>
      <span className="absolute -right-4 top-0 text-purple-400 font-bold animate-[blink_1s_infinite]">
        |
      </span>
    </div>
  );
};

export default TypewriterEffect;