import React, { useState } from 'react'
import './UserHeader.css'
import { Heart, Search, ShoppingBag, User2Icon } from 'lucide-react'
import Cart from '../cart/Cart'
import { AnimatePresence } from 'framer-motion'
import SearchBar from '../searchbar/Search'
import { useLocation, useNavigate } from 'react-router'

export default function UserHeader() {
    // state to open and close the cart
    const [ openCart, setOpenCart ] = useState(false) // initially the cart is closed
    // state to open and close the search bar
    const [ openSearch, setOpenSearch ] = useState(false) // initially the searchbar is hidden

    // function to close the cart
    const closeCart = (prev) => {
        setOpenCart(!prev)
    }

    // function to close the search bar
    const closeSearchBar = (prev) => {
        setOpenSearch(!prev)
    }

    // function to Navigate to the registration page
    const navigate = useNavigate()

    // Hook to read the current path
    const location = useLocation()

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
                    onClick={() => navigate('/register')} 
                />

                {location.pathname === '/users/shop' ? (
                    <Search 
                        size={28} 
                        stroke='#334155'
                        onClick={() => setOpenSearch(prev => !prev)}
                    />
                ) : (
                    ''
                )}

                {/* <Heart
                    size={28} 
                    stroke='#334155'
                /> */}
                
                {location.pathname === '/users/shop' ? (
                    <ShoppingBag 
                        size={28} 
                        stroke='#334155'
                        onClick={() => setOpenCart(prev => !prev)}
                    />
                ) : (
                    ''
                )}
            </div>
        </header>
        
        <AnimatePresence>
            {openCart && <Cart onClose={closeCart} />}
        </AnimatePresence>

        <AnimatePresence>
            {openSearch && <SearchBar onClose={closeSearchBar} /> }
        </AnimatePresence>
    </>
  )
}
