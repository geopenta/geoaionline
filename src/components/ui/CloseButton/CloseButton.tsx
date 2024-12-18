import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={cn(
        "absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full",
        "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300",
        "transition-colors duration-200 z-50",
        className
      )}
    >
      <X className="w-4 h-4" />
    </motion.button>
  );
};

export default CloseButton;