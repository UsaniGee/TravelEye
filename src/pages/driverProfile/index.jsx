import React, { useState } from 'react'
import { driversList } from "../../context/driversContext/index.js"
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import { IoIosArrowBack } from 'react-icons/io';
import { BsStarFill } from 'react-icons/bs';

const DriverProfile = () => {
    const { id } = useParams();
    const drivers = driversList?.find(driver => {
        return driver.id === parseInt(id)        
    })

    const navigate = useNavigate();
    const handleBack = () => {
            navigate(-1)
    }

    const { avatar, name, status, number, gender, dob, email, address, car, plateNumber, color, route, tripCompleted } = drivers

    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false)

    const handleDeleteNotification = () => {
        setIsConfirmDeleteModalOpen(true)
    }

    const handleConfirmDelete =() =>{ 

    }

    const handleCancelDelete = () => {
        setIsConfirmDeleteModalOpen(false)
    }
 
  return (

    <div className='flex relative '>
     <div>
        <Sidebar />
     </div>

     <div className='bg-[#dfe0eb] w-full   flex flex-col  '>
        <div className='px-5 py-10'>
        <div className='px-[59px  px-10'>
                 <div className='flex items-center gap-3' onClick={handleBack}>
                 <IoIosArrowBack /> <span>Back</span>
                 </div>

                 <div className='flex justify-between my-10 pr-[90px]'>

                     {/* Driver's name and profile */}
                   <div className='flex items-center justify-between w-[250px]'>
                         <img src={avatar} alt="" />
                         <div>{name}</div>
                   </div>

                   {/* Rating */}
                   <div className='text-[#F1C644] flex items-center justify-between text-[40px]  w-[250px] '>
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill className='text-[#D4D4D4]'/>
                     <BsStarFill className='text-[#D4D4D4]'/>         
                   </div>
                 </div>

                 {/* Driver's details */}
                 <div className='flex gap-10 justify-between pr-[50px] mb-9'>
                     <div className='bg-white w-[350px] h-[289px] rounded-[25px] flex flex-col items-center justify-between p-5'>
                         <div className='flex justify-between w-full'>
                             <p>Full Name</p>
                             <p>{name}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Mobile Number</p>
                             <p>{number}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Gender</p>
                             <p>{gender}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Date of Birth</p>
                             <p>{dob}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Email</p>
                             <p>{email}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Address</p>
                             <p>{address}</p>
                         </div>
                     </div>

                     <div className='bg-white w-[350px] h-[289px] rounded-[25px] flex flex-col items-center justify-between p-5'>
                         <div className='flex justify-between w-full'>
                             <p>Status</p>
                             <p>{status}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Car</p>
                             <p>{car}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Plate Number</p>
                             <p>{plateNumber}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Color</p>
                             <p>{color}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Route</p>
                             <p>{route}</p>
                         </div>
                         <div className='flex justify-between w-full'>
                             <p>Trips Complete</p>
                             <p>{tripCompleted}</p>
                         </div>
                     </div>           
                 </div>

        </div>

        <div className='bg-white flex flex-col items-center w-full h-[150px] justify-center gap-5 py-[50px] '>
            <Button title={"Assign"} style={"border rounded-[50px] p-[10px] w-[200px] cursor-not-allowed"}/>
           <div onClick={handleDeleteNotification}>
                <Button title={"Delete"} style={"border border-red-500 text-red-500 rounded-[50px] p-[10px] w-[200px] hover:bg-red-300 cursor-default"} />
           </div>
        </div>
        </div>

        

        {isConfirmDeleteModalOpen && (
            <div className='absolute bg-gray-100 h-full w-[78%] bg-opacity-75 flex items-center justify-center '>
                <div className='bg-white flex flex-col items-center justify-center w-[532px] h-[200px] gap-10'>
                    <div className='cursor-'>
                        Are you sure you want to delete James Taiwo?
                    </div>
                    <div className='flex gap-10 '>
                        <div onClick={handleConfirmDelete}>
                            <Button title={"Yes"} style={"border border-red-500 w-[50px] h-[30px] hover:bg-red-500  hover:text-white"}/>
                         </div>
                        <div onClickCapture={handleCancelDelete}>
                            <Button title={"No"} style={"bg-red-500 w-[50px] h-[30px] text-white"}/>
                        </div>
                    </div>                    
                </div>
            </div>
           )}
     </div>
     
    </div>
  )
}

export default DriverProfile
