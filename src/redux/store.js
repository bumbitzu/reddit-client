// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // Optionally, you can customize or add more middleware here
});

export default store;
