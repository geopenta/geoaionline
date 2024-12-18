import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GradientText from '../../../components/ui/GradientText';

const NewsletterSignup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 text-center"
    >
      <h2 className="text-2xl font-bold mb-4 font-mono">
        <GradientText>Stay Updated</GradientText>
      </h2>
      <p className="text-gray-400 mb-6 font-mono">
        Subscribe to our newsletter for the latest AI news and insights.
      </p>
      <form className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-black/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 transition-colors font-mono"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-6 py-2 font-medium hover:opacity-90 transition-opacity flex items-center gap-2 font-mono"
        >
          Subscribe
          <Send className="w-4 h-4" />
        </button>
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;