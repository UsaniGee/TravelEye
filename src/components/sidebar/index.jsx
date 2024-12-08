import React from 'react'

const Sidebar = () => {
  return (
    <div className='pt-[55px] px-[46px] bg-white w-[300px]  '>

      {/* Logo */}
      <div>
        <img src="assets/Group 49.png" alt="Logo" />
      </div>

      {/* Sidebar Items */}
      <div className='h-[408px] flex flex-col justify-between mt-20'>
        <div className='flex gap-5 items-center'>
        <img src="assets/home.png" alt="" />
          <span>Home</span>
        </div>
        <div className='flex gap-5 items-center'>
        <img src="assets/account.png" alt="" />
          <span>Driver</span>
        </div>
        <div className='flex gap-5 items-center'>
        <img src="assets/group.png" alt="" />
          <span>Cars</span>
        </div>
        <div className='flex gap-5 items-center'>
        <img src="assets/calendar-2.png" alt="" />
          <span>Schedule</span>
        </div>
        <div className='flex gap-5 items-center'>
        <img src="assets/data.svg" alt="" />
          <span>Backup</span>
        </div>
        <div className='flex gap-5 items-center'>
          <img src="assets/setting.png" alt="" />
          <span>Settings</span>
        </div>
        <div className='flex gap-5 items-center'>
        <img src="assets/shut-down.png" alt="" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
