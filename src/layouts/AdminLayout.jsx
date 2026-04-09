import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <div style={{ flex: 1 }}>

        <div style={{ padding: '20px' }}>
            {children}
        </div>
      </div>
    </div>
  )
}
