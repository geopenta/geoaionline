import React from 'react';
import PostCard from './PostCard';
import { latestPosts } from '../data/posts';

const LatestPosts = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 font-mono">Latest Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(LatestPosts);