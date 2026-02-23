import React from 'react'
import './Customer.css'
import { XCircle } from 'lucide-react'
import Info from '../../info/Info'

export default function Customer({ customer, onClick }) {
    // if there is no customer return null
    if (!customer) return null

  return (
    <section
        className='customer-modal'
    >

        <div
            className='customer-card'
        >
            <XCircle 
                size={20}
                stroke="#ff2b14"
                className='close-btn'
                onClick={onClick}
            />

            <div
                className='header'
            >
                <img 
                    src={customer.img}
                    alt={customer.name}
                    className={customer?.status === "Active" ? "borderActive" : "borderInactive" }
                />

                {/* <h2>{customer.name}</h2> */}

            </div>

            

            <div
                className='grid'
            >   
                <div>
                    <h3>Customer</h3>
                    <Info label="Name" value={customer.name} individual={customer} />
                    <Info label="Email" value={customer.email} individual={customer} />
                    <Info label="Phone" value={customer.phone} individual={customer} />
                    <Info label="Status" value={customer.status} individual={customer} />

                    <Info label="Joined" value={new Date(customer.dateJoined).toDateString()} />
                </div>

                <div>
                    <h3>Orders</h3>
                    
                    <Info label="Orders" value={customer.orders} />

                    <Info 
                        label="Total spent"
                        value={`KES ${customer.totalSpent.toLocaleString()}`}
                    />
                </div>


                <div
                    className='ai'
                >
                    <h3>AI Impact</h3>
                    
                    <Info label="Revenue" value={`KES ${customer.aiRevenue}`} />
                    <Info label="Savings" value={`KES ${customer.aiCostSavings}`} />


                    <div className='tags'>
                        {customer.aiFeatures?.map((f, i) => (
                            <span 
                                key={i}
                                className='tag'
                            >
                                {f}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
