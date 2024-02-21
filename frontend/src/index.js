import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AppProvider } from './context/AppProvider';

import GlobalStyle from './assets/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
          <AppProvider>
              <GlobalStyle />
              <App />
          </AppProvider>
        </Router>    
  </React.StrictMode>
);