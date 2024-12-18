import { useState } from 'react';
import { OnboardingData } from '../../../services/onboarding';
import { onboardingSchema } from '../../../config/api';

interface UseOnboardingForm {
  step: number;
  formData: OnboardingData;
  error: string;
  isSubmitting: boolean;
  setError: (error: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  updateFormData: (field: keyof OnboardingData, value: string) => void;
  handleNext: () => boolean;
  handlePrevious: () => void;
  resetForm: () => void;
}

const initialFormData: OnboardingData = {
  fullName: '',
  companyName: '',
  service: '',
  requirements: ''
};

export function useOnboardingForm(): UseOnboardingForm {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>(initialFormData);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const validateStep = (currentStep: number): boolean => {
    try {
      switch (currentStep) {
        case 1:
          onboardingSchema.shape.fullName.parse(formData.fullName);
          break;
        case 2:
          onboardingSchema.shape.companyName.parse(formData.companyName);
          break;
        case 3:
          onboardingSchema.shape.service.parse(formData.service);
          break;
        case 4:
          onboardingSchema.shape.requirements.parse(formData.requirements);
          break;
      }
      return true;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Invalid input');
      }
      return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(step)) {
      return false;
    }

    if (step < 4) {
      setStep(step + 1);
      setError('');
    }
    return true;
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      setError('');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setStep(1);
    setError('');
    setIsSubmitting(false);
  };

  return {
    step,
    formData,
    error,
    isSubmitting,
    setError,
    setIsSubmitting,
    updateFormData,
    handleNext,
    handlePrevious,
    resetForm
  };
}