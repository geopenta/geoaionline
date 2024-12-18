import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 max-w-3xl mx-auto"
    >
      <div className="flex gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-xl text-gray-300 mb-6 font-mono">
        "GEO.AI's integration capabilities have transformed how we handle spatial data. The seamless connection with our existing tools has saved us countless hours and improved our analysis accuracy significantly."
      </blockquote>
      
      <div className="font-mono">
        <p className="text-white font-semibold">Sarah Chen</p>
        <p className="text-gray-400">GIS Manager, Urban Planning Solutions</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;