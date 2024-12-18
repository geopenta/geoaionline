import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => navigate(`/blog/${post.id}`)}
      className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8 hover:border-purple-500/50 transition-all group cursor-pointer transform hover:-translate-y-1 duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
          <Tag className="w-5 h-5" />
        </div>
        <span className="text-sm text-purple-400 font-mono group-hover:text-purple-300 transition-colors">
          {post.category}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors font-mono mb-4">
        {post.title}
      </h3>

      <p className="text-gray-400 font-mono leading-relaxed mb-6 flex-grow">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-6 text-sm text-gray-400 font-mono pt-6 border-t border-purple-500/20">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-2">
          <User className="w-4 h-4" />
          {post.author}
        </span>
      </div>
    </motion.article>
  );
};

export default PostCard;