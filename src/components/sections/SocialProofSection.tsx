import React from 'react';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';
import GradientText from '../ui/GradientText';
import AnimatedText from '../ui/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: <Users className="w-6 h-6" />,
    value: '500+',
    label: 'Happy Clients'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: '10,000+',
    label: 'Hours Saved'
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: '95%',
    label: 'Customer Satisfaction'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: '3x',
    label: 'Average ROI'
  }
];

const testimonials = [
  {
    quote: "GEO.AI has transformed how we handle customer support. It's like having an extra team working 24/7.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp"
  },
  {
    quote: "The automation capabilities have saved us countless hours and improved our customer satisfaction scores.",
    author: "Michael Chen",
    role: "Operations Director, CloudScale"
  }
];

const SocialProofSection = () => {
  return (
    <div className="bg-black py-24 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GradientText className="text-4xl font-bold mb-6 block font-mono">
            <AnimatedText text="Our Results Speak for Themselves" />
          </GradientText>
        </div>

        {/* Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 mx-auto text-purple-400">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-mono">
                <AnimatedText text={metric.value} delay={0.2 * index} />
              </div>
              <div className="text-gray-400 font-mono">
                <AnimatedText text={metric.label} delay={0.2 * index + 0.1} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 font-mono">
                <AnimatedText text={testimonial.quote} delay={0.3 + (index * 0.2)} />
              </p>
              <div>
                <div className="text-white font-semibold font-mono">
                  <AnimatedText text={testimonial.author} delay={0.4 + (index * 0.2)} />
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  <AnimatedText text={testimonial.role} delay={0.5 + (index * 0.2)} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;