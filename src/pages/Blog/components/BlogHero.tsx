import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../../components/ui/GradientText';

const BlogHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-6 font-mono">
        <GradientText>AI News & Insights</GradientText>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
        Stay updated with the latest developments in artificial intelligence, machine learning, and automation.
      </p>
    </motion.div>
  );
};

export default BlogHero;