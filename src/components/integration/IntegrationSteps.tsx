import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Link, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: 'Configure',
    description: 'Set up your integration preferences and API keys'
  },
  {
    icon: Link,
    title: 'Connect',
    description: 'Link your existing platforms and tools'
  },
  {
    icon: CheckCircle,
    title: 'Verify',
    description: 'Test and validate the integration'
  }
];

const IntegrationSteps = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-12 text-center font-mono">Integration Process</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 mx-auto">
              <step.icon className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 font-mono">{step.title}</h3>
            <p className="text-gray-400 font-mono">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSteps;