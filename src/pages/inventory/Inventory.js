import React from 'react'
import './Inventory.css'
import { PlusCircle } from 'lucide-react';
import Button from '../../components/buttons/Button';

export default function Inventory() {
    
    const products = [
        { id: 1, image: "https://i.pinimg.com/736x/dc/22/35/dc2235bbb7c5ae968a36e4fd9f3e1941.jpg", name: "iPhone 14 Pro", sku: "IP14P-BLK-128", category: "Smartphones", price: 999, stock: 25, status: "In stock", lastUpdated: "2026-01-05" },
        { id: 2, image: "https://i.pinimg.com/736x/5d/dd/cf/5dddcffd34880bf32202cd71ebb60066.jpg", name: "Samsung Galaxy S23", sku: "SGS23-WHT-256", category: "Smartphones", price: 899, stock: 15, status: "In stock", lastUpdated: "2026-01-08" },
        { id: 3, image: "https://i.pinimg.com/736x/28/e1/52/28e152ed9070c3990b00b4b21c38ff10.jpg", name: "MacBook Air M2", sku: "MBA-M2-512", category: "Laptops", price: 1299, stock: 10, status: "Low stock", lastUpdated: "2026-01-10" },
        { id: 4, image: "https://i.pinimg.com/736x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg", name: "Dell XPS 13", sku: "DX13-SLV-256", category: "Laptops", price: 1199, stock: 5, status: "In stock", lastUpdated: "2026-01-12" },
        { id: 5, image: "https://i.pinimg.com/736x/3a/24/ab/3a24ab2b54c1c982b08f10fb010ce4f2.jpg", name: "Sony WH-1000XM5", sku: "SONY-HXM5-BLK", category: "Headphones", price: 399, stock: 30, status: "Out of stock", lastUpdated: "2026-01-14" },
        { id: 6, image: "https://i.pinimg.com/736x/da/7c/7b/da7c7b293c96afd6355cf78f257c10f0.jpg", name: "Bose QC45", sku: "BOSE-QC45-WHT", category: "Headphones", price: 349, stock: 20, status: "In stock", lastUpdated: "2026-01-17" },
        { id: 7, image: "https://i.pinimg.com/1200x/e5/8b/90/e58b90209a043d271ccb5cd59a92a84b.jpg", name: "iPad Pro 11", sku: "IPAD-PRO-11-256", category: "Tablets", price: 799, stock: 12, status: "Low stock", lastUpdated: "2026-01-19" },
        { id: 8, image: "https://i.pinimg.com/1200x/3a/c6/95/3ac6953519816be2b1736f2da8e39fb0.jpg", name: "Samsung Galaxy Tab S8", sku: "SGT-S8-128", category: "Tablets", price: 699, stock: 8, status: "Low stock", lastUpdated: "2026-01-21" },
        { id: 9, image: "https://i.pinimg.com/1200x/1b/59/45/1b594506f1cfd747c67ddc68e05f0fa1.jpg", name: "Logitech MX Master 3", sku: "LOG-MX3", category: "Accessories", price: 99, stock: 50, status: "Out of stock", lastUpdated: "2026-01-24" },
        { id: 10, image: "https://i.pinimg.com/736x/82/7d/8b/827d8b76f770db34328bf6c75f6dee9f.jpg", name: "Apple Watch Series 9", sku: "AW-S9-44", category: "Wearables", price: 499, stock: 18, status: "In stock", lastUpdated: "2026-01-26" }
    ];


  return (
    <section
        className='inventory-page'
    >
        <div
            className='inventory-table'
        >
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Unit Price</th>
                        <th>Total Value</th>
                        <th>Last Updated</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length > 0 ? products.map((product) => (
                        <tr
                            key={product.id}
                        >
                            <td
                                className='inventory-name'
                            >
                                <img 
                                    src={product.image}
                                    alt={product.name}
                                    className='inventory-image'
                                />
                                {product.name}
                            </td>

                            <td>{product.sku}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td
                                className={
                                    product.status === "In stock" ? "status-inStock" :
                                    product.status === "Out of stock" ? "status-outOfStock" :
                                    "status-lowStock" 
                                }
                            >
                                {product.status}
                            </td>
                            <td>{product.price}</td>
                            <td>{product.price * product.stock}</td>
                            <td>{product.lastUpdated}</td>

                            <td>
                                <Button name="edit" text="edit" />
                                <Button name="adjust" text="adjust"/>
                                <Button name="delete" text="delete"/>
                            </td>
                        </tr>
                    )): (
                        <tr>
                            <td
                                colSpan="9"
                                className='empty-inventory'
                            >
                                <div
                                    className='empty-wrapper'
                                >
                                    <PlusCircle size={20} stroke='#333333' />
                                    <p>Add Product</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </section>
  )
}