import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers';

const store = configureStore({
  reducer: {
    posts: postsReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

export default store;
