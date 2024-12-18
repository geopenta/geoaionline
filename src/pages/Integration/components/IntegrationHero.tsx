import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../../components/ui/GradientText';
import AnimatedText from '../../../components/ui/AnimatedText/AnimatedText';
import NeonText from '../../../components/ui/NeonText';

const IntegrationHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-6 font-mono">
        <span className="text-white">Effortless Integration with Your</span>{' '}
        <GradientText>Workflow</GradientText>
      </h1>
      
      <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
        <AnimatedText
          text="Connect GEO.AI seamlessly with your favorite platforms and tools. From APIs to data visualization tools and geospatial databases, we ensure smooth integration to enhance your productivity."
          delay={0.2}
        />
      </p>
    </motion.div>
  );
};

export default IntegrationHero;