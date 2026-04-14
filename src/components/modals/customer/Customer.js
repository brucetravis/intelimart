import React from 'react'
import './Customer.css'
import { XCircle } from 'lucide-react'
import Info from '../../info/Info'
import { useAuth } from '../../../contexts/AuthProvider'

export default function Customer({ customer, onClick }) {
    // get the decoded decodedToken from local storage
    const { decodedToken } = useAuth()

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
                    src={customer?.img || "https://i.pinimg.com/1200x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg"}
                    alt={customer?.firstName}
                    className={decodedToken?.firstName === customer?.firstName ? "borderActive" : "borderInactive" }
                />

                {/* <h2>{customer.name}</h2> */}

            </div>

            

            <div
                className='grid'
            >   
                <div>
                    <h3>Customer</h3>
                    <Info label="Name" value={customer?.firstName} individual={customer} />
                    <Info label="Email" value={customer?.email} individual={customer} />
                    <Info label="Phone" value={customer?.phone || '+254710000000'} individual={customer} />
                    <Info label="role" value={customer?.role} individual={customer} />
                    <Info label="Status" value={decodedToken?.firstName === customer?.firstName ? "active" : "inactive" } individual={customer} />

                    <Info label="Joined" value={new Date(customer.createdAt.split(" ")[0]).toDateString()} />
                </div>
            </div>
        </div>
    </section>
  )
}
