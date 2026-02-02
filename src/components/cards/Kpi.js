import React from 'react'
import './Kpi.css'

export default function Kpi({ cardName, cardIcon, cardText, cardStat }) {
  return (
    <div
        className={`card ${cardName}`}
    >
        <div
            className='card-icon'
        >
            {cardIcon}
        </div>

        <div
            className='card-info'
        >
            <h4>{cardText}</h4>
            <p>{cardStat}</p>
        </div>
    </div>
  )
}
