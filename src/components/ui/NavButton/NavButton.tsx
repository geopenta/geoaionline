import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavButton = ({ icon: Icon, children, className, onClick }: NavButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "font-mono text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
};

export default NavButton;