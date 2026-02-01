import React from 'react'
import ReactDOM from "react-dom"
import './View.css'
import { XCircle } from 'lucide-react'

export default function View({ onClick }) {
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

            <h4 className='text-center'>ORD-1001</h4>

            <div 
                className='view-section'
            >
                <h3>Order Info</h3>

                <div className="info-group">
                    <div>
                        <span className="label">Order ID</span>
                        <span>ORD-1001</span>
                    </div>

                    <div>
                        <span className="label">Date</span>
                        <span>2026-01-20</span>
                    </div>

                    <div>
                        <span className="label">Status</span>
                        <span>Pending</span>
                    </div>
                </div>
            
            </div>

            <div className="view-section">
                <h3>Customer Info</h3>

                <div className="info-stack">
                    <div>
                        <span className="label">Name</span>
                        <span>John Doe</span>
                    </div>

                    <div>
                        <span className="label">Email</span>
                        <span>johndoe@email.com</span>
                    </div>
                </div>
            </div>

            <div className="view-section">
                <h3>Items</h3>

                <div className="items-list">
                    <div className="item">
                        <span>iPhone Case</span>
                        <span>Qty: 2</span>
                        <span>KES 2,000</span>
                    </div>

                    <div className="item">
                        <span>Charger</span>
                        <span>Qty: 1</span>
                        <span>KES 500</span>
                    </div>
                </div>
            </div>

            <div className="view-section summary">
                <div>
                    <span className='title'>Subtotal</span>
                    <span>KES 4,000</span>
                </div>

                <div>
                    <span className='title'>Shipping</span>
                    <span>KES 500</span>
                </div>

                <div className="total">
                    <span>Total</span>
                    <span>KES 4,500</span>
                </div>
            </div>
        </div>
    </section>, 
    document.body
  )
}
