import React from 'react'
import './Header.css'
import { Bell, Hand } from 'lucide-react'
import { useAuth } from '../../contexts/AuthProvider'

export default function Header() {

    // get the decode token from the auth provider
    const { decodedToken } = useAuth()

  return (
    <header>
        {/* <h3>{ title }</h3> */}
        <div className='d-flex align-items-center'>
            <h3>Welcome Back, {decodedToken ? decodedToken?.firstName : "Admin"} </h3>
            <Hand size={24} stroke="#d9a066" />
        </div>

        <div
            className='header-info'
        >
            <Bell size={24} stroke="#facc15" />

            <img 
                // src='https://i.pinimg.com/736x/fb/31/37/fb3137e1e851320d806809d0473f446d.jpg'
                src='https://i.pinimg.com/1200x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg'
                alt='header pic'
                className='header-pic'
            />
        </div>
    </header>
  )
}