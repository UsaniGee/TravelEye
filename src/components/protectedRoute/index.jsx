import React from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {isAuthenticated} = useGlobalContext()

    // if (isAuthenticated) {
    //     return children
    // }
  return isAuthenticated ? children : <Navigate to={"/"}/> 
}

export default ProtectedRoute
