import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './layouts/AdminLayout';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path='/admin/orders' element={<AdminLayout><Orders /></AdminLayout>} />
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
