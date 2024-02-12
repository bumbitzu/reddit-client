import { connect } from 'react-redux';
import PostList from '../components/PostList';

const getVisiblePosts = (posts, categoryFilter) =>
{
  console.log(`post object${posts}`)
  console.log(`Filtering by category: ${categoryFilter}`); // Debug log
  const filteredPosts = categoryFilter === 'all'
    ? posts
    : posts.filter(post =>
    {
      console.log(`Post category: ${post.category}`); // Debug log for each post's category
      return post.category === categoryFilter;
    });
  console.log(`Filtered posts count: ${filteredPosts.length}`); // Debug log to see how many posts match the filter
  return filteredPosts;
};

const mapStateToProps = state =>
{
  // Use 'categoryFilter' from state to filter posts
  return {
    posts: getVisiblePosts(state.posts.items, state.posts.categoryFilter),
  };
};

const VisiblePostList = connect(
  mapStateToProps,
)(PostList);

export default VisiblePostList;
