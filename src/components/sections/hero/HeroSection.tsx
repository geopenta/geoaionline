import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import GradientText from '../../ui/GradientText';
import AnimatedTitle from '../../ui/AnimatedText/AnimatedTitle';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';
import CursorCloud from '../../ui/CursorCloud';
import TypewriterEffect from '../../ui/TypewriterEffect';
import NeonText from '../../ui/NeonText';

const messages = [
  "Empowering businesses with AI automation.",
  "Seamless customer support at your fingertips.",
  "Streamline your CRM with GEO.AI.",
  "Transform your business with intelligent solutions."
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <CursorCloud />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute w-[300px] h-[300px] right-20 top-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl animate-pulse-slow" 
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold font-mono tracking-[0.2em] relative inline-block">
            <span className="absolute -inset-0.5 blur-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20"></span>
            <GradientText className="relative">
              <AnimatedText text="GEO.AI" delay={0.2} />
            </GradientText>
          </h1>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 font-mono uppercase tracking-wider scale-90 sm:scale-100">
          <NeonText 
            className="leading-tight"
            glowColor="rgba(147, 51, 234, 0.35)"
          >
            <AnimatedTitle text="Revolutionize Your Business with" />
          </NeonText>
          <br className="hidden sm:block" />
          <span className="sm:mt-2 inline-block">
            <GradientText>
              <AnimatedTitle text="AI Automation" delay={20} />
            </GradientText>
          </span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg sm:text-xl mb-16 max-w-2xl mx-auto font-light scale-90 sm:scale-100"
        >
          <TypewriterEffect messages={messages} className="text-base sm:text-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mb-8 animate-bounce"
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center scale-90 sm:scale-100"
        >
          <Button 
            variant="primary" 
            className="font-mono uppercase tracking-wider text-sm sm:text-base"
            onClick={() => navigate('/start')}
          >
            Start Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;