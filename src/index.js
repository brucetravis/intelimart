import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import ProductProvider from './contexts/ProductProvider';
import SearchProvider from './contexts/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

