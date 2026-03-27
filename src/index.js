import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import ProductProvider from './contexts/ProductProvider';
import SearchProvider from './contexts/SearchProvider';
import AuthProvider from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <SearchProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SearchProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

