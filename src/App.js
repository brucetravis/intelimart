import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import Customers from './pages/customers/Customers';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Analytics from './pages/analytics/Analytics';
import Shop from './pages/shop/Shop';
import ShopLayout from './layouts/ShopLayout';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/users/shop" replace /> } />

      <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/products" element={<AdminLayout><Products /></AdminLayout>} />
      <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
      <Route path="/admin/customers" element={<AdminLayout><Customers /></AdminLayout>} />
      <Route path="/admin/profile" element={<AdminLayout><Profile /></AdminLayout>} />
      <Route path="/admin/settings" element={<AdminLayout><Settings /></AdminLayout>} />
      <Route path="/admin/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />

      <Route path='/users/shop' element={<ShopLayout><Shop /></ShopLayout>} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
