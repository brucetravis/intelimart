// LowStockTable.js
import React from 'react'
import './LowStocks.css'
import { useProduct } from '../../contexts/ProductProvider'

export default function LowStockTable() {

    // get all products from the product provider
    const { products } = useProduct()

    // remaining products
    const lowStockProducts = products?.filter((product) => product.quantity < 10)
  
    return (
    <div className="low-stock-table">
      <h4>Low Stock Products</h4>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Current Stock</th>
            <th>Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {
            lowStockProducts.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td>{item.name.length > 20 ? item.name.substring(0, 20) + "...." : item.name}</td>
                <td>{item.sku.length > 20 ? item.sku.substring(0, 20) + "..." : item.sku}</td>
                <td>{item.quantity}</td>
                <td>{item.createdAt.split("T")[0]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
