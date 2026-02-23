import React, { useEffect } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import { products } from '../../data/products/Products';
import Product from '../../components/cards/product/Product';
import Sales from '../../components/adverts/sale/Sale';

export default function Shop() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  })

  return (
    <section className='shop-page'>
      <div>
        <Sales />
      </div>

      <div className='shop-products'>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/users/productdetails/${product.id}`}
          >
            <Product
              productCategory={product.productCategory} 
              productName={product.productName} 
              productPrice={product.productPrice} 
              productPath={product.productPath}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
