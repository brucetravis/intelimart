import React, { useState } from 'react'
import './Orders.css'
import Button from '../../components/buttons/Button';
import View from '../../components/modals/view/View';

export default function Orders() {

  const orders = [
    {
      orderId: "ORD-1001",
      date: "2026-01-20",
      status: "Pending",
      customer: { name: "John Doe", email: "john@example.com", image: "https://i.pravatar.cc/150?img=1" },
      items: [
        { productName: "iPhone Case", quantity: 2, price: 2000 },
        { productName: "Charger", quantity: 1, price: 500 }
      ],
      summary: { subtotal: 4000, shipping: 500, total: 4500 },
      aiMetrics: { insight: "Payment delay risk", revenueImpact: 200, costReduction: 50 }
    },
    {
      orderId: "ORD-1002",
      date: "2026-01-21",
      status: "Paid",
      customer: { name: "Sarah Kim", email: "sarah@example.com", image: "https://i.pravatar.cc/150?img=2" },
      items: [{ productName: "Laptop", quantity: 1, price: 12000 }],
      summary: { subtotal: 12000, shipping: 0, total: 12000 },
      aiMetrics: { insight: "High-value customer", revenueImpact: 500, costReduction: 0 }
    },
    {
      orderId: "ORD-1003",
      date: "2026-01-22",
      status: "Shipped",
      customer: { name: "Michael Brown", email: "michael@example.com", image: "https://i.pravatar.cc/150?img=3" },
      items: [
        { productName: "Headphones", quantity: 1, price: 3500 },
        { productName: "Speaker", quantity: 1, price: 3750 }
      ],
      summary: { subtotal: 7250, shipping: 0, total: 7250 },
      aiMetrics: { insight: "Likely repeat buyer", revenueImpact: 150, costReduction: 20 }
    },
    {
      orderId: "ORD-1004",
      date: "2026-01-22",
      status: "Completed",
      customer: { name: "Amina Hassan", email: "amina@example.com", image: "https://i.pravatar.cc/150?img=4" },
      items: [{ productName: "Tablet", quantity: 1, price: 3800 }],
      summary: { subtotal: 3800, shipping: 0, total: 3800 },
      aiMetrics: { insight: "Smooth fulfillment", revenueImpact: 80, costReduction: 10 }
    },
    {
      orderId: "ORD-1005",
      date: "2026-01-23",
      status: "Cancelled",
      customer: { name: "David Wilson", email: "david@example.com", image: "https://i.pravatar.cc/150?img=5" },
      items: [{ productName: "Smartwatch", quantity: 2, price: 4800 }],
      summary: { subtotal: 9600, shipping: 0, total: 9600 },
      aiMetrics: { insight: "High cancellation risk", revenueImpact: 0, costReduction: 0 }
    },
    {
      orderId: "ORD-1006",
      date: "2026-01-24",
      status: "Pending",
      customer: { name: "Grace Mwangi", email: "grace@example.com", image: "https://i.pravatar.cc/150?img=6" },
      items: [{ productName: "Monitor", quantity: 1, price: 5400 }],
      summary: { subtotal: 5400, shipping: 0, total: 5400 },
      aiMetrics: { insight: "Low stock dependency", revenueImpact: 100, costReduction: 30 }
    },
    {
      orderId: "ORD-1007",
      date: "2026-01-24",
      status: "Paid",
      customer: { name: "Daniel Okafor", email: "daniel@example.com", image: "https://i.pravatar.cc/150?img=7" },
      items: [
        { productName: "Keyboard", quantity: 2, price: 4300 },
        { productName: "Mouse", quantity: 1, price: 3700 }
      ],
      summary: { subtotal: 14300, shipping: 0, total: 14300 },
      aiMetrics: { insight: "Upsell opportunity", revenueImpact: 250, costReduction: 70 }
    },
    {
      orderId: "ORD-1008",
      date: "2026-01-25",
      status: "Shipped",
      customer: { name: "Linda Chen", email: "linda@example.com", image: "https://i.pravatar.cc/150?img=8" },
      items: [{ productName: "Camera", quantity: 1, price: 6750 }],
      summary: { subtotal: 6750, shipping: 0, total: 6750 },
      aiMetrics: { insight: "High return probability", revenueImpact: 120, costReduction: 25 }
    },
    {
      orderId: "ORD-1009",
      date: "2026-01-26",
      status: "Completed",
      customer: { name: "Peter Adams", email: "peter@example.com", image: "https://i.pravatar.cc/150?img=9" },
      items: [{ productName: "Printer", quantity: 1, price: 2900 }],
      summary: { subtotal: 2900, shipping: 0, total: 2900 },
      aiMetrics: { insight: "Low margin order", revenueImpact: 60, costReduction: 10 }
    },
    {
      orderId: "ORD-1010",
      date: "2026-01-26",
      status: "Pending",
      customer: { name: "Mary Johnson", email: "mary@example.com", image: "https://i.pravatar.cc/150?img=10" },
      items: [{ productName: "Desk Lamp", quantity: 2, price: 5750 }],
      summary: { subtotal: 11500, shipping: 0, total: 11500 },
      aiMetrics: { insight: "Delayed fulfillment risk", revenueImpact: 200, costReduction: 50 }
    }
  ];


  // An array of filters
  const filters = ["All", "Pending", "Paid", "Shipped", "Completed", "Cancelled"]

  // state to dipslay the view modal
  const [ showView, setShowView ] = useState(false) // initial state is false

  // state to hold the current order data
  const [ selectedOrder, setSelectedOrder ] = useState(null) // initial state is empty or null
  
  // function to open the View modal when clicked
  const openView = (order) => {
    setSelectedOrder(order)
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
              <th>AI Insight</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr 
                key={order.orderId}
              >
                <td>{order.orderId}</td>
                <td
                  className='orders-name'
                >
                  <img 
                    src={order.customer.image}
                    alt={order.id}
                  />

                  {order.customer.name}
                </td>
                <td>{order.date}</td>
                <td>{order.summary.total}</td>
                <td>{order.aiMetrics.insight}</td>
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
                  <Button 
                    name="view" 
                    text="View" 
                    onClick={() => openView(order)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {showView && selectedOrder && <View onClick={openView} order={selectedOrder} />}
    </>
  )
}
