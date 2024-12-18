import React from 'react';
import FeaturedPostCard from './FeaturedPostCard';
import { featuredPosts } from '../data/posts';

const FeaturedPosts = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 font-mono">Featured Stories</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {featuredPosts.map((post, index) => (
          <FeaturedPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeaturedPosts);