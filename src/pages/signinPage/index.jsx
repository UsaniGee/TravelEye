import {  IconButton, InputAdornment, TextField } from '@mui/material'
import { React, useState } from 'react'
import {  Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Button from '../../components/button'
import { Link, useNavigate } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';




const SignIn = () => {

    const [showPassword, setShowPassword] = useState()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {handleAuthentication} = useGlobalContext()
    const navigate = useNavigate()
    const handleSubmit = () => {
      // validation of form data

      // after validation, submit data for backend processing

      // if successful, set isAuthenticated true and navigate to home page
      handleAuthentication(true)
      navigate("/home")
    }

  return (
    <div className='flex w-full h-screen'>
      <div className='flex flex-col pl-[100px] justify-center w-[50%] gap-5'>
       <div className='w-[400px]'>
            <h1 className='text-[60px] font-bold leading-[60px] mb-3'>Welcome To Transport Eye</h1>
            <p>Track your cars anywhere in the world using the latest tracking technologies</p>
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
        <Button image={"public/assets/_Google Logo Icon.png"} title={"Continue with Google"}  style={"w-[360px] border rounded-[25px] p-3 flex flex-row-reverse items-center justify-center gap-3"}/>
        <div>
            <p>Dont have an account? 
                <Link to={"/signup"}>
                <span className='text-blue-500 hover:underline'>Sign up</span>
                </Link>
            </p>
           <div onClick={handleSubmit}>
            <Button  title={"Login"} style={"bg-[#60ABFF] w-[200px] p-[15px] rounded-[25px] my-6"}/>
           </div>
                
      
        </div>
        </div>

       
      </div>
      <div className='w-[50%] pl-[100px] flex items-center '>
        <img className=' h-[500px] w-full' src="public/assets/toyota 1.png" alt="" />
      </div>
    </div>
  )
}

export default SignIn

