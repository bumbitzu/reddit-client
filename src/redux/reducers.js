// src/redux/reducers.js
import { SEARCH_POSTS_BEGIN, SEARCH_POSTS_SUCCESS, SEARCH_POSTS_FAILURE, FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, SET_CATEGORY_FILTER } from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  category: 'all',
};

export default function postsReducer(state = initialState, action)
{
  switch (action.type)
  {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload.category,
      };
    case SEARCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts,
      };
    case SEARCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [], // Clear posts or handle error state differently as needed
      };
    default:
      return state;
  }
}
