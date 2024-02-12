// src/index.js
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css'; // General styles
import { createRoot } from 'react-dom/client'; // Import createRoot
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render( // Use the render method on the root.
  <Provider store={store}>
    <App />
  </Provider>
);
