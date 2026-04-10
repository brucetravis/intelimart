import React from 'react'
import './Cart.css'
import { X, XIcon } from 'lucide-react'
import { motion } from "framer-motion"
import Button from '../buttons/Button'
import { useCart } from '../../contexts/CartProvider'
import { usePayment } from '../../contexts/PaymentProvider'
import ProductsDetails from '../../pages/productdetails/ProductsDetails'

export default function Cart({ onClose }) {

    // get the cart state
    const { 
        isCartProducts, removeCartProduct, subTotal, shipping, tax, discount, total
    } = useCart()
    
    const { payment } = usePayment()

  return (
    <>
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='cart'
        >
            <div className='cart-content'>
                <X 
                    size={25}
                    stroke="#ff0000"
                    className='close-btn'
                    onClick={onClose}
                />

                <div className='cart-title'>
                    <h4>Shopping Cart</h4>
                    <h6>({isCartProducts.length})</h6>
                </div>

                <div className='products-content'>

                    <div className='cart-products'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {isCartProducts.length === 0 ? (
                                    <tr className='cart-empty'>
                                        <td colSpan={4}>Cart Empty</td>
                                    </tr>
                                ) : (
                                    isCartProducts.map((p) => (
                                        <tr 
                                            className='product'
                                            key={p._id}
                                        >
                                            <td className='product-cell'>
                                                <img 
                                                    src={p.image}
                                                    alt={p.name}
                                                />

                                                {p.name}
                                            </td>

                                            <td className='price'>${p.price}</td>
                                                
                                            <td>{p.quantity || 1}</td>
                                            
                                            <td className='total'>
                                                ${p.price * (p.quantity || 1)}
                                                <XIcon 
                                                    size={25}
                                                    stroke="#b1aeae"
                                                    className='delete-btn'
                                                    onClick={() => removeCartProduct(p.productId || p._id)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='cart-checkout'>
                        <div className='title'>
                            <h4>ORDER SUMMARY</h4>
                        </div>

                        <div className='tally'>
                            <div className='tally-item'>
                                <h5>Items</h5>

                                <h6>{isCartProducts.length}</h6>
                            </div>

                            <div className='tally-item'>
                                <h5>Sub Total</h5>

                                <h6>${subTotal.toLocaleString()}</h6>
                            </div>

                            <div className='tally-item'>
                                <h5>Shipping</h5>
                                <h6>${shipping}.00</h6>
                            </div>

                            <div className='tally-item'>
                                <h5>Taxes</h5>
                                <h6>${tax}.00</h6>
                            </div>

                            <div className='tally-item'>
                                <h5>Coupon Discount</h5>
                                <h6>-${discount}.00</h6>
                            </div>
                        </div>

                        <div className='tally-total'>
                            <h5>Total</h5>
                            <h6>${subTotal > 0 ? (
                                total.toLocaleString()
                            ) : (
                                0
                            )}</h6>
                        </div>
                        
                        <Button 
                            name="checkout-btn"  
                            text="Checkout"
                            clickFunction={() => payment(subTotal)}
                        />
                    </div>
                </div>
            </div>
        </motion.div>

        <ProductsDetails total={subTotal} />
    </>
  )
}
