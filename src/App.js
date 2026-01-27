import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/products/Products';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />

      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
