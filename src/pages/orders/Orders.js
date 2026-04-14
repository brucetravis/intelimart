import React, { useState } from 'react'
import './Orders.css'
import Button from '../../components/buttons/Button';
import View from '../../components/modals/view/View';
import { useOrders } from '../../contexts/OrdersProvider';

export default function Orders() {

  // get all orders from the provider
  const { orders, loading } = useOrders()


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
        <h4>Orders</h4>
        
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
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date Ordered</th>
              <th>Time Ordered</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.length > 0 ? (
              orders.map((order) => {
                const item = order.items?.[0]

                return (
                  <tr 
                    key={order.OrderId}
                  >
                    <td>
                      {
                        order.OrderId ? (
                          order.OrderId.length > 20 ? order.OrderId.substring(0, 10) +" ...." : order.OrderId
                        ) : "NO ID"
                      }
                    </td>
                    <td>{order.userId.firstName}</td>
                    <td className='order-name'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="order-image"
                      />
                      {item?.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name}
                    </td>
                    <td>{item?.price}</td>
                    <td>{item?.quantity}</td>
                    <td>{order?.updatedAt.split("T")[0]}</td>
                    <td>{order?.updatedAt.split("T")[1].split(".")[0]}</td>

                    <td>
                      <Button 
                        name="view" 
                        text="View" 
                        onClick={() => openView(order)}
                      />
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td 
                  colSpan={7}
                  className='no-orders'
                >
                  {
                    loading ? 'Fetching Orders' : orders?.length === 0 ? 'No Pending Orders' : orders
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {showView && selectedOrder && <View onClick={openView} order={selectedOrder} />}
    </>
  )
}
