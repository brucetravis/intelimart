import React, { useEffect, useState } from 'react'
import './PaymentSuccess.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PaymentSuccess() {
  const navigate = useNavigate()
  const { search } = useLocation()

  const reference = new URLSearchParams(search).get('reference')

  const [status, setStatus] = useState('loading') 
  const [data, setData] = useState(null)

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setStatus('failed')
        return
      }

      try {
        const res = await axios.get(
          `http://localhost:5000/verify-payment/${reference}`
        )

        setData(res.data.data)
        setStatus('success')
      } catch (err) {
        setStatus('failed')
      }
    }

    verifyPayment()
  }, [reference])

  // const isSuccess = status === 'success'

  return (
    <main className='payment-success-page'>
      <div className='card'>

        {status === 'loading' && (
          <h2>Verifying payment...</h2>
        )}

        {status === 'success' && (
          <>
            <h1 className='success'>Payment Successful</h1>
            <p>Your payment was completed successfully</p>

            <p className='meta'>
              Reference: {reference}
            </p>

            {data?.amount && (
              <p className='meta'>
                Amount: {data.amount}
              </p>
            )}

            <p>Your order is being processed</p>
          </>
        )}

        {status === 'failed' && (
          <>
            <h1 className='failed'>Payment Failed</h1>
            <p>Payment was not completed or could not be verified</p>

            <button
              className='action-btn'
              onClick={() => navigate('/users/shop')}
            >
              Try Again
            </button>
          </>
        )}

      </div>
    </main>
  )
}