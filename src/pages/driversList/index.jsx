import React from 'react'
import Sidebar from '../../components/sidebar'
import SearchBar from '../../components/search'
import Button from '../../components/button'
import { Link } from 'react-router-dom'

const DriversList = () => {
    const driversList = ([
        {
            id: 1,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Assigned",
            number: "08132755766",
            gender: "Male",
            dob: "12/12/2000",
            email: "femitaiwo@gmail.com",
            address: "First Bank Ikeja Lagos",
            car: "Toyota Hiace",
            plateNumber: "ABC-123-987",
            color: "White",
            route: "Lagos-Calabar",
            tripCompleted: "18"
            
        },
        {
            id: 2,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Assigned"
            
        },
        {
            id: 3,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Assigned"
            
        },
        {
            id: 4,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Unassigned"            
        },
        {
            id: 4,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Unassigned"            
        },
        {
            id: 4,
            avatar: "../../../public/assets/ellipse 2.png",
            name: "Mr James Taiwo",
            status: "Unassigned"            
        },
       
    ])



  return (
    <div className='flex bg-[#dfe0eb] h-screen'>
      <div>
        <Sidebar />
      </div>

     <div className='w-screen'>

      <div className='flex justify-between pl-10 pr-20 py-10'>
      <SearchBar />
      <div className='flex items-center justify-between w-[150px]'>
                <img src="../../../public/assets/vector.png" alt="" />
                <img className='rounded-full' src="../../../public/assets/m header.png" alt="avatar" />
            </div>
      </div>

      <div className='flex ml-14 mb-10 w-[501px] gap-10'>
        <Button title={"All"} style={"border border-black w-[85px] rounded-[15px] p-[10px]"}/>
        <Button title={"Assigned"} style={"border border-black w-[148px] rounded-[15px] p-[10px]"}/>
        <Button title={"Unassigned"} style={"border border-black w-[168px] rounded-[15px] p-[10px]"}/>
      </div>
      
     <div className='flex pl-14 flex-col gap-10 '>
      
        {driversList.map((driver) => (
          <div key={driver.id} className='flex flex-col gap-5'>

           <Link to={`/driverprofile/${driver.id}`}>
           <div className='flex w-[1270px] bg-white items-center justify-between py-2 px-3 pr-[150px]'>
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
