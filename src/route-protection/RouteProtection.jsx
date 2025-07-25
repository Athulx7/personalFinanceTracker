import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

function RouteProtection({ children }) {
    const token = sessionStorage.getItem('token')
    if(!token) {
        return <Navigate to={'/'} replace/>
    }
  return (
      <>
        {children}
      </>
  )
}

export default RouteProtection
