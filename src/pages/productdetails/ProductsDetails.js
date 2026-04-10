import React, { useEffect } from 'react'
import './ProductsDetails.css'
import { useParams } from 'react-router'
import { useProduct } from '../../contexts/ProductProvider'
import { useCart } from '../../contexts/CartProvider'
import { usePayment } from '../../contexts/PaymentProvider'

export default function ProductsDetails({ total }) {
    // Get the prodcuts from the context
    const { products } = useProduct()
    const { addToCart } = useCart()

    const { id } = useParams()
    const product = products?.find((p) => p._id === id)

    // get the payment function from the provider
    const { payment } = usePayment()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    if (!product) return <p>Product Not Found</p>

  return (
    <section 
        className='product-details-page'
    >
        <div className='left-column'>
            <div className="image-wrapper">
                <img 
                    src={`${product.image}`}
                    alt={product.name}
                />
            </div>
        </div>
        
        <div className='right-column'>
            <span className='product-category'>{product.category}</span>
            <h1 className='product-title'>{product.name}</h1>
            <p className='product-description'>{product.description}</p>
            
            <div className='product-price'>
                <p>PRICE: <span>${product.price}</span></p>
            </div>

            <div className='product-quantity'>
                <p>Quantity: <span>${product.quantity}</span></p>
            </div>

            <div className='product-actions'>
                <button 
                    className='add-to-cart'
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>

                <button 
                    className='buy-now'
                    onClick={() => payment(total)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    </section>
  )
}
