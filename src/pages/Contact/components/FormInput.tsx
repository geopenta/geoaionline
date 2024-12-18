import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput = ({ label, type, placeholder, value, onChange }: FormInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;