import React, { useEffect, useState } from 'react'
import './ProductsDetails.css'
import { useParams } from 'react-router'
import { useProduct } from '../../contexts/ProductProvider'
import { useCart } from '../../contexts/CartProvider'
import { usePayment } from '../../contexts/PaymentProvider'

export default function ProductsDetails({ total }) {
    // Get the prodcuts from the context
    const { products, count, increaseQuantity, decreaseQuantity } = useProduct()
    const { addToCart } = useCart()

    const { id } = useParams()
    const product = products?.find((p) => p._id === id)

    const sizes = ["S", "M", "L", "XL", "XXL"]

    // state to track the selected size
    const [ selectedSize, setSelectedSize ] = useState(null)

    const [ selectedColor, setSelectedColor ] = useState(null)

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
            <div className='product-price'>
                <p>PRICE: <span>${product.price}</span></p>
            </div>
            
            <p className='product-description'>{product.description}</p>

            <div className='product-sizes'>
                <h6 className='m-0'>Size</h6>

                <div className='sizes'>
                    {sizes.map((s, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedSize(s)}
                            className={`size-btn ${ selectedSize === s ? "active" : ""}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                
                <h6 className='m-0'>Color</h6>
                <div className='colors'>
                    <button
                        onClick={() => setSelectedColor(product.color)}
                        className={`color-btn ${ selectedColor === product.color ? "active" : ""}`}
                    >
                        <p 
                            className={`color-tag m-0`}
                            style={{
                                backgroundColor: `${product.shade}`
                            }}
                        ></p> 
                        <p className="m-0">{product.color}</p>
                    </button>
                </div>
            </div>

            <div className="quantity-section">
                <button
                    onClick={decreaseQuantity}
                >
                    -
                </button>
                <p>{count}</p>
                <button
                    onClick={increaseQuantity}
                >
                    +
                </button>
            </div>

            <div className='product-actions'>
                <button 
                    className='add-to-cart'
                    onClick={() => {
                        if (!product) return
                        addToCart(product)
                    }}
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
