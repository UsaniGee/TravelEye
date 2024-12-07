import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='bg-[#dfe0eb'>
      <Outlet />
    </div>
  )
}

export default Root
