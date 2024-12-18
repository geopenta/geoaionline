import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import AnimatedText from '../../../components/ui/AnimatedText/AnimatedText';

interface IntegrationFeatureProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  delay?: number;
}

const bounceVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const IntegrationFeature = ({ icon: Icon, title, items, delay = 0 }: IntegrationFeatureProps) => {
  return (
    <motion.div
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 hover:border-purple-500/50 transition-all group"
    >
      <Icon className="w-8 h-8 text-purple-400 mb-6 group-hover:text-purple-300 transition-colors" />
      <h3 className="text-xl font-bold mb-4 font-mono group-hover:text-purple-200 transition-colors duration-700">
        <AnimatedText text={title} delay={delay + 0.1} />
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-gray-400 font-mono flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300 transition-colors duration-500" />
            <AnimatedText text={item} delay={delay + 0.2 + (i * 0.1)} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default IntegrationFeature;