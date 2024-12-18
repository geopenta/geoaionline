import React from 'react';
import { FormStepProps } from '../types';

const RequirementsStep = ({ formData, updateFormData }: FormStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">
        Tell us about your specific needs and requirements
      </h2>
      <textarea
        value={formData.requirements}
        onChange={(e) => updateFormData('requirements', e.target.value)}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono h-32 resize-none"
        placeholder="Please describe your needs..."
        required
      />
    </div>
  );
};

export default RequirementsStep;