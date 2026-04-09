import React, { useState } from 'react'
import './UserHeader.css'
import { Search, ShieldCheck, ShoppingBag, User2Icon, UserCheck2 } from 'lucide-react'
import Cart from '../cart/Cart'
import { AnimatePresence } from 'framer-motion'
import SearchBar from '../searchbar/Search'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../../contexts/AuthProvider'

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

    // get functions from the AuthProvider
    const { handleLogOut, isLoggedIn, userGoogleToken, decodedToken } = useAuth()

    const isLanding = location.pathname === '/users/landing'
    const isShop = location.pathname === '/users/shop'

    // admin 
    const user = decodedToken?.role === "admin" ? "admin" 
                : decodedToken?.role === "user" ? "user" : "Guest"

  return (
    <>
        <header className='shopHeader'>
            <div className='logo'>
                <h4>INTELIMART</h4>
            </div>
            
            <div className='icons'>
                { isLoggedIn || userGoogleToken ? (
                    <div className='logged-in'>
                        <div className='log-in-icon'>
                            <UserCheck2 
                                size={28} 
                                stroke='#334155'
                                onClick={() => navigate('/register')} 
                            />
                        </div>

                        <button
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <User2Icon 
                        size={28} 
                        stroke='#334155'
                        onClick={() => navigate('/register')} 
                    />
                )}

                {isShop ? (
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

                {user === "admin" && (
                    <ShieldCheck 
                        size={28} 
                        stroke='#334155'
                        onClick={() => navigate('/admin/dashboard')} 
                    />
                )}
                
                {!isLanding  ? (
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
