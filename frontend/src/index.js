import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './context/AuthContext';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

import GlobalStyle from './assets/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyle />
          <App />
        </Router>        
      </QueryClientProvider>      
    </AuthProvider>
  </React.StrictMode>
);