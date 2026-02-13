import React from "react"
import "./Sidebar.css"
import { BarChart2, Box, LayoutDashboard, Package, Settings, User, Users } from "lucide-react"
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
                        className={location.pathname === "/analytics" ? "active" : ""}
                        onClick={() => navigate("/analytics")}
                    >
                        <BarChart2 size={24} stroke="#a79bfa" />
                        <a href='/analytics'>Analytics</a>
                    </li>

                    <li 
                        className={location.pathname === "/products" ? "active" : ""}
                        onClick={() => navigate("/products")}
                    >
                        <Box size={24} stroke="#f87171" />
                        <a href="/products">Products</a>
                    </li>

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
