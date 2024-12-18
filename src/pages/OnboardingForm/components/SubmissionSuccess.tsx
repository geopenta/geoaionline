import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import GridBackground from '../../../components/ui/GridBackground';
import GradientText from '../../../components/ui/GradientText';

const SubmissionSuccess = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      <GridBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center p-8"
      >
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4 font-mono">
          <GradientText>Thank You!</GradientText>
        </h2>
        <p className="text-gray-400 font-mono mb-2">
          Your form has been successfully submitted.
        </p>
        <p className="text-gray-400 font-mono">
          We'll be in touch with you shortly.
        </p>
      </motion.div>
    </div>
  );
};

export default SubmissionSuccess;