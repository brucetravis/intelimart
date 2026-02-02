import React from 'react'
import './Sales.css'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Sales({ data }) {
  return (
    <section
        className='monthly-sales-chart'
    >
        <h4>Monthly Sales</h4>

        <ResponsiveContainer width="100%" height={320} style={{ outlie: "none" }}>
            <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey={data.month} label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft', offset: 10 }} />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
            </BarChart>
        </ResponsiveContainer>
        
    </section>
  )
}
