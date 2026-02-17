import React from 'react'
import './Sale.css'

export default function Sales() {
  return (
    <div className='sales-section'>
        <div className='sales-section-one'>
            <div className='advert-text'>
                <h5>Season Sale</h5>
                <h4>Men's fashion</h4>
                <p>Min. 35-70% Off</p>
            </div>
            
            <div className='advert-btn'>
                <button className='shop'>Shop Now</button>
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
