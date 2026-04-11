import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './layouts/AdminLayout';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders'
import Customers from './pages/customers/Customers';
import Analytics from './pages/analytics/Analytics';
import EcommerceSettings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import Products from './pages/products/Products'
import Landing from './pages/landing/Landing';
import ShopLayout from './layouts/ShopLayout'
import Shop from './pages/shop/Shop';
import Register from './pages/register/Register';
import ProductsDetails from './pages/productdetails/ProductsDetails';
import PaymentSuccess from './pages/paymentsuccess/PaymentSuccess';
import NoPageFound from './pages/notFound/NotFound';
import { useAuth } from './contexts/AuthProvider';
import LogIn from './components/modals/login/LogIn';


function App() {

  // get the state to open the login modal from the Authprovider
  const { isLoginModal } = useAuth()

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/users/landing" replace /> } />

        <Route path='/admin/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path='/admin/orders' element={<AdminLayout><Orders /></AdminLayout>} />
        <Route path='/admin/customers' element={<AdminLayout><Customers /></AdminLayout>} />
        <Route path='/admin/analytics' element={<AdminLayout><Analytics /></AdminLayout>} />
        <Route path='/admin/settings' element={<AdminLayout><EcommerceSettings /></AdminLayout>} />
        <Route path='/admin/profile' element={<AdminLayout><Profile /></AdminLayout>} />
        <Route path='/admin/products' element={<AdminLayout><Products /></AdminLayout>} />

        <Route path='/register' element={<Register />} />
        <Route path='/users/landing' element={<ShopLayout><Landing /></ShopLayout>} />
        <Route path='/users/shop' element={<ShopLayout><Shop /></ShopLayout>} />
        <Route path='/users/productdetails/:id' element={<ShopLayout><ProductsDetails /></ShopLayout>} />
      
        <Route path="/users/payment-success" element={<PaymentSuccess />} />

        <Route path='*' element={<NoPageFound />} />
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

      {isLoginModal && <LogIn />}
    </>
  );
}

export default App;
