import React from 'react'
import './UserHeader.css'
import { Heart, Search, ShoppingBag, User2Icon } from 'lucide-react'

export default function UserHeader() {
  return (
    <header className='shopHeader'>
        <div className='logo'>
            <h4>INTELIMART</h4>
        </div>

        {/* <div>
            <input
                type='text'
                placeholder='Search electronics, clothes etc'   
            />
        </div> */}
        
        <div className='icons'>
            <User2Icon 
                size={28} 
                stroke='#334155' 
            />

            <Search 
                size={28} 
                stroke='#334155'
            />

            <Heart
                size={28} 
                stroke='#334155'
            />
            
            <ShoppingBag 
                size={28} 
                stroke='#334155' 
            />
        </div>
    </header>
  )
}
