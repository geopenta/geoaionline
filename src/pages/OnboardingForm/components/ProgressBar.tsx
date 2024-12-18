import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="h-1 bg-purple-500/20 rounded-full mb-8">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ProgressBar;