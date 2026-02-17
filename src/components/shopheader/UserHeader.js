import React, { useState } from 'react'
import './UserHeader.css'
import { Heart, Search, ShoppingBag, User2Icon } from 'lucide-react'
import Cart from '../cart/Cart'
import { AnimatePresence } from 'framer-motion'

export default function UserHeader() {
    // state to open and close teh cart
    const [ openCart, setOpenCart ] = useState(false) // initially the cart is closed

    // function to close the cart
    const closeCart = (prev) => {
        setOpenCart(!prev)
    }

  return (
    <>
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
                    onClick={() => setOpenCart(prev => !prev)}
                />
            </div>
        </header>
        
        <AnimatePresence>
            {openCart && <Cart onClose={closeCart} />}
        </AnimatePresence>
    </>
  )
}
