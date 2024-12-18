import React from 'react';
import { AlertCircle, Clock, DollarSign } from 'lucide-react';
import GradientText from '../ui/GradientText';
import AnimatedText from '../ui/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Missed Opportunities',
    description: 'Inefficient customer support leading to lost sales and frustrated customers'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Time Wastage',
    description: 'Hours lost juggling multiple tools and managing appointments'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Revenue Loss',
    description: 'Poor systems integration resulting in missed revenue opportunities'
  }
];

const ProblemSection = () => {
  return (
    <div id="problem-section" className="bg-black py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 font-mono">
              <AnimatedText text="Struggling to Keep Up with " />
              <GradientText>
                <AnimatedText text="Customer Demands?" delay={0.5} />
              </GradientText>
            </h2>
            
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-400">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-mono">
                      <AnimatedText text={problem.title} delay={0.7 + (index * 0.2)} />
                    </h3>
                    <p className="text-gray-400 font-mono">
                      <AnimatedText text={problem.description} delay={0.8 + (index * 0.2)} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-2xl font-semibold text-white mt-8 font-mono">
              <AnimatedText text="GEO.AI can fix this—" />
              <GradientText>
                <AnimatedText text="effortlessly" delay={1.5} />
              </GradientText>
              <AnimatedText text="." delay={1.7} />
            </p>
          </div>

          {/* Illustration */}
          <div className="relative lg:h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;