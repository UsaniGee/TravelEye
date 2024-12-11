import {  IconButton, InputAdornment, TextField } from '@mui/material'
import { React, useState } from 'react'
import {  Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Button from '../../components/button'
import { Link } from 'react-router-dom';




const Signup = () => {

    const [showPassword, setShowPassword] = useState()
const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className='flex w-full h-screen'>
      <div className='flex flex-col pl-[100px] justify-center w-[50%] gap-5'>
       <div className='w-[590px] font-bold'>
            <h1 className='text-[60px]  leading-[60px] mb-3'>Thanks for choosing Transport Eye</h1>
            <p>Lets set up your account</p>
       </div>
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Email'
              />
       </div>
        <div className="">
            <TextField
           label='Password'
            sx={{width: "100%"}}
            type={showPassword ? "text" : "password"}
            // id="name"
            // name="name"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="   
                      password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}     
          />
          </div> 
          
          
        <div className='flex flex-col items-center justify-center gap-3'>
        <p>I agree to the <span className='text-blue-500 hover:underline'>term of use</span>  and <span className='text-blue-500 hover:underline'>privacy policy</span> </p>
        <Button image={"public/assets/_Google Logo Icon.png"} title={"Continue with Google"}  style={"w-[360px] border rounded-[25px] p-3 flex flex-row-reverse items-center justify-center gap-3"}/>
        <div>
            <p>Already have an account? 
                <Link to={"/signin"}>
                <span className='text-blue-500 hover:underline'>Login</span>
                </Link>
            </p>

        </div>
            <Link to={"/merchantsteptwo"}>
                <Button title={"Next"} style={"bg-[#60ABFF] w-[200px] p-[15px] rounded-[25px] my-6"}/>
            </Link>
        </div>

       
      </div>
      <div className='w-[50%] pl-[100px] flex items-center '>
        <img className=' h-[500px] w-full' src="public/assets/toyota 1.png" alt="" />
      </div>
    </div>
  )
}

export default Signup

