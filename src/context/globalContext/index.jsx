import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleAuthentication = (state) => setIsAuthenticated(state)

  return (
    <GlobalContext.Provider value={{handleAuthentication, isAuthenticated}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
