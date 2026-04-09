import React, { useState } from 'react'
import './Checkout.css'
import { useNavigate, useParams } from 'react-router'
import { useProduct } from '../../contexts/ProductProvider'

export default function Checkout() {

    // get the specific user for the checkout
    const { id } = useParams()

    // get the user

    //  state to switch accordingly
    const [ checkoutSlide, setCheckoutSlide ] = useState('delivery')

    const { subTotal, total, shipping } = useProduct()

    // array to store the nav texts
    const navTexts = [
        { id: 1, text: 'Delivery', link: 'delivery' },
        { id: 2, text: 'Payment', link: 'payment' }
    ]
    
    // function to navigate to another page
    const navigate = useNavigate()

  return (
    <section className="checkout-page">
        <h4>Checkout</h4>

        <div
            className='d-flex align-items-center gap-3'
        >
            <h6 
                onClick={() => navigate('/users/shop')}
                style={{ cursor: 'pointer' }}
            >
                Shop
            </h6>

            {navTexts.map((t, i) => (
                <h6
                    key={i}
                    onClick={() => setCheckoutSlide(t.link)}
                    style={{ cursor: 'pointer' }}
                    className={t.link === checkoutSlide ? "active" : ""}
                >
                    {t.text}
                </h6>
            ))}
        </div>

        <div className='checkout-container'>
            <div className="checkout-left">
                {/* SHIPPING ADDRESS */}
                
                {checkoutSlide === 'delivery' && (
                    <>
                        <div className="checkout-card">
                            <h3>Shipping Address</h3>

                            <form className="checkout-form">
                                <input type="text" placeholder="Full Name"/>
                                <input type="text" placeholder="Phone Number"/>
                                <input type="text" placeholder="Street Address"/>

                            </form>
                        </div>

                        {/* DELIVERY METHOD */}
                        <div className="checkout-card">
                            <h3>Delivery Method</h3>

                            <label className="radio-option">
                                <input type="radio" name="delivery"/>
                                Standard Delivery (3-5 days) — $5
                            </label>

                            <label className="radio-option">
                                <input type="radio" name="delivery"/>
                                Express Delivery (1-2 days) — $10
                            </label>
                        </div>
                    </>
                )}
            </div>



            {/* ORDER SUMMARY */}
            <div className="checkout-right">

                <h3>Order Summary</h3>

                <div className="summary-line">
                    <p>Subtotal</p>
                    <span>${subTotal}</span>
                </div>

                <div className="summary-line">
                    <p>Shipping</p>
                    <span>${shipping}</span>
                </div>

                <div className="summary-total">
                    <p>Total</p>
                    <span>${total}</span>
                </div>

                <button className="pay-btn">
                    Complete Order
                </button>

            </div>
        </div>
    </section>
  )
}