import React from 'react'
import './ProductPie.css'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import CustomTooltip from '../../customtooltip/CustomTooltip'

export default function ProductPie({ data }) {
  // A array of colors
  const COLORS = ["#16a34a", "#facc15", "#3b82f6", "#a79bfa"]

  return (
    <section className='product-pie-chart'>
      <h4>Revenue by Product</h4>
      
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill='#8884d8'
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign='bottom' height={36} />
        </PieChart>
      </ResponsiveContainer>
    </section>
  )
}
