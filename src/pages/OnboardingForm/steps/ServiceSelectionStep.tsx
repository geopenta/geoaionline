import React from 'react';
import { FormStepProps } from '../types';
import { services } from '../../../components/sections/services/data';

const ServiceSelectionStep = ({ formData, updateFormData }: FormStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">
        Which service are you interested in?
      </h2>
      <select
        value={formData.service}
        onChange={(e) => updateFormData('service', e.target.value)}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono"
        required
      >
        <option value="">Select a service...</option>
        {services.map((service, index) => (
          <option key={index} value={service.title}>
            {service.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceSelectionStep;