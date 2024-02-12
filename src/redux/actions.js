// src/redux/actions.js
export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const SEARCH_POSTS_BEGIN = 'SEARCH_POSTS_BEGIN';
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';


export const searchPostsBegin = () => ({
  type: SEARCH_POSTS_BEGIN,
});

export const searchPostsSuccess = (posts) => ({
  type: SEARCH_POSTS_SUCCESS,
  payload: { posts },
});

export const searchPostsFailure = (error) => ({
  type: SEARCH_POSTS_FAILURE,
  payload: { error },
});

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
});

// Thunk for fetching posts
export const fetchPosts = (category = 'all') =>
{
  return dispatch =>
  {
    dispatch(fetchPostsBegin());
    fetch(`https://www.reddit.com/r/${category}.json`)
      .then(res =>
      {
        if (!res.ok)
        {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data =>
      {
        const posts = data.data.children.map(child => ({
          id: child.data.id,
          title: child.data.title,
          summary: child.data.selftext,
          imageUrl: child.data.thumbnail && child.data.thumbnail.startsWith('http') ? child.data.thumbnail : undefined,
        }));
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => dispatch(fetchPostsFailure(error.toString())));
  };
};

export const searchPosts = (searchTerm) =>
{
  return (dispatch) =>
  {
    dispatch(searchPostsBegin());
    fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`)
      .then((response) => response.json())
      .then((data) =>
      {
        dispatch(fetchPostsSuccess(data.data.children.map(child =>
        {
          let imageUrl = undefined;

          if (child.data.thumbnail && child.data.thumbnail.startsWith('http'))
          {
            imageUrl = child.data.thumbnail;
          } else if (child.data.preview && child.data.preview.images && child.data.preview.images[ 0 ])
          {
            imageUrl = child.data.preview.images[ 0 ].source.url;
          }

          return {
            id: child.data.id,
            title: child.data.title,
            summary: child.data.selftext,
            imageUrl,
          };
        })));
      })
      .catch((error) => dispatch(searchPostsFailure(error.toString())));
  };
};
