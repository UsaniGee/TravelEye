import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const useGlobalContext = () => useContext(GlobalContext)

export default useGlobalContext
