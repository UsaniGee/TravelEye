import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../pages/logout'

const Sidebar = () => {
  return (
    <div className='pt-[55px] px-[46px] bg-white w-[300px] h-screen '>

      {/* Logo */}
     <Link to={"/"}>
     <div>
        <img src="assets/Group 49.png" alt="Logo" />
      </div>
    </Link>
      {/* Sidebar Items */}
      <div className='h-[408px] flex flex-col justify-between mt-20 '>
        <Link to={"/home"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="assets/home.png" alt="" />
          <span>Home</span>
        </div>
        </Link>

        <Link to={"/driverslist"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="assets/account.png" alt="" />
          <span>Driver</span>
        </div>
        </Link>

        <Link to={"/cars"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="/assets/group.png" alt="" />
          <span>Cars</span>
        </div>
        </Link>

        <Link to={"/schedule"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="assets/calendar-2.png" alt="" />
          <span>Schedule</span>
        </div>
        </Link>

        <Link to={"/backup"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="/assets/data.svg" alt="" />
          <span>Backup</span>
        </div>
        </Link>

        <Link to={"/settings"}>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
          <img src="assets/setting.png" alt="" />
          <span>Settings</span>
        </div>
        </Link>

        <Link to={"/logout"}>
       
        </Link>
        <div className='flex gap-5 items-center hover:bg-[#dfe0eb] hover:underline p-3'>
        <img src="assets/shut-down.png" alt="" />
         <Logout />
        </div>
        
      
        
      
       
      
      </div>
    </div>
  )
}

export default Sidebar
