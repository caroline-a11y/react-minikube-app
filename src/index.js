// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles here
import App from './App'; // Import App component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: To measure performance
reportWebVitals();
