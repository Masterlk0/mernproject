import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new 'react-dom/client' for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
