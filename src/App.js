import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/products/Products';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Inventory from './pages/inventory/Inventory';
import Customers from './pages/customers/Customers';
import Orders from './pages/orders/Orders';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />

      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
