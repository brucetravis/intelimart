import React, { useState } from 'react'
import './Orders.css'
import Button from '../../components/buttons/Button';
import View from '../../components/modals/view/View';

export default function Orders() {

  const orders = [
    { id: "ORD-1001", customer: "John Doe", customerImage: "https://i.pravatar.cc/150?img=1", date: "2026-01-20", total: "KES 4,500", status: "Pending" },
    { id: "ORD-1002", customer: "Sarah Kim", customerImage: "https://i.pravatar.cc/150?img=2", date: "2026-01-21", total: "KES 12,000", status: "Paid" },
    { id: "ORD-1003", customer: "Michael Brown", customerImage: "https://i.pravatar.cc/150?img=3", date: "2026-01-22", total: "KES 7,250", status: "Shipped" },
    { id: "ORD-1004", customer: "Amina Hassan", customerImage: "https://i.pravatar.cc/150?img=4", date: "2026-01-22", total: "KES 3,800", status: "Completed" },
    { id: "ORD-1005", customer: "David Wilson", customerImage: "https://i.pravatar.cc/150?img=5", date: "2026-01-23", total: "KES 9,600", status: "Cancelled" },
    { id: "ORD-1006", customer: "Grace Mwangi", customerImage: "https://i.pravatar.cc/150?img=6", date: "2026-01-24", total: "KES 5,400", status: "Pending" },
    { id: "ORD-1007", customer: "Daniel Okafor", customerImage: "https://i.pravatar.cc/150?img=7", date: "2026-01-24", total: "KES 14,300", status: "Paid" },
    { id: "ORD-1008", customer: "Linda Chen", customerImage: "https://i.pravatar.cc/150?img=8", date: "2026-01-25", total: "KES 6,750", status: "Shipped" },
    { id: "ORD-1009", customer: "Peter Adams", customerImage: "https://i.pravatar.cc/150?img=9", date: "2026-01-26", total: "KES 2,900", status: "Completed" },
    { id: "ORD-1010", customer: "Mary Johnson", customerImage: "https://i.pravatar.cc/150?img=10", date: "2026-01-26", total: "KES 11,500", status: "Pending" }
  ];

  // An array of filters
  const filters = ["All", "Pending", "Paid", "Shipped", "Completed", "Cancelled"]

  // state to dipslay the view modal
  const [ showView, setShowView ] = useState(false) // initial state is false
  
  // function to open the View modal when clicked
  const openView = () => {
    //setShowView(true) // update to true
    setShowView(prev => !prev) // update to true
  }

  return (
    <>
      <section
        className='orders-page'
      >
        
        <div
          className='orders-controls'
        >
          <div
            className='orders-search'
          >
            <input
              type='text'
              placeholder='Search by order ID or customer'
              
            />
          </div>

          <div
            className='filters'
          >
            {filters.map((filter, idx) => (
              <div
                key={idx}
                className='filter-controls'
              >
                <input 
                  type='checkbox'
                  // checked={true}
                />
                {filter}
              </div>
            ))}
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr 
                key={order.id}
              >
                <td>{order.id}</td>
                <td
                  className='orders-name'
                >
                  <img 
                    src={order.customerImage}
                    alt={order.id}
                  />

                  {order.customer}
                </td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td
                  className={
                    order.status === "Pending" ? "status status-pending":
                    order.status === "Paid" ? "status status-paid":
                    order.status === "Shipped" ? "status status-shipped":
                    order.status === "Completed" ? "status status-completed":
                    order.status === "Cancelled" ? "status status-cancelled": ""
                  }
                >
                  {order.status}
                </td>
                <td>
                  <Button name="view" text="View" onClick={openView}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {showView && <View onClick={openView} />}
    </>
  )
}
