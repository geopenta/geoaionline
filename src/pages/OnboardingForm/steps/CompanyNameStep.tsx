import React from 'react';
import { FormStepProps } from '../types';

const CompanyNameStep = ({ formData, updateFormData }: FormStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">
        What is your company name?
      </h2>
      <input
        type="text"
        value={formData.companyName}
        onChange={(e) => updateFormData('companyName', e.target.value)}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
        placeholder="Acme Inc."
        required
      />
    </div>
  );
};

export default CompanyNameStep;