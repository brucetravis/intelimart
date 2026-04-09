import React from 'react'
import './BestProduct.css'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function BestProduct({ data, colors}) {
  return (
    <main
      className='bestSelling-chart'
    >
      <h4>Best Selling Product</h4>
      
      <ResponsiveContainer width="100%" height={320} style={{ outline: "none" }} tableIndex={-1} >
        <PieChart>
          <Pie
            data={data} // The data array
            dataKey="sold" // Whih field to use for the slice size
            nameKey="name" // Which field to use for the labels
            cx="50%" // X center
            cy="50%" // Y center
            outerRadius={100} // Size of the pie
            label // Show labels on slices
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip /> {/* Hover tooltip */}
          <Legend verticalAlign='bottom' height={36} /> {/* Legend */}
        </PieChart>
      </ResponsiveContainer>
    </main>
  )
}
