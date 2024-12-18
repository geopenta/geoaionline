import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Transform Your Business with GEO.AI Today
        </h2>
        <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
          Start Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;