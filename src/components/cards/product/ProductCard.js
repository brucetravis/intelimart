import React from 'react'
import './ProductCard.css'
import Button from '../../buttons/Button'
import { EyeIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../../contexts/CartProvider'
import { useProduct } from '../../../contexts/ProductProvider'

export default function ProductCard({ productCategory, productName, productPrice, productImage, productId }) {

    // function to navigate to another page
    const navigate = useNavigate()

    // function to lead to the product details page
    const handleNavigation = (id) => {
        navigate(`/users/productdetails/${id}`)
    }

    const { products } = useProduct()

    // get the function to add a product to cart
    const { addToCart } = useCart()

    const product = products?.find((p) => p._id === productId)

  return (
    <div className="product-card">

        <div className="product-image">
            <img src={productImage} alt={productName}/>
        </div>

        <div className="product-details">

            <p className="product-category">{productCategory}</p>

            <h5 className="product-name">{productName}</h5>

            <p className="product-price">${productPrice}</p>

            <div className="product-bottom">
                <Button 
                    name="add-to-cart" 
                    text="Add to Cart"
                    clickFunction={() => {
                        if (!product) return
                        addToCart(product)
                    }}
                />
                
                <EyeIcon 
                    size={24}
                    stroke="#333"
                    className='view-product'
                    onClick={() => handleNavigation(productId)}
                />
            </div>

        </div>

    </div>
  )
}
