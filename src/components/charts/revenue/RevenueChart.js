import React from 'react'
import './RevenueChart.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function RevenueChart({ data }) {
  return (
    <div
        className='revenue-chart'
    >
        <h4>Revenue Over Time</h4>

        <ResponsiveContainer width="100%" height={320} style={{ outline: "none" }} tableIndex={-1}>
            <LineChart 
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <XAxis 
                    dataKey={data.date}
                    label={{ value: 'Day of Week', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                    label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft', offset: -5 }}
                />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke='#16a34a'
                    strokeWidth={3}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>

    </div>
  )
}
