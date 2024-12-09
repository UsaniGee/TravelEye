import React from 'react'
import { driversList } from "../../context/driversContext/index.js"
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import { IoIosArrowBack } from 'react-icons/io';

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
  return (
    <div className='flex h-screen'>
     <div>
        <Sidebar />
     </div>
     <div className='bg-[#dfe0eb] w-full pt-[49px] pl-[49px]'>
        <div className='flex items-center ' onClick={handleBack}>
        <IoIosArrowBack /> <span>Back</span>
        </div>
        <div className='flex'>
            <img src={avatar} alt="" />
            <div>{name}</div>
        </div>
        <div className='flex gap-10'>
            <div className='bg-white w-[350px] h-[289px] rounded-[25px] flex flex-col items-center p-5'>
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

            <div className='bg-white w-[350px] h-[289px] rounded-[25px] flex flex-col items-center p-5'>
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
        <div className='bg-white flex flex-col items-center mx-10'>
            <Button title={"Assign"} />
            <Button title={"Delete"} style={"border border-red-500"} />

        </div>
     </div>
    </div>
  )
}

export default DriverProfile
