import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  
  // An array of al the pages that we have
  const pages = [
    { id: 1, location: "Dashboard", path: "/dashboard" },
    { id: 2, location: "Orders", path: "/orders" },
    { id: 3, location: "Customers", path: "/customers" },
    { id: 4, location: "Reports", path: "/reports" },
    { id: 5, location: "Products", path: "/products" },
    { id: 6, location: "Categories", path: "/categories" },
    { id: 7, location: "Cart", path: "/cart" },
    { id: 8, location: "Inventory", path: "/inventory" },
    { id: 9, location: "Settings", path: "/settings" },
    { id: 10, location: "Profile", path: "/profile" }
  ]

  return (
    <div className="App">
      <Sidebar />
      <Header />
      {/* {pages.forEach((page) => {
        if (page.location === page.path) {
          (<Header key={page.id} title={page.location} />)
        }
      })} */}
    </div>
  );
}

export default App;
