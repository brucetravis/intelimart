import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import { useAuth } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'


export default function AdminLayout({ children }) {

  // get the decode token from the auth provider
  const { decodedToken, loading } = useAuth()

  // if loading is true
  if (loading) {
    return null
  }

  // if there is no decoded token or the role is not admin
  if (!decodedToken || decodedToken?.role !== "admin") {
    // redirect the user to the 4040 page
    return <Navigate to="*" replace />
  }
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{ padding: '20px' }}>
            {children}
        </div>
      </div>
    </div>
  )
}
