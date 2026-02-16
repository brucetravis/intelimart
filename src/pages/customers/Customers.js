import React, { useState } from 'react'
import './Customers.css'
import Button from '../../components/buttons/Button';
import { Search } from 'lucide-react';
import Customer from '../../components/modals/customer/Customer';

export default function Customers() {

    const customers = [
        { id: 1, img: 'https://i.pinimg.com/736x/fb/31/37/fb3137e1e851320d806809d0473f446d.jpg', name: "Alice Johnson", email: "alice.johnson@email.com", phone: "+254700123456", orders: 5, totalSpent: 1250.50, aiRevenue: 600.00, aiCostSavings: 150.00, aiFeatures: ["Smart Upsell","Recommendation Engine"], status: "Active", dateJoined: "2025-09-12" },
        { id: 2, img: 'https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg', name: "Brian Mwangi", email: "brian.mwangi@email.com", phone: "+254711234567", orders: 2, totalSpent: 300.00, aiRevenue: 0.00, aiCostSavings: 50.00, aiFeatures: ["Support Automation"], status: "Inactive", dateJoined: "2025-10-05" },
        { id: 3, img: 'https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg', name: "Catherine Achieng", email: "catherine.achieng@email.com", phone: "+254722345678", orders: 8, totalSpent: 2200.75, aiRevenue: 1200.00, aiCostSavings: 300.00, aiFeatures: ["Recommendation Engine","Dynamic Pricing"], status: "Active", dateJoined: "2025-11-20" },
        { id: 4, img: 'https://i.pinimg.com/736x/4a/e9/e3/4ae9e3b85f79f3169dba49259fe897fe.jpg', name: "David Otieno", email: "david.otieno@email.com", phone: "+254733456789", orders: 1, totalSpent: 150.00, aiRevenue: 0.00, aiCostSavings: 0.00, aiFeatures: [], status: "Active", dateJoined: "2026-01-10" },
        { id: 5, img: 'https://i.pinimg.com/736x/7a/1e/4c/7a1e4c890c618df4132d895c1fc45f2a.jpg', name: "Emily Njeri", email: "emily.njeri@email.com", phone: "+254744567890", orders: 4, totalSpent: 980.00, aiRevenue: 400.00, aiCostSavings: 120.00, aiFeatures: ["Support Automation","Smart Upsell"], status: "Inactive", dateJoined: "2025-12-01" },
        { id: 6, img: 'https://i.pinimg.com/736x/cc/6f/6d/cc6f6dc5566b5e3c10e6385408d0515c.jpg', name: "Franklin Kamau", email: "franklin.kamau@email.com", phone: "+254755678901", orders: 7, totalSpent: 1750.00, aiRevenue: 900.00, aiCostSavings: 200.00, aiFeatures: ["Recommendation Engine"], status: "Active", dateJoined: "2025-09-30" },
        { id: 7, img: 'https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg', name: "Grace Wambui", email: "grace.wambui@email.com", phone: "+254766789012", orders: 3, totalSpent: 450.50, aiRevenue: 0.00, aiCostSavings: 75.00, aiFeatures: ["Support Automation"], status: "Active", dateJoined: "2025-10-15" },
        { id: 8, img: 'https://i.pinimg.com/736x/42/dd/8d/42dd8d5465b433a70e2f4445c560abf4.jpg', name: "Henry Mutua", email: "henry.mutua@email.com", phone: "+254777890123", orders: 6, totalSpent: 1350.75, aiRevenue: 700.00, aiCostSavings: 180.00, aiFeatures: ["Dynamic Pricing"], status: "Inactive", dateJoined: "2025-11-05" },
        { id: 9, img: 'https://i.pinimg.com/736x/a3/1b/2e/a31b2ee2bdf3a8c5e65f99d935e64055.jpg', name: "Irene Chebet", email: "irene.chebet@email.com", phone: "+254788901234", orders: 2, totalSpent: 250.00, aiRevenue: 100.00, aiCostSavings: 20.00, aiFeatures: ["Smart Upsell"], status: "Active", dateJoined: "2025-12-10" },
        { id: 10, img: 'https://i.pinimg.com/736x/1f/bc/d3/1fbcd333d27961caebb2912c31b36799.jpg', name: "James Kariuki", email: "james.kariuki@email.com", phone: "+254799012345", orders: 9, totalSpent: 2600.25, aiRevenue: 1500.00, aiCostSavings: 350.00, aiFeatures: ["Recommendation Engine","Dynamic Pricing"], status: "Active", dateJoined: "2025-09-18" },
        { id: 11, img: 'https://i.pinimg.com/736x/e6/c9/f6/e6c9f60f7ccc9ebc5bfeb1ef1fecf583.jpg', name: "Katherine Wanjiru", email: "katherine.wanjiru@email.com", phone: "+254710123456", orders: 1, totalSpent: 120.00, aiRevenue: 0.00, aiCostSavings: 0.00, aiFeatures: [], status: "Inactive", dateJoined: "2026-01-12" },
        { id: 12, img: 'https://i.pinimg.com/736x/a7/73/4f/a7734f7af1d83b4207c3a6a4ea5f8351.jpg', name: "Leonard Ochieng", email: "leonard.ochieng@email.com", phone: "+254711234567", orders: 5, totalSpent: 1150.50, aiRevenue: 550.00, aiCostSavings: 120.00, aiFeatures: ["Smart Upsell"], status: "Active", dateJoined: "2025-10-25" },
        { id: 13, img: 'https://i.pinimg.com/736x/45/16/06/451606a21ab06742766d285ee461567e.jpg', name: "Miriam Aoko", email: "miriam.aoko@email.com", phone: "+254722345678", orders: 4, totalSpent: 800.00, aiRevenue: 400.00, aiCostSavings: 100.00, aiFeatures: ["Recommendation Engine"], status: "Active", dateJoined: "2025-11-15" },
        { id: 14, img: 'https://i.pinimg.com/1200x/54/fe/47/54fe47995a227368e77f8b2260ef44ce.jpg', name: "Nathan Kimani", email: "nathan.kimani@email.com", phone: "+254733456789", orders: 3, totalSpent: 600.00, aiRevenue: 0.00, aiCostSavings: 50.00, aiFeatures: ["Support Automation"], status: "Inactive", dateJoined: "2025-12-05" },
        { id: 15, img: 'https://i.pinimg.com/736x/6b/7a/9e/6b7a9e13a02752663418e46ba464cc36.jpg', name: "Olivia Njoki", email: "olivia.njoki@email.com", phone: "+254744567890", orders: 7, totalSpent: 1400.00, aiRevenue: 700.00, aiCostSavings: 150.00, aiFeatures: ["Dynamic Pricing","Smart Upsell"], status: "Active", dateJoined: "2025-09-28" }
    ];

    // state to open the customer modal
    const [ showCustomer, setShowCustomer ] = useState(false) // initial state is false meaning the modal is initially closed

    // state to display the selected customer data
    const [ selectedCustomer, setSelectedCustomer ] = useState(null) // initial state is null/empty

    // function to open the customer modal
    const openCustomer = (customer) => {
        setSelectedCustomer(customer)
        setShowCustomer(prev => !prev) // update dynamically
    }


  return (
    <>
        <section
            className='customers-page'
        >
            <h4>Customers</h4>
            
            <div
                className='customer-controls'
            >
                <Search size={18} className='search-icon' />
                
                <input
                    type='text'
                    placeholder='Search name, email, phone'
                    className='customer-search'
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Orders (Count)</th>
                        <th>Total Spent</th>
                        <th>Status</th>
                        {/* <th>AI Revenue</th>
                        <th>AI Cost Savings</th>
                        <th>AI Feature</th> */}
                        <th>Date Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <tr
                            key={customer.id}
                        >
                            <td>{customer.id}</td>
                            <td className='customer-name'>
                                <img 
                                    src={customer.img}
                                    alt={customer.name}
                                    className='customer-image'
                                />

                                {customer.name}
                            </td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.orders}</td>
                            <td>{customer.totalSpent}</td>
                            <td
                                className={
                                    customer.status === "Active" ? "status-active" : "status-inactive" 
                                }
                            >
                                {customer.status}
                            </td>
                            {/* <td>{customer.aiRevenue}</td>
                            <td>{customer.aiCostSavings}</td>
                            <td>{customer.aiFeatures.join(", ") || "-"}</td> */}
                            <td>{customer.dateJoined}</td>
                            <td>
                                <Button name="view" text="View" onClick={() => openCustomer(customer)}/>
                                <Button name="block" text="Block" />
                                <Button name="delete" text="Delete" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        {showCustomer && selectedCustomer && (
            <Customer 
                customer={selectedCustomer} 
                onClick={openCustomer} 
            />
        )}
    </>
  )
}
