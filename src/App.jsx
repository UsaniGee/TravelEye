import React from 'react'
import Home from './pages/home'
import Map from './components/map'

const App = () => {
  return (
    <div className='flex'>
      <div className=''>
      <Home />
      </div>
      <div className='w-[75%] '>
      <Map />
      </div>
    </div>
  )
}

export default App
