import React from 'react'
import './Orders.css'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function OrdersChart({ data }) {
  return (
    <main
      className='orders-chart'
    >
      <h4>Orders Over Time</h4>

      <ResponsiveContainer width="100%" height={320} style={{ outline: "none" }} tableIndex={-1} >
        <BarChart 
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
            <XAxis 
            dataKey="month"
            label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              label={{ value: 'Orders', angle: -90, position: 'insideLeft', offset: -5 }}
            />
            <Tooltip />
            <Bar dataKey="orders" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  )
}
