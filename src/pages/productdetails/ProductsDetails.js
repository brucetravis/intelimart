import React, { useEffect } from 'react'
import './ProductsDetails.css'
import { useParams } from 'react-router'
import { products } from '../../data/products/Products'

export default function ProductsDetails() {
    const { id } = useParams()
    const product = products.find((p) => p.id === parseInt(id))

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })

    if (!product) return <p>Product Not Found</p>

  return (
    <section 
        className='product-details-page'
    >
        <div className='left-column'>
            <img 
                src={`${product.productPath}`}
                alt={product.productName}
            />
        </div>
        
        <div className='right-column'>
            <h6>{product.productCategory}</h6>
            <h4>{product.productName}</h4>
            <h5>{product.productPrice}</h5>
        </div>
    </section>
  )
}
