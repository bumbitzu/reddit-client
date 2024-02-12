// src/services/redditApi.js

// Function to fetch popular posts
export const fetchPopularPosts = async () =>
{
  const response = await fetch('https://www.reddit.com/r/all.json');
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// Function to search for posts
export const searchRedditPosts = async (query) =>
{
  const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`);
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
