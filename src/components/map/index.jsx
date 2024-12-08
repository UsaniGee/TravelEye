import React from 'react'
import SearchBar from '../search'

const Map = () => {
  return (
    <div className=' bg-[#dfe0eb]'>

        <div className='py-10 px-10 flex justify-between'>
            <SearchBar />
            <div className='flex items-center justify-between w-[150px]'>
                <img src="../../../public/assets/vector.png" alt="" />
                <img className='rounded-full' src="../../../public/assets/m header.png" alt="avatar" />
            </div>
        </div>

        <div className='flex gap-10 justify-center mt-10'>
            <div className='flex items-center gap-5'><div className='w-[40px] h-[40px] bg-blue-500 rounded-full'></div><span>Moving</span></div>
            <div className='flex items-center gap-5'><div className='w-[40px] h-[40px] bg-red-500 rounded-full'></div><span>Stopped</span></div>
            <div className='flex items-center gap-5'><div className='w-[40px] h-[40px] bg-green-500 rounded-full'></div><span>Arrived</span></div>
            <div className='flex items-center gap-5'><div className='w-[40px] h-[40px] bg-black rounded-full'></div><span>Wrong Route</span></div>
        </div>
        
       {/* map */}
       <div className='flex flex-col gap-5 s:mb-12 sm:mb-12 md:mb-12 lg:mb-0 xl:mb-0'>

            <div>

            </div>

            <iframe 
            className='w-[100%] h-screen p-5'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.326158152643!2d6.990746784767743!3d4.827788016722936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cf40a3823d37%3A0x143a766549e649b3!2sPort%20Harcourt%20Polo%20Club!5e0!3m2!1sen!2sng!4v1729269955346!5m2!1sen!2sng" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </div>
  )
}

export default Map
