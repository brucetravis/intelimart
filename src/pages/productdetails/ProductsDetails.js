import React, { useEffect } from 'react'
import './ProductsDetails.css'
import { useParams } from 'react-router'
import { useProduct } from '../../contexts/ProductProvider'

export default function ProductsDetails() {
    // Get the prodcuts from the context
    const { products } = useProduct()

    const { id } = useParams()
    const product = products.find((p) => p._id === id)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })

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
                PRICE: ${product.price}
            </div>

            <div className='product-actions'>
                <button className='add-to-cart'>Add to Cart</button>
                <button className='buy-now'>Buy Now</button>
            </div>
        </div>
    </section>
  )
}
