import React from 'react'

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>

          <div style={{ padding: '20px' }}>
              {children}
          </div>
        </div>
    </div>
  )
}
