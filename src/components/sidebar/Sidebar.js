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
                        className={location.pathname === "/admin/dashboard" ? "active" : ""}
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        <LayoutDashboard size={24} stroke="#4ade80" />
                        <a href="/admin/dashboard">Dashboard</a>
                    </li>

                    <li 
                        className={location.pathname === "/admin/orders" ? "active" : ""}
                        onClick={() => navigate("/admin/orders")}
                    >
                        <Package size={24} stroke="#facc15" />
                        <a href="/admin/orders">Orders</a>
                    </li>

                    <li 
                        className={location.pathname === "/admin/customers" ? "active" : ""}
                        onClick={() => navigate("/admin/customers")}
                    >
                        <Users size={24} stroke="#38bdf8" />
                        <a href="/admin/customers">Customers</a>
                    </li>

                    <li 
                        className={location.pathname === "/admin/analytics" ? "active" : ""}
                        onClick={() => navigate("/admin/analytics")}
                    >
                        <BarChart2 size={24} stroke="#a79bfa" />
                        <a href='/admin/analytics'>Analytics</a>
                    </li>

                    <li 
                        className={location.pathname === "/admin/products" ? "active" : ""}
                        onClick={() => navigate("/admin/products")}
                    >
                        <Box size={24} stroke="#f87171" />
                        <a href="/admin/products">Products</a>
                    </li>

                    <li 
                        className={location.pathname === "/admin/settings" ? "active" : ""}
                        onClick={() => navigate("/admin/settings")}
                    >
                        <Settings size={24} stroke="#9413b8" />
                        <a href="/admin/settings">Settings</a>
                    </li>
                    
                    <li 
                        className={location.pathname === "/admin/profile" ? "active" : ""}
                        onClick={() => navigate("/admin/profile")}
                    >
                        <User size={24} stroke="#f472b6" />
                        <a href="/admin/profile">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
