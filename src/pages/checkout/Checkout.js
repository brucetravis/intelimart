import React, { useState } from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router'

export default function Checkout() {

    //  state to switch accordingly
    const [ checkoutSlide, setCheckoutSlide ] = useState('delivery')

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
                    key={t.id}
                    onClick={() => setCheckoutSlide(t.link)}
                    style={{ cursor: 'pointer' }}
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

                                <div className="row">
                                <input type="text" placeholder="City"/>
                                <input type="text" placeholder="Postal Code"/>
                                </div>
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

                {checkoutSlide === 'payment' && (
                    <>
                        {/* PAYMENT METHOD */}
                        <div className="checkout-card">
                            <h3>Payment Method</h3>

                            <label className="radio-option">
                                <input type="radio" name="payment"/>
                                Credit / Debit Card
                            </label>

                            <label className="radio-option">
                                <input type="radio" name="payment"/>
                                Mobile Money
                            </label>

                            <label className="radio-option">
                                <input type="radio" name="payment"/>
                                PayPal
                            </label>

                            {/* CARD DETAILS */}
                            <div className="card-details">
                                <input type="text" placeholder="Card Number"/>

                                <div className="row">
                                <input type="text" placeholder="Expiry Date"/>
                                <input type="text" placeholder="CVV"/>
                                </div>

                                <input type="text" placeholder="Name on Card"/>
                            </div>
                        </div>
                    </>
                )}
            </div>



            {/* ORDER SUMMARY */}
            <div className="checkout-right">

                <h3>Order Summary</h3>

                <div className="summary-product">
                    <img src="/product.jpg" alt="product"/>
                    <div>
                        <p>Product Name</p>
                        <span>$40</span>
                    </div>
                </div>

                <div className="summary-line">
                    <p>Subtotal</p>
                    <span>$40</span>
                </div>

                <div className="summary-line">
                    <p>Shipping</p>
                    <span>$5</span>
                </div>

                <div className="summary-total">
                    <p>Total</p>
                    <span>$45</span>
                </div>

                <button className="pay-btn">
                    Complete Order
                </button>

            </div>
        </div>
    </section>
  )
}