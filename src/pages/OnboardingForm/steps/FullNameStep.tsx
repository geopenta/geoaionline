import React from 'react';
import { FormStepProps } from '../types';

const FullNameStep = ({ formData, updateFormData }: FormStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">
        What is your full name?
      </h2>
      <input
        type="text"
        value={formData.fullName}
        onChange={(e) => updateFormData('fullName', e.target.value)}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
        placeholder="John Doe"
        required
      />
    </div>
  );
};

export default FullNameStep;