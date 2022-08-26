import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FinancialManagement from './pages/FinancialManagement';
import reportWebVitals from './reportWebVitals';
import Start from './pages/start';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Start/>
  </React.StrictMode>
);
reportWebVitals();
