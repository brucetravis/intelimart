import React from 'react'
import './AboutCard.css'

export default function AboutCard({ icon, title, description }) {
    return (
        <div className="about-card">
            <div className="about-card-icon">
                {icon}
            </div>

            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}