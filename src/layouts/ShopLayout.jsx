import React from 'react'
import UserHeader from '../components/shopheader/UserHeader'
import ShopFooter from '../components/shopfooter/ShopFooter'

export default function ShopLayout({ children }) {

  return (
    <div style={{ flex: 1 }}>
      <UserHeader />

      <div style={{ padding: '20px', marginTop: '20px' }}>
        {children}
      </div>

      <ShopFooter />
    </div>
  )
}
