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
import ShopLayout from './layouts/ShopLayout';
import Register from './pages/register/Register';
import Landing from './pages/landing/Landing';
import Shop from './pages/shop/Shop';
import ProductsDetails from './pages/productdetails/ProductsDetails';
import { ToastContainer } from 'react-toastify';

function App() {

  // An array of al the pages that we have
  // const pages = [
  //   { id: 1, location: "Dashboard", path: "/dashboard" },
  //   { id: 2, location: "Orders", path: "/orders" },
  //   { id: 3, location: "Customers", path: "/customers" },
  //   { id: 4, location: "Reports", path: "/reports" },
  //   { id: 5, location: "Products", path: "/products" },
  //   { id: 6, location: "Categories", path: "/categories" },
  //   { id: 7, location: "Cart", path: "/cart" },
  //   { id: 8, location: "Inventory", path: "/inventory" },
  //   { id: 9, location: "Settings", path: "/settings" },
  //   { id: 10, location: "Profile", path: "/profile" }
  // ]

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/users/landing" replace /> } />

        <Route path="/admin/dashboard"  element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><Products /></AdminLayout>} />
        <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
        <Route path="/admin/customers" element={<AdminLayout><Customers /></AdminLayout>} />
        <Route path="/admin/profile" element={<AdminLayout><Profile /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><Settings /></AdminLayout>} />
        <Route path="/admin/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />

        <Route path='/register' element={<Register />} />
        <Route path='/users/landing' element={<ShopLayout><Landing /></ShopLayout>} />
        <Route path='/users/shop' element={<ShopLayout><Shop /></ShopLayout>} />
        <Route path='/users/productdetails/:id' element={<ShopLayout><ProductsDetails /></ShopLayout>} />
      </Routes>
      
      
      <ToastContainer 
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
