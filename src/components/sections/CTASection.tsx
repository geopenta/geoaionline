import React from 'react';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const CTASection = () => {
  return (
    <div className="bg-black py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Transform Your Business with <GradientText>GEO.AI</GradientText> Today
        </h2>
        <Button variant="primary" showArrow className="group mx-auto">
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default CTASection;