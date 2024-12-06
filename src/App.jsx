import React from 'react'
import Home from './pages/home'
import Map from './components/map'

const App = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='w-[30%]'>
      <Home />
      </div>
      <div className='w-[69%] bg-[#dfe0eb]'>
      <Map />
      </div>
    </div>
  )
}

export default App
