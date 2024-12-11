import React from 'react'
import Sidebar from '../../components/sidebar'
import SearchBar from '../../components/search'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import { carsList } from "../../context/carData/index.js"

const Cars = () => {
   
 

  return (
    <div className='flex '>
      <div>
        <Sidebar />
      </div>

     <div className='w-screen bg-[#dfe0eb] py-10'>

      <div className='flex justify-between pl-10 pr-20 pb-10'>
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
      
        {carsList?.map((car) => (
          <div key={car.id} className=''>

           
           <div className='flex bg-white items-center justify-between w-[900px] py-2 pl-2 pr-24 '>
              <img src={car.avatar} alt="" />
              <div>{car.carName}</div>
              <div>Plate No: {car.plateNumber}</div>
              <div className='text-green-400'>{car.status}</div>
           </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Cars
