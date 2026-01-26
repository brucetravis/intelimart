import React from "react"
import "./Sidebar.css"
import { Archive, BarChart2, Box, CreditCard, LayoutDashboard, Package, Settings, ShoppingCart, Tag, User, Users } from "lucide-react"
import { useLocation, useNavigate } from "react-router"

export default function Sidebar() {

    // function to navigate to the root route
    const navigate = useNavigate()

    // useLocation to navigate to the correct component
    const location = useLocation()

    return (
        <div
            className="sidebar"
        >
            <div 
                className="logo"
                onClick={() => navigate("/")}
            >
                <h4>INTELIMART</h4>
            </div>

            <div
             className="features"
            >
                <ul className="top">
                    <li 
                        className={location.pathname === "/" ? "active" : ""}
                        onClick={() => navigate("/")}
                    >
                        <LayoutDashboard size={24} stroke="#4ade80" />
                        <a href="/dashboard">Dashboard</a>
                    </li>

                    <li 
                        className={location.pathname === "/orders" ? "active" : ""}
                        onClick={() => navigate("/orders")}
                    >
                        <Package size={24} stroke="#facc15" />
                        <a href="/orders">Orders</a>
                    </li>

                    <li 
                        className={location.pathname === "/customers" ? "active" : ""}
                        onClick={() => navigate("/customers")}
                    >
                        <Users size={24} stroke="#38bdf8" />
                        <a href="/customers">Customers</a>
                    </li>

                    <li 
                        className={location.pathname === "/reports" ? "active" : ""}
                        onClick={() => navigate("/reports")}
                    >
                        <BarChart2 size={24} stroke="#a79bfa" />
                        <a href='/reports'>Reports</a>
                    </li>
                </ul>

                <ul className="middle">
                    <h5>Tools</h5>

                    <li 
                        className={location.pathname === "/products" ? "active" : ""}
                        onClick={() => navigate("/products")}
                    >
                        <Box size={24} stroke="#f87171" />
                        <a href="/products">Products</a>
                    </li>

                    <li 
                        className={location.pathname === "/categories" ? "active" : ""}
                        onClick={() => navigate("/categories")}
                    >
                        <Tag size={24} stroke="#fbbf24" />
                        <a href="/categories">Categories</a>
                    </li>

                    <li 
                        className={location.pathname === "/cart" ? "active" : ""}
                        onClick={() => navigate("/cart")}
                    >
                        <ShoppingCart size={24} stroke="#3b82f6" />
                        <a href="/cart">Cart</a>
                    </li>

                    <li 
                        className={location.pathname === "/inventory" ? "active" : ""}
                        onClick={() => navigate("/inventory")}
                    >
                        <Archive size={24} stroke="#c084f6" />
                        <a href="inventory">Inventory</a>
                    </li>

                    <li 
                        className={location.pathname === "/payments" ? "active" : ""}
                        onClick={() => navigate("/payments")}
                    >
                        <CreditCard size={24} stroke="#16a34a" />
                        <a href="/payments">Payments</a>
                    </li>
                </ul>

                <ul className="bottom">
                    <h5>Settings</h5>

                    <li 
                        className={location.pathname === "/settings" ? "active" : ""}
                        onClick={() => navigate("/settings")}
                    >
                        <Settings size={24} stroke="#9413b8" />
                        <a href="/settings">Settings</a>
                    </li>
                    
                    <li 
                        className={location.pathname === "/profile" ? "active" : ""}
                        onClick={() => navigate("/profile")}
                    >
                        <User size={24} stroke="#f472b6" />
                        <a href="/profile">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
