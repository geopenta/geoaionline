import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../ui/GradientText';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';
import NeonText from '../../ui/NeonText';

const impacts = [
  {
    value: '30',
    label: 'Revenue Growth in 6 Months'
  },
  {
    value: '20+',
    label: 'Hours Saved per Week'
  },
  {
    value: '40',
    label: 'Higher Customer Retention'
  }
];

const CombinedImpact = () => {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12 font-mono">
        <NeonText glowColor="rgba(147, 51, 234, 0.3)">
          <AnimatedText text="_COMBINED IMPACT" />
        </NeonText>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
              }
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ 
                filter: "brightness(1.2)",
                textShadow: "0 0 8px rgba(147, 51, 234, 0.5)"
              }}
            >
              <div className="text-4xl font-bold mb-2 font-mono transition-all duration-300 group-hover:scale-110 flex items-center justify-center gap-1">
                <GradientText>
                  <AnimatedText text={impact.value} delay={0.2 * index} />
                </GradientText>
                <span className="text-purple-400">%</span>
              </div>
              <p className="text-gray-400 text-sm font-mono transition-colors duration-300 group-hover:text-purple-300">
                <AnimatedText text={impact.label} delay={0.3 * index} />
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CombinedImpact;