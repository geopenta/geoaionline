import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Workflow, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GradientText from '../ui/GradientText';
import NeonText from '../ui/NeonText';

const features = [
  {
    icon: Code2,
    title: 'Simple API',
    description: 'Easy-to-use REST endpoints with comprehensive documentation'
  },
  {
    icon: Workflow,
    title: 'Flexible Workflows',
    description: 'Adapt to your existing processes seamlessly'
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Instant data synchronization across platforms'
  }
];

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

const IntegrationShowcase = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 font-mono uppercase tracking-wider scale-90 sm:scale-100">
            <NeonText glowColor="rgba(147, 51, 234, 0.35)" className="whitespace-nowrap">
              Power Your Workflow
            </NeonText>
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block">
              <GradientText className="whitespace-nowrap">
                with GEO.AI Integration
              </GradientText>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-16 max-w-2xl mx-auto font-light text-gray-400 font-mono">
            Connect your tools and data seamlessly with our powerful integration platform. Build, automate, and scale your geospatial workflows with ease.
          </p>

          <motion.button
            onClick={() => navigate('/start')}
            className="group px-8 py-3 bg-transparent border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2 mx-auto text-purple-400 hover:text-purple-300 font-mono tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START_INTEGRATION_NOW <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={bounceVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={index * 0.2}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 hover:border-purple-500/50 transition-all duration-700">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono group-hover:text-purple-200 transition-colors duration-700 whitespace-nowrap">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-700">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationShowcase;