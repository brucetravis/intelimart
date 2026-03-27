import React from 'react'
import './ProductCard.css'
import { Star } from 'lucide-react'

export default function ProductCard({ productCategory, productName, productPrice, productImage }) {
  return (
    <div 
        className='product-card'
    >
        <img 
            src={`${productImage}`}
            alt={productName}
        />

        <div className='product-details'>
            <div className='product-text'>
                <p>{productCategory}</p>
                <h6>{productName}</h6>
            </div>

            <div className='product-tag'>
                <div className='stars'>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star 
                            key={i}
                            size={16}
                            fill={i <= 4 ? "#facc15" : "none"}
                            stroke="#facc15"
                        />
                    ))}
                </div>
                <p>${productPrice}</p>
            </div>
        </div>
    </div>
  )
}
