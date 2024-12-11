import {  TextField } from '@mui/material'
import { React } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../components/button';




const MerchantOnboardingStepTwo = () => {


  return (
    <div className='h-screen'>
       
    <div className='flex w-full'>
      <div className='flex flex-col pl-[100px] justify-cente w-[50%] gap-10'>
      <div className='pt-10 text-2xl font-bold'>
            Please fill in your details
        </div>
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Merchant Name'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Phone Number'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Address'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Email'
              />
       </div>          
          
       
       <div className='flex flex-col items-end justify-center gap-3'>        
            <Link to={"/merchantstepthree"}>
                <Button title={"Next"} style={"bg-[#60ABFF] w-[200px] p-[15px] rounded-[25px] my-6"}/>
            </Link>
        </div>
       
      </div>
      <div className='w-[50%] pl-[100px]  pb-5 flex items-center '>
        <img className=' h-[400px] w-full object-cover' src="public/assets/image.png" alt="" />
      </div>
    </div>
    
    </div>
  )
}

export default MerchantOnboardingStepTwo

