import React from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  isBlinking: boolean;
}

const Cursor = ({ isBlinking }: CursorProps) => {
  return (
    <motion.span
      animate={{ opacity: isBlinking ? 1 : 0 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="absolute -right-4 top-0 text-purple-400 font-bold"
    >
      |
    </motion.span>
  );
};

export default Cursor;