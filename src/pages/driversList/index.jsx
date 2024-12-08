import React from 'react'
import Sidebar from '../../components/sidebar'
import SearchBar from '../../components/search'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import { driversList } from "../../context/driversContext/index.js"

const DriversList = () => {
   
 

  return (
    <div className='flex bg-[#dfe0eb] min-h-screen '>
      <div>
        <Sidebar />
      </div>

     <div className='w-screen'>

      <div className='flex justify-between pl-10 pr-20 py-10'>
      <SearchBar />
      <div className='flex items-center justify-between w-[150px]'>
                <img src="public/assets/vector.png" alt="" />
                <img className='rounded-full' src="assets/m header.png" alt="avatar" />
            </div>
      </div>

      <div className='flex ml-14 mb-10 w-[501px] gap-10'>
        <Button title={"All"} style={"border border-black w-[85px] rounded-[15px] p-[10px]"}/>
        <Button title={"Assigned"} style={"border border-black w-[148px] rounded-[15px] p-[10px]"}/>
        <Button title={"Unassigned"} style={"border border-black w-[168px] rounded-[15px] p-[10px]"}/>
      </div>
      
     <div className='flex flex-col gap-5 ml-5'>
      
        {driversList?.map((driver) => (
          <div key={driver.id} className=''>

           <Link to={`/driverprofile/${driver.id}`}>
           <div className='flex bg-white items-center justify-between w-[900px] py- px-3 '>
              <img src={driver.avatar} alt="" />
              <div>{driver.name}</div>
              <div>ID Number: {driver.id}</div>
              <div className='text-green-400'>{driver.status}</div>
           </div>
           </Link>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default DriversList
