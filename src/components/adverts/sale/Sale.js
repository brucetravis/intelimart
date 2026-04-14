import React, { useState } from 'react'
import './Sale.css'
import { useNavigate } from 'react-router-dom'

export default function Sales() {

    // salesData.js
    const salesItems = [
        {
            id: 1,
            title: "Men's Fashion",
            subtitle: "Season Sale",
            discount: "Min. 35-70% Off",
            image: require('../../../images/modelnoback.png'),
            link: "/users/shop"
        },
        {
            id: 2,
            title: "Women's Fashion",
            subtitle: "Exclusive Deals",
            discount: "Up to 50% Off",
            image: require('../../../images/women-model.jpg'),
            link: "/users/shop"
        },
        {
            id: 3,
            title: "Accessories",
            subtitle: "Hot Picks",
            discount: "Flat 40% Off",
            image: require('../../../images/modelnoback.png'),
            link: "/users/shop"
        }
    ]
    // state to keep track of of the image in the cycle
    const [ currentSlide, setCurentSlide ] = useState(0) // current state holds the first slide

    // function to navigate to another page
    const navigate = useNavigate()
    
  return (
    <div className='sales-section'>
        {/* {salesItems.map((itm) => ())} */}
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
                <button 
                    className='read'
                    onClick={() => navigate('/users/about')}
                >
                    Read More
                </button>
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
