import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = state =>
{
  return {
    posts: state.posts.items,
  };
};

const VisiblePostList = connect(
  mapStateToProps,
)(PostList);

export default VisiblePostList;
