import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BottomNavBar from './components/Features/bottomNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BottomNavBar />
    </BrowserRouter>
  </React.StrictMode>
);
