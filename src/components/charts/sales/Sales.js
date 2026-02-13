import React from 'react'
import './Sales.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Sales({ data }) {
  return (
    <main
        className='monthly-sales-chart'
    >
        <h4>Monthly Sales</h4>

        <ResponsiveContainer width="100%" height={320} style={{ outlie: "none" }}>
            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft', offset: 10 }} />
                <Tooltip />
                <Line
                    type='monotone'
                    dataKey="sales" 
                    stroke="#3b82f6"
                    strokewidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
        
    </main>
  )
}
