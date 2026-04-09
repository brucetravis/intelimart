import React from 'react'
import './Info.css'

export default function Info({label, value, highlight, individual}) {
    // store the label in a variable
    const isStatus = label === "Status"
    
    const statusClass = 
        isStatus && individual ? `status ${individual.status.toLowerCase()}` : ''
  
    return (
    <div
        className={`info ${highlight ? 'highlight' : ''}`}
    >
        <span>{label}</span>
        <strong
            className={statusClass}
        >
            {value}
        </strong>
    </div>
  )
}
