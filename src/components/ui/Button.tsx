import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const popVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 font-mono tracking-wider";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90",
    secondary: "bg-white text-black hover:bg-opacity-90",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <motion.button 
      variants={popVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;