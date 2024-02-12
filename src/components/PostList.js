import React from 'react';
import PostItem from './PostItem'; 
import './PostList.css'; 

function PostList({ posts })
{
  return (
    <div className="post-list">
      {posts.map(post =>(
        <PostItem key={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
}

export default PostList;
