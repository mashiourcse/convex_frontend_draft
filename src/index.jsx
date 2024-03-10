import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NutritionProvider } from './context/NutritionContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NutritionProvider>
    <App />
    </NutritionProvider>
  </React.StrictMode>
);
