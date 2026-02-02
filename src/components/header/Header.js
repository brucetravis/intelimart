import React from 'react'
import './Header.css'
import { Bell } from 'lucide-react'

export default function Header({ title }) {
  return (
    <header>
        <h3>{ title }</h3>
        {/* <h3>HEADER</h3> */}

        <div
            className='header-info'
        >
            <Bell size={24} stroke="#facc15" />

            <img 
                src='https://i.pinimg.com/736x/fb/31/37/fb3137e1e851320d806809d0473f446d.jpg'
                alt='header pic'
                className='header-pic'
            />
        </div>
    </header>
  )
}