import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AppProvider } from './context/AppProvider';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

import GlobalStyle from './assets/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyle />
          <App />
        </Router>        
      </QueryClientProvider>      
    </AppProvider>
  </React.StrictMode>
);