import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element to render the React component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React component with React.StrictMode to catch any unexpected side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
