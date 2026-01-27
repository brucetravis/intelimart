import React from 'react'
import './Cart.css'
import { Minus, Plus } from 'lucide-react';

export default function Cart() {

  const products = [
    { id: 1, image: "https://i.pinimg.com/736x/dc/22/35/dc2235bbb7c5ae968a36e4fd9f3e1941.jpg", name: "iPhone 14 Pro", sku: "IP14P-BLK-128", category: "Smartphones", price: 999, stock: 25, status: "Active" },
    { id: 2, image: "https://i.pinimg.com/736x/5d/dd/cf/5dddcffd34880bf32202cd71ebb60066.jpg", name: "Samsung Galaxy S23", sku: "SGS23-WHT-256", category: "Smartphones", price: 899, stock: 15, status: "Active" },
    { id: 3, image: "https://i.pinimg.com/736x/28/e1/52/28e152ed9070c3990b00b4b21c38ff10.jpg", name: "MacBook Air M2", sku: "MBA-M2-512", category: "Laptops", price: 1299, stock: 10, status: "Active" },
    { id: 4, image: "https://i.pinimg.com/736x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg", name: "Dell XPS 13", sku: "DX13-SLV-256", category: "Laptops", price: 1199, stock: 5, status: "Active" },
    { id: 5, image: "https://i.pinimg.com/736x/3a/24/ab/3a24ab2b54c1c982b08f10fb010ce4f2.jpg", name: "Sony WH-1000XM5", sku: "SONY-HXM5-BLK", category: "Headphones", price: 399, stock: 30, status: "Out of Stock" },
    { id: 6, image: "https://i.pinimg.com/736x/da/7c/7b/da7c7b293c96afd6355cf78f257c10f0.jpg", name: "Bose QC45", sku: "BOSE-QC45-WHT", category: "Headphones", price: 349, stock: 20, status: "Active" },
    { id: 7, image: "https://i.pinimg.com/1200x/e5/8b/90/e58b90209a043d271ccb5cd59a92a84b.jpg", name: "iPad Pro 11", sku: "IPAD-PRO-11-256", category: "Tablets", price: 799, stock: 12, status: "Active" },
    { id: 8, image: "https://i.pinimg.com/1200x/3a/c6/95/3ac6953519816be2b1736f2da8e39fb0.jpg", name: "Samsung Galaxy Tab S8", sku: "SGT-S8-128", category: "Tablets", price: 699, stock: 8, status: "disabled" },
    { id: 9, image: "https://i.pinimg.com/1200x/1b/59/45/1b594506f1cfd747c67ddc68e05f0fa1.jpg", name: "Logitech MX Master 3", sku: "LOG-MX3", category: "Accessories", price: 99, stock: 50, status: "Active" },
    { id: 10, image: "https://i.pinimg.com/736x/82/7d/8b/827d8b76f770db34328bf6c75f6dee9f.jpg", name: "Apple Watch Series 9", sku: "AW-S9-44", category: "Wearables", price: 499, stock: 18, status: "Active" }
  ];

  return (
    <section
      className='cart-page'
    >
      <div
        className='checkout-level'
      >
        <p className='level active'>Cart</p>

        <p className='level'>Shipping</p>
        
        <p className='level'>Payment</p>

      </div>

      <div
        className='cart-page-content'
      >
        <div
          className='cart-products'
        >
          <h4>My Cart (10)</h4>

          <div
            className='product-items'
          >
            {products.map((product) => (
              <div
                className='item'
                key={product.id}
              >
                <div
                  className='cart-prd-description'
                >
                  <div className='cart-prd-img'>
                    <img 
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <div className='cart-prd-info'>
                    <p className='card-prd-category'>{product.category}</p>
                    <p className='card-prd-name'>{product.name}</p>
                    <p className='card-prd-price'>{product.price}</p>
                  </div>
                </div>
                
                <div
                  className='card-actions'
                >
                  <button>
                    <Minus size={24} stroke='#333' />
                  </button>

                  <input 
                    type='number'
                    value="1"
                    disabled
                  />

                  <button>
                    <Plus size={24} stroke='#333' />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div
          className='billing'
        >
          <div
            className='title'
          >
            <h4>YOUR ORDER</h4>
          </div>

          <div
            className='title'
          >
            <h4>Subtotal (10 items)</h4>

            <p>$12000</p>
          </div>

          <div
            className='title-delivery'
          >
            <h4>Delivery</h4>

            <div
              className='delivery-content'
            >
              <div
                className='delivery-method d-flex align-items-center gap-1'
              >
                <input 
                  type='checkbox'
                  // checked={false}
                />
                Delivery
              </div>

              <div
                className='delivery-method d-flex align-items-center gap-1'
              >
                <input 
                  type='checkbox'
                  // checked={false} 
                />
                Pick up
              </div>
              
            </div>
          </div>

          <div
            className='title'
          >
            <h4>Service Fee</h4>

            <p>$600</p>
          </div>

          <div
            className='title'
          >
            <h4>Tax</h4>

            <p>5%</p>
          </div>

          <div
            className='title'
          >
            <h4>Total Payable</h4>

            <p>$15000</p>
          </div>
          
          <button
            className='billing-button'
          >
            Proceed to checkout
          </button>
            
        </div>

      </div>
    
    </section>
  )
}
