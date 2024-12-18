import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavButton from './NavButton';

const StartNowButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-8 right-8 z-50 flex items-center gap-4"
    >
      <NavButton 
        icon={BookOpen} 
        onClick={() => navigate('/blog')}
      >
        _BLOG
      </NavButton>
      <NavButton onClick={() => navigate('/start')}>
        START_NOW <ArrowRight className="w-4 h-4" />
      </NavButton>
    </motion.div>
  );
};

export default StartNowButton;