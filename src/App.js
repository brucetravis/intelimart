import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './layouts/AdminLayout';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/dashboard' element={<AdminLayout><Dashboard /></AdminLayout>} />
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
