import React, { useState } from 'react'
import './Customers.css'
import Button from '../../components/buttons/Button';
import { Search } from 'lucide-react';
import Customer from '../../components/modals/customer/Customer';
import customers from '../../data/customers/Users';

export default function Customers() {

    // state to open the customer modal
    const [ showCustomer, setShowCustomer ] = useState(false) // initial state is false meaning the modal is initially closed

    // state to display the selected customer data
    const [ selectedCustomer, setSelectedCustomer ] = useState(null) // initial state is null/empty

    // function to open the customer modal
    const openCustomer = (customer) => {
        setSelectedCustomer(customer)
        setShowCustomer(true) // update dynamically
    }

    // function to close the modal
    const closeCustomer = () => {
        setShowCustomer(false)
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
                                <Button name="view" text="View" clickFunction={() => openCustomer(customer)}/>
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
                onClick={closeCustomer} 
            />
        )}
    </>
  )
}
