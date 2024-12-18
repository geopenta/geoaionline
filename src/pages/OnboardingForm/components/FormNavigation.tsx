import React from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isValid: boolean;
}

const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext,
  isValid
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={onPrevious}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-mono"
      >
        <ArrowLeft className="w-4 h-4" /> Previous
      </button>

      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className={`flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-mono ${!isValid && 'opacity-50 cursor-not-allowed'}`}
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          type="submit"
          disabled={!isValid}
          className={`flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-mono ${!isValid && 'opacity-50 cursor-not-allowed'}`}
        >
          Submit <Send className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default FormNavigation;