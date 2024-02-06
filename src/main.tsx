import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './error/ErrorBoundary.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary errorComponent={<h2>Oops! Something went wrong.</h2>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
