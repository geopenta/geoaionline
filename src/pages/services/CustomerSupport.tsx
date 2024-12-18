import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Clock, Brain, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import CursorCloud from '../../components/ui/CursorCloud';
import ServiceHero from './components/ServiceHero';
import FeatureCard from './components/FeatureCard';
import ServiceStats from './components/ServiceStats';

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: '24/7 AI Support',
    description: 'Instant responses to customer inquiries around the clock'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Smart Learning',
    description: 'AI that learns from each interaction to improve responses'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Quick Resolution',
    description: 'Faster problem-solving with automated solutions'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Communication',
    description: 'Enterprise-grade security for all customer interactions'
  }
];

const stats = [
  { value: '92%', label: 'Customer Satisfaction' },
  { value: '85%', label: 'Faster Response Time' },
  { value: '50%', label: 'Cost Reduction' }
];

const CustomerSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative">
      <GridBackground />
      <CursorCloud />
      
      <div className="relative z-10">
        <motion.div 
          className="fixed top-8 left-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavButton icon={ArrowLeft} onClick={() => navigate('/')}>
            Back to Home
          </NavButton>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-24">
          <ServiceHero
            title="Customer Support AI"
            description="Revolutionize your customer support with AI-powered automation. Provide instant, accurate responses and exceptional service 24/7."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          <ServiceStats
            title="Impact on Business"
            stats={stats}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;