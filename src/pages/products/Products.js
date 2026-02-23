import React, { useEffect, useState } from 'react'
import './Products.css'
import { PlusCircle } from 'lucide-react';
import Button from '../../components/buttons/Button';
import Product from '../../components/modals/product/Product';

export default function Products() {

  // state to open the modal to add a product
  const [ openModal, setOpenModal ] = useState(false) // initially, the modal is closed

  const products = [
    { id: 1, image: "https://i.pinimg.com/736x/dc/22/35/dc2235bbb7c5ae968a36e4fd9f3e1941.jpg", name: "iPhone 14 Pro", sku: "IP14P-BLK-128", category: "Smartphones", price: 999, stock: 25, status: "Active", quantity: 25, total: 999 * 25, lastUpdated: "2026-02-10" },
    { id: 2, image: "https://i.pinimg.com/736x/5d/dd/cf/5dddcffd34880bf32202cd71ebb60066.jpg", name: "Samsung Galaxy S23", sku: "SGS23-WHT-256", category: "Smartphones", price: 899, stock: 15, status: "Out of Stock", quantity: 15, total: 899 * 15, lastUpdated: "2026-02-08" },
    { id: 3, image: "https://i.pinimg.com/736x/28/e1/52/28e152ed9070c3990b00b4b21c38ff10.jpg", name: "MacBook Air M2", sku: "MBA-M2-512", category: "Laptops", price: 1299, stock: 10, status: "Active", quantity: 10, total: 1299 * 10, lastUpdated: "2026-02-05" },
    { id: 4, image: "https://i.pinimg.com/736x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg", name: "Dell XPS 13", sku: "DX13-SLV-256", category: "Laptops", price: 1199, stock: 5, status: "Active", quantity: 5, total: 1199 * 5, lastUpdated: "2026-02-07" },
    { id: 5, image: "https://i.pinimg.com/736x/3a/24/ab/3a24ab2b54c1c982b08f10fb010ce4f2.jpg", name: "Sony WH-1000XM5", sku: "SONY-HXM5-BLK", category: "Headphones", price: 399, stock: 30, status: "Out of Stock", quantity: 30, total: 399 * 30, lastUpdated: "2026-02-09" },
    { id: 6, image: "https://i.pinimg.com/736x/da/7c/7b/da7c7b293c96afd6355cf78f257c10f0.jpg", name: "Bose QC45", sku: "BOSE-QC45-WHT", category: "Headphones", price: 349, stock: 20, status: "Active", quantity: 20, total: 349 * 20, lastUpdated: "2026-02-06" },
    { id: 7, image: "https://i.pinimg.com/1200x/e5/8b/90/e58b90209a043d271ccb5cd59a92a84b.jpg", name: "iPad Pro 11", sku: "IPAD-PRO-11-256", category: "Tablets", price: 799, stock: 12, status: "Active", quantity: 12, total: 799 * 12, lastUpdated: "2026-02-04" },
    { id: 8, image: "https://i.pinimg.com/1200x/3a/c6/95/3ac6953519816be2b1736f2da8e39fb0.jpg", name: "Samsung Galaxy Tab S8", sku: "SGT-S8-128", category: "Tablets", price: 699, stock: 8, status: "disabled", quantity: 8, total: 699 * 8, lastUpdated: "2026-02-03" },
    { id: 9, image: "https://i.pinimg.com/1200x/1b/59/45/1b594506f1cfd747c67ddc68e05f0fa1.jpg", name: "Logitech MX Master 3", sku: "LOG-MX3", category: "Accessories", price: 99, stock: 50, status: "Active", quantity: 50, total: 99 * 50, lastUpdated: "2026-02-02" },
    { id: 10, image: "https://i.pinimg.com/736x/82/7d/8b/827d8b76f770db34328bf6c75f6dee9f.jpg", name: "Apple Watch Series 9", sku: "AW-S9-44", category: "Wearables", price: 499, stock: 18, status: "Active", quantity: 18, total: 499 * 18, lastUpdated: "2026-02-01" }
  ];


  const filterOptions = [
    { id: 1, option: "Categories", items: ["iphones", "laptops", "Headphones", "Tablets", "Accessories"] },
    { id: 2, option: "Status", items: ["Active", "Out of Stock", "disabled"] },
    { id: 3, option: "Price", items: ["$50 - $100", "$100 - $200", "$200 - $300"] },
    { id: 4, option: "Store", items: ["Electronics limited", "Tekno technologies", "Micro Teachnologies"] }
  ]

  // function to open and close the modal
  const openProductModal = () => {
    setOpenModal(prev => !prev)
  }

  // useEffects for side effects
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section
        className='products-page'
      >
        <h4>Products</h4>
        
        <div
          className='product-controls'
        >
          <input
            type='text'
            placeholder='Search Samsung, ipad, iphone'
            className='product-search'
          />

          <button
            className='add-product'
            onClick={openProductModal}
          >
            <PlusCircle size={15} stroke='#ffffff' />
            Add Product
          </button>
        </div>

        <div
          className='product-filters'
        >
          {filterOptions.map((filter) => (
            <div
              className='filter'
              key={filter.id}
            >
              <h5>{filter.option}</h5>

              <div
                className='filter-input'
              >
                <span>All</span>

                <div
                  className='drop-down'
                >
                  {filter.items.map((item, idx) => (
                    <div
                      className='dropdown-item'
                    >
                      {typeof item === "string" ? item : Object.keys(item).join(",")}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        <div
          className='products-table-wrapper'
        >
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Value</th>
                <th>Stock</th>
                <th>Status</th>
                <th>LastUpdated</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className='product-name'>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className='product-image'
                    />
                    {product.name}
                  </td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.total}</td>
                  <td>{product.stock}</td>
                  <td
                    className={
                      product.status === "Active" ? "status-active" :
                      product.status === "Out of Stock" ? "status-outofstock" :
                      "status-disabled"
                    }
                  >
                    {product.status}
                  </td>
                  <td>{product.lastUpdated}</td>
                  <td>
                    <Button name="edit" text="Edit" />
                    <Button name="update" text="Update" />
                    <Button name="delete" text="Delete" />
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>

      </section>


      { openModal && <Product onClose={openProductModal} />}

    </>
  )
}
