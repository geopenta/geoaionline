import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

const bounceVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const ReviewCard = ({ quote, author, role, delay = 0 }: ReviewCardProps) => {
  return (
    <motion.div 
      variants={bounceVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true }}
      className="p-8 rounded-xl bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] border border-purple-500/10 hover:bg-gradient-to-b hover:from-purple-900/20 hover:to-blue-900/20 transition-all duration-700 group"
    >
      <div className="flex gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-400 mb-6 font-mono group-hover:text-gray-300 transition-colors duration-700">
        {quote}
      </p>
      <div>
        <p className="text-white font-semibold font-mono group-hover:text-purple-200 transition-colors duration-700 whitespace-nowrap">
          {author}
        </p>
        <p className="text-gray-400 text-sm font-mono group-hover:text-gray-300 transition-colors duration-700 whitespace-nowrap">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;