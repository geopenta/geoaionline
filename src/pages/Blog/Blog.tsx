import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import BlogHero from './components/BlogHero';
import FeaturedPosts from './components/FeaturedPosts';
import LatestPosts from './components/LatestPosts';
import NewsletterSignup from './components/NewsletterSignup';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative">
      <GridBackground />
      
      <div className="relative z-10">
        <motion.div 
          className="fixed top-8 left-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavButton icon={ArrowLeft} onClick={() => navigate('/')}>
            Back to Home
          </NavButton>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 py-24">
          <BlogHero />
          <div className="space-y-16">
            <FeaturedPosts />
            <LatestPosts />
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Blog);