import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './contexts/ProductProvider';
import AuthProvider from './contexts/AuthProvider';
import SearchProvider from './contexts/SearchProvider'
import CartProvider from './contexts/CartProvider';
import UsersProvider from './contexts/UsersProvider';
import PaymentProvider from './contexts/PaymentProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <SearchProvider>
            <CartProvider>
              <UsersProvider>
                <PaymentProvider>
                  <App />
                </PaymentProvider>
              </UsersProvider>
            </CartProvider>
          </SearchProvider>
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

