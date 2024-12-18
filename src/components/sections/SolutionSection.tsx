import React from 'react';
import { MessageSquare, Link, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Customer Support AI',
    description: 'Deliver seamless, 24/7 customer service with intelligent automation'
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'CRM Integrations',
    description: 'Unify your tools for better collaboration and productivity'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Appointment Setting AI',
    description: 'Automate bookings to maximize efficiency and eliminate missed opportunities'
  }
];

const SolutionSection = () => {
  return (
    <div className="bg-black/95 py-24 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-6 block font-mono">
            <AnimatedText text="How GEO.AI Transforms Your Business" />
          </GradientText>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 mx-auto text-purple-400">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                  <AnimatedText text={solution.title} delay={0.3 + (index * 0.2)} />
                </h3>
                <p className="text-gray-400 font-mono">
                  <AnimatedText text={solution.description} delay={0.4 + (index * 0.2)} />
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="font-mono uppercase">
            <AnimatedText text="Explore Our Services" delay={1} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;