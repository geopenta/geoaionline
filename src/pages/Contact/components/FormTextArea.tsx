import React from 'react';

interface FormTextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormTextArea = ({ label, placeholder, value, onChange }: FormTextAreaProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono resize-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormTextArea;