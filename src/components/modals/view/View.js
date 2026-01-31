import React from 'react'
import ReactDOM from "react-dom"
import './View.css'
import { XCircle } from 'lucide-react'

export default function View({ order, onClick }) {
    // if there is no order return null
    if (!order) return null
    
  return ReactDOM.createPortal (
    <section
        className='view-modal'
    >
        <div
            className='view-card'
        >
            <XCircle 
                size={20} 
                stroke="#ff2b14"
                className='close-btn'
                onClick={onClick}
            />

            <h4 className='text-center'>{order.orderId}</h4>

            <div 
                className='view-section'
            >
                <h3>Order Info</h3>

                <div className="info-group">
                    <div>
                        <span className="label">Order ID</span>
                        <span>{order.orderId}</span>
                    </div>

                    <div>
                        <span className="label">Date</span>
                        <span>{order.date}</span>
                    </div>

                    <div>
                        <span className="label">Status</span>
                        <span>{order.status}</span>
                    </div>
                </div>
            
            </div>

            <div className="view-section">
                <h3>Customer Info</h3>

                <div className="info-stack">
                    <div>
                        <span className="label">Name</span>
                        <span>{order.customer.name}</span>
                    </div>

                    <div>
                        <span className="label">Email</span>
                        <span>{order.customer.email}</span>
                    </div>
                </div>
            </div>

            <div className="view-section">
                <h3>Items</h3>

                <div className="items-list">
                    {order.items.map((item) => (
                        <div 
                            key={item.id}
                            className="item"
                        >
                            <span>{item.productName}</span>
                            <span>{item.quantity}</span>
                            <span>KES {item.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="view-section summary">
                <div>
                    <span className='title'>Subtotal</span>
                    <span>KES {order.summary.subtotal}</span>
                </div>

                <div>
                    <span className='title'>Shipping</span>
                    <span>KES {order.summary.shipping}</span>
                </div>

                <div className="total">
                    <span>Total</span>
                    <span>KES {order.summary.total}</span>
                </div>
            </div>

            <div className="view-section">
                <h3>AI feature Impact</h3>

                <div
                    className='ai-info-stack'
                >
                    <div>
                        <span className='title'>Revenue Impact</span>
                        <span>{order.aiMetrics.revenueImpact}</span>
                    </div>

                    <div>
                        <span className='title'>Cost Reduction</span>
                        <span>{order.aiMetrics.costReduction}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>, 
    document.body
  )
}
