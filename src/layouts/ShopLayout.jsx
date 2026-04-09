import React from 'react'
import UserHeader from '../components/shopheader/UserHeader'
import { useLocation } from 'react-router'

export default function ShopLayout({ children }) {

  // useLocation to keep track of where a user is
  const location = useLocation()

  return (
    <div style={{ flex: 1 }}>
      {location.pathname === '/users/checkout' ? (
        ''
      ) : (
        <UserHeader />
      )}

      <div style={{ padding: '20px', marginTop: '20px' }}>
        {children}
      </div>
    </div>
  )
}
