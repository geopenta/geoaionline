import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CursorCloudProps {
  className?: string;
}

const CursorCloud = ({ className }: CursorCloudProps) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Adjusted spring config for faster, more responsive movement
  const springConfig = { 
    damping: 15, // Reduced damping for faster movement
    stiffness: 250, // Increased stiffness for more immediate response
    mass: 0.5 // Added lower mass for lighter feel
  };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Directly set the position with a slight offset to center the cloud
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x,
        y,
        pointerEvents: 'none',
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        opacity: { duration: 0.1 }, // Faster fade in/out
        scale: { duration: 0.1 },
      }}
      className={cn("z-50", className)}
    >
      <div className="relative w-[300px] h-[300px]">
        {/* Main cloud body - adjusted blur and animation speed */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-white/10 blur-2xl" />
        <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        
        {/* Cloud details - reduced blur for sharper appearance */}
        <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-lg" />
        <div className="absolute inset-[45%] rounded-full bg-gradient-radial from-white/5 to-transparent blur-md" />
      </div>
    </motion.div>
  );
};

export default CursorCloud;