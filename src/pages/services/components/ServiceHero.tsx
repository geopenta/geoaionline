import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GradientText from '../../../components/ui/GradientText';

interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-24"
    >
      <h1 className="text-5xl font-bold mb-6 font-mono">
        <GradientText>{title}</GradientText>
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-mono">
        {description}
      </p>
      <motion.button
        onClick={() => navigate('/start')}
        className="group px-8 py-3 bg-transparent border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2 mx-auto text-purple-400 hover:text-purple-300 font-mono tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        GET_STARTED <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

export default ServiceHero;