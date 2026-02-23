import React from 'react'
import UserHeader from '../components/shopheader/UserHeader'

export default function ShopLayout({ children }) {
  return (
    <div style={{ flex: 1 }}>
      <UserHeader />

      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  )
}
