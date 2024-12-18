import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import GridBackground from '../../components/ui/GridBackground';
import NavButton from '../../components/ui/NavButton';
import { featuredPosts, latestPosts } from './data/posts';

const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = [...featuredPosts, ...latestPosts].find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Post not found</p>
      </div>
    );
  }

  // Split content into sections based on double newlines and filter out empty strings
  const sections = post.content.trim().split('\n\n').filter(Boolean);

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
          <NavButton icon={ArrowLeft} onClick={() => navigate('/blog')}>
            Back to Blog
          </NavButton>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 py-24">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-xl rounded-xl border border-purple-500/20 p-8"
          >
            {'image' in post && (
              <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                <span className="flex items-center gap-1 text-purple-400">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>

              <h1 className="text-3xl font-bold font-mono">{post.title}</h1>
              <p className="text-gray-400 font-mono leading-relaxed">{post.excerpt}</p>

              <div className="prose prose-invert font-mono max-w-none">
                {sections.map((section, index) => {
                  // Check if section is a heading (starts with a word followed by newline)
                  const lines = section.split('\n');
                  const isHeading = lines.length > 1;
                  
                  if (isHeading) {
                    const [heading, ...content] = lines;
                    return (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-purple-400">{heading}</h2>
                        {content.map((line, i) => {
                          // Check if line is a bullet point
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={i} className="flex items-start gap-2 mb-2">
                                <span className="text-purple-400 mt-1.5">•</span>
                                <p className="text-gray-300">{line.trim().substring(1).trim()}</p>
                              </div>
                            );
                          }
                          // Check if line is a numbered point
                          if (/^\d+\./.test(line.trim())) {
                            return (
                              <div key={i} className="flex items-start gap-2 mb-2">
                                <span className="text-purple-400">{line.match(/^\d+\./)?.[0]}</span>
                                <p className="text-gray-300">{line.replace(/^\d+\./, '').trim()}</p>
                              </div>
                            );
                          }
                          return <p key={i} className="text-gray-300 mb-2">{line}</p>;
                        })}
                      </div>
                    );
                  }
                  
                  return <p key={index} className="text-gray-300 mb-4">{section}</p>;
                })}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogPost);