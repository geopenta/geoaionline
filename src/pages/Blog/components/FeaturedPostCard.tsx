import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FeaturedPost } from '../types';

interface FeaturedPostCardProps {
  post: FeaturedPost;
  index: number;
}

const FeaturedPostCard = ({ post, index }: FeaturedPostCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => navigate(`/blog/${post.id}`)}
      className="group cursor-pointer bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          width={800}
          height={400}
        />
        <div className="absolute bottom-6 left-6 z-20">
          <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm font-mono">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-6 text-sm text-gray-400 font-mono mb-4">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors font-mono mb-4">
          {post.title}
        </h3>

        <p className="text-gray-400 font-mono leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </motion.article>
  );
};

export default FeaturedPostCard;