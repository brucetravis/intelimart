// LowStockTable.js
import React from 'react'
import './LowStocks.css'

export default function LowStockTable({ data }) {

    const lowStockData = [
        { name: 'Laptop', sku: 'LP-001', stock: 3, threshold: 5, lastRestocked: '2026-01-30' },
        { name: 'Headphones', sku: 'HP-021', stock: 2, threshold: 10, lastRestocked: '2026-02-05' },
        { name: 'Smartwatch', sku: 'SW-009', stock: 1, threshold: 5, lastRestocked: '2026-02-01' },
        { name: 'Smartphone', sku: 'SP-014', stock: 4, threshold: 8, lastRestocked: '2026-01-28' }
    ]
  
    return (
    <div className="low-stock-table">
      <h4>Low Stock Products</h4>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Current Stock</th>
            <th>Threshold</th>
            <th>Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {lowStockData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.stock}</td>
              <td>{item.threshold}</td>
              <td>{item.lastRestocked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
