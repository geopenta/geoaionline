import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8">
        <h2 className="text-2xl font-bold mb-6 font-mono">Send us a Message</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg mb-6 font-mono">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(value) => handleChange('name', value)}
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
            />
          </div>
          <FormInput
            label="Subject"
            type="text"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(value) => handleChange('subject', value)}
          />
          <FormTextArea
            label="Message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={(value) => handleChange('message', value)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-6 py-3 font-medium transition-all font-mono flex items-center justify-center gap-2
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              <>
                Message Sent!
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400"
                >
                  ✓
                </motion.div>
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;