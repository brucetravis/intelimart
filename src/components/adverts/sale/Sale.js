import React from 'react'
import './Sale.css'
import { useNavigate } from 'react-router'

export default function Sales() {

    // function to navigate to another page
    const navigate = useNavigate()
    
  return (
    <div className='sales-section'>
        <div className='sales-section-one'>
            <div className='advert-text'>
                <h5>Season Sale</h5>
                <h4>Men's fashion</h4>
                <p>Min. 35-70% Off</p>
            </div>
            
            <div className='advert-btn'>
                <button 
                    className='shop'
                    onClick={() => navigate('/users/shop')}
                >
                    Shop Now
                </button>
                <button className='read'>Read More</button>
            </div>
        </div>

        <div className='model'>
            <img 
                src={require('../../../images/modelnoback.png')}
                alt='model'
            />
        </div>
    </div>
  )
}
