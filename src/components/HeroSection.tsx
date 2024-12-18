import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient Orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-7xl font-bold tracking-tighter text-white mb-6">
          GEO.AI
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering Businesses with AI Automation
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Tailored solutions for streamlined efficiency, cost reduction, and growth acceleration
        </p>
        <div className="flex gap-6 justify-center">
          <button className="group px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;