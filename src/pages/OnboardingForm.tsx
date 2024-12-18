import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../components/ui/GridBackground';
import CloseButton from '../components/ui/CloseButton';
import { services } from '../components/sections/services/data';

interface FormData {
  fullName: string;
  companyName: string;
  service: string;
  requirements: string;
}

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    service: '',
    requirements: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear any previous errors
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (step === 1 && !formData.fullName) {
      setError('Please enter your full name');
      return;
    }
    if (step === 2 && !formData.companyName) {
      setError('Please enter your company name');
      return;
    }
    if (step === 3 && !formData.service) {
      setError('Please select a service');
      return;
    }

    if (step < 4) {
      setStep(step + 1);
      setError('');
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      setError('');
    } else {
      navigate('/');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate final step
    if (!formData.requirements) {
      setError('Please describe your requirements');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success message and redirect
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <GridBackground />
      
      <CloseButton 
        onClick={handleClose} 
        className="fixed top-8 right-8"
      />
      
      <div className="relative z-10 w-full max-w-xl mx-4">
        <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 relative">
          <div className="relative">
            {/* Progress bar */}
            <div className="h-1 bg-purple-500/20 rounded-full mb-8">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">What is your full name?</h2>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
                        placeholder="John Doe"
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">What is your company name?</h2>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => updateFormData('companyName', e.target.value)}
                        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
                        placeholder="Acme Inc."
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">Which service are you interested in?</h2>
                      <select
                        value={formData.service}
                        onChange={(e) => updateFormData('service', e.target.value)}
                        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-purple-400 mb-6 font-mono">Tell us about your specific needs and requirements</h2>
                      <textarea
                        value={formData.requirements}
                        onChange={(e) => updateFormData('requirements', e.target.value)}
                        className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono h-32 resize-none"
                        placeholder="Please describe your needs..."
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-mono"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-mono"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full transition-all font-mono ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;