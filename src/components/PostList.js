// src/components/PostList.js
import React from 'react';
import PostItem from './PostItem'; // Adjust the import path as necessary
import './PostList.css'; // Importing the CSS for styling

function PostList({ posts })
{ // Ensure `posts` are passed as a prop
  return (
    <div className="post-list">
      {posts.map(post =>(
        <PostItem key={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
}

export default PostList;
