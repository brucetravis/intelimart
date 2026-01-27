import React from 'react'
import './Shop.css'
import { Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Shop() {

    const products = [
        { id: 1, image: "https://i.pinimg.com/736x/dc/22/35/dc2235bbb7c5ae968a36e4fd9f3e1941.jpg", name: "iPhone 14 Pro", sku: "IP14P-BLK-128", category: "Smartphones", price: 999, stock: 25, status: "Active" },
        { id: 2, image: "https://i.pinimg.com/736x/5d/dd/cf/5dddcffd34880bf32202cd71ebb60066.jpg", name: "Samsung Galaxy S23", sku: "SGS23-WHT-256", category: "Smartphones", price: 899, stock: 0, status: "Active" },
        { id: 3, image: "https://i.pinimg.com/736x/28/e1/52/28e152ed9070c3990b00b4b21c38ff10.jpg", name: "MacBook Air M2", sku: "MBA-M2-512", category: "Laptops", price: 1299, stock: 10, status: "Active" },
        { id: 4, image: "https://i.pinimg.com/736x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg", name: "Dell XPS 13", sku: "DX13-SLV-256", category: "Laptops", price: 1199, stock: 5, status: "Active" },
        { id: 5, image: "https://i.pinimg.com/736x/3a/24/ab/3a24ab2b54c1c982b08f10fb010ce4f2.jpg", name: "Sony WH-1000XM5", sku: "SONY-HXM5-BLK", category: "Headphones", price: 399, stock: 0, status: "Out of Stock" },
        { id: 6, image: "https://i.pinimg.com/736x/da/7c/7b/da7c7b293c96afd6355cf78f257c10f0.jpg", name: "Bose QC45", sku: "BOSE-QC45-WHT", category: "Headphones", price: 349, stock: 10, status: "Active" },
        { id: 7, image: "https://i.pinimg.com/1200x/e5/8b/90/e58b90209a043d271ccb5cd59a92a84b.jpg", name: "iPad Pro 11", sku: "IPAD-PRO-11-256", category: "Tablets", price: 799, stock: 22, status: "Active" },
        { id: 8, image: "https://i.pinimg.com/1200x/3a/c6/95/3ac6953519816be2b1736f2da8e39fb0.jpg", name: "Samsung Galaxy Tab S8", sku: "SGT-S8-128", category: "Tablets", price: 699, stock: 8, status: "disabled" },
        { id: 9, image: "https://i.pinimg.com/1200x/1b/59/45/1b594506f1cfd747c67ddc68e05f0fa1.jpg", name: "Logitech MX Master 3", sku: "LOG-MX3", category: "Accessories", price: 99, stock: 50, status: "Active" },
        { id: 10, image: "https://i.pinimg.com/736x/82/7d/8b/827d8b76f770db34328bf6c75f6dee9f.jpg", name: "Apple Watch Series 9", sku: "AW-S9-44", category: "Wearables", price: 499, stock: 18, status: "Active" },
        { id: 10, image: "https://i.pinimg.com/1200x/3d/8f/d9/3d8fd915a30b7cb0d76afcdc7468c26b.jpg", name: "Lasther Jacket men style", sku: "LU-F1-14", category: "Clothing", price: 1500, stock: 18, status: "Active" }
    ];

    // function to navigate to the cart page
    const navigate = useNavigate()


    return (
    <section
        className='shop-page'
    >
        <div
            className='shop-controls'
        >
            <Search size={20} stroke='#333' className='search-icon'/>

            <input 
                type='text'
                placeholder='Search clothes, ipad iphone....'
                className='product-search'
            />
            <button>Search</button>

            <div className='category-filters'>
                <button className='active'>All</button>
                <button>Smartphones</button>
                <button
                    onClick={() => navigate('/cart')}
                >
                    <ShoppingCart size={24} stroke='#facc15' />
                </button>
{/* 
                <button
                    onClick={() => navigate('/wishlist')}
                >
                    <Heart size={24} stroke="#ff4d4f" />    
                </button> */}
                <button>Clothing</button>
            </div>
        </div>

        <div
            className='products'
        >
            {products.map((product) => (
                <div
                    className='product-card'
                >
                    <div
                        className='product-image'
                    >
                        <img 
                            src={product.image}
                            alt={product.name}
                        />

                        {product.stock === 0 && <span className='badge'>Out of Stock</span>}
                        {product.stock > 20 && <span className='badge-promo'>5% off</span>}
                    </div>
                    
                    <div className='product-details'>
                        <h3 className='product-name'>{product.name}</h3>
                        <p className='product-price'>{product.price}</p>
                        <button className='add-to-cart'>Add to Cart</button>
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}
