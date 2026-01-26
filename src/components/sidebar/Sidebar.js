import React from "react"
import "./Sidebar.css"
import { Archive, BarChart2, Box, CreditCard, LayoutDashboard, Package, Settings, ShoppingCart, Tag, User, Users } from "lucide-react"
import { useNavigate } from "react-router"

export default function Sidebar() {

    // function to navigate to the root route
    const navigate = useNavigate()

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
                    <li>
                        <LayoutDashboard size={24} stroke="#4ade80" />
                        <a href="/dashboard">Dashboard</a>
                    </li>

                    <li>
                        <Package size={24} stroke="#facc15" />
                        <a href="/orders">Orders</a>
                    </li>

                    <li>
                        <Users size={24} stroke="#38bdf8" />
                        <a href="/customers">Customers</a>
                    </li>

                    <li>
                        <BarChart2 size={24} stroke="#a79bfa" />
                        <a href='/reports'>Reports</a>
                    </li>
                </ul>

                <ul className="middle">
                    <h5>Tools</h5>

                    <li>
                        <Box size={24} stroke="#f87171" />
                        <a href="/products">Products</a>
                    </li>

                    <li>
                        <Tag size={24} stroke="#fbbf24" />
                        <a href="/categories">Categories</a>
                    </li>

                    <li>
                        <ShoppingCart size={24} stroke="#3b82f6" />
                        <a href="/cart">Cart</a>
                    </li>

                    <li>
                        <Archive size={24} stroke="#c084f6" />
                        <a href="inventory">Inventory</a>
                    </li>

                    <li>
                        <CreditCard size={24} stroke="#16a34a" />
                        <a href="/payments">Payments</a>
                    </li>
                </ul>

                <ul className="bottom">
                    <h5>Settings</h5>

                    <li>
                        <Settings size={24} stroke="#9413b8" />
                        <a href="/settings">Settings</a>
                    </li>
                    
                    <li>
                        <User size={24} stroke="#f472b6" />
                        <a href="/profile">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
