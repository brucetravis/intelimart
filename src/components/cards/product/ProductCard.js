import React from 'react'
import './ProductCard.css'
import Button from '../../buttons/Button'

export default function ProductCard({ productCategory, productName, productPrice, productImage }) {
  return (
    <div className="product-card">

        <div className="product-image">
            <img src={productImage} alt={productName}/>
        </div>

        <div className="product-details">

            <p className="product-category">{productCategory}</p>

            <h5 className="product-name">{productName}</h5>

            <div className="product-bottom">
                <Button name="add-to-cart" text="Add to Cart"/>
                <p className="product-price">${productPrice}</p>
            </div>

        </div>

    </div>
  )
}
