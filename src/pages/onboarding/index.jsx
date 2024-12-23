import {  IconButton, InputAdornment, TextField, Typography, Button, Box } from '@mui/material'
import { React, useState } from 'react'
import {  Lock, Visibility, VisibilityOff } from "@mui/icons-material";
// import Button from '../../components/button'
import { Link } from 'react-router-dom';
import { checkPasswordStrength } from '../../utils/checkpassword';




const Signup = () => {
  const [step, setStep] = useState(1)
  const TOTAL_STEP = 3
  const [showPassword, setShowPassword] = useState()
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [phoneNumberValid, setPhoneNumberValid] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState ({
    message: String,
    isStrong: Boolean
  }, null) 

  const onPasswordChange = (e) => {
    const value = e.target.value;
    setPasswordErrorMessage(checkPasswordStrength(value));
    setClientData((prev) => ({ ...prev, password: value }));
  };

  const [clientData, setClientData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    merchantName: "",
    phoneNumber: "",
    address: "",
    businessName: "",
    businessPhoneNumber: "",
    businessAddress: "",
    bussinwssAddress: "",
  });

  const handleBack = () => setStep((prev) => prev - 1);
  
  

  const isStep1Valid = () => {
    return (
        clientData.email.trim() !== '' &&
        clientData.password &&
        passwordErrorMessage?.isStrong
    );
  };

  const isStep2Valid = () => {
    return (
       clientData.password
    );
  };

  // const isStep3Valid = () => {
  //   return (
  //      clientData.businessName
  //   );
  // };


  const submitIndividualDetails = (e) => {
    e.preventDefault();
    if (step < TOTAL_STEP) {
      setStep((prev) => prev + 1);
    } else {
      // Handle final step submission (potentially send reset request)
      
      if (isStep3Valid()) { 
        // console.log('Submit final step data:', clientData);
        // If all conditions are met, navigate to signup
        navigate("/"); 
      }
      
    }
  };


  const renderStep1 = () => (

    <Box >
      <div className='font-bold'>
            <h1 className='lg:text-[60px] lg:leading-[50px] mb-3'>Thanks for choosing Transport Eye</h1>
            <p>Lets set up your account</p>
       </div>
       <form onSubmit={submitIndividualDetails}>
       <div>
       <Typography
              sx={{ color: "#83898C", paddingBottom: "12px" }}
            >
              Email <span style={{ color: "#FF6C6C" }}>*</span>
            </Typography>
            <TextField
             sx={{width: "100%"}}
             name='email'
             placeholder='type your email'
             value={clientData.email}
             onChange={(e) =>
              setClientData({ ...clientData, email: e.target.value })
            }
            required
            type='email'
              />
       </div>

       <div className="">
        <Typography
              sx={{ color: "#83898C", paddingBottom: "12px", paddingTop: "12px"  }}
            >
              Password <span style={{ color: "#FF6C6C" }}>*</span>
            </Typography>
            <TextField
            sx={{width: "100%"}}
            name='passsword'
            value={clientData.password}
            onChange={onPasswordChange}
            required
            type={showPassword ? "text" : "password"}
            placeholder='type your password'
            error={
              passwordErrorMessage === null
                ? false
                : !passwordErrorMessage.isStrong
            }
            helperText={passwordErrorMessage?.message}
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

<div className='flex flex-col items-center justify-center gap-5 mt-5'>
        <p>I agree to the <span className='text-blue-500 hover:underline'>term of use</span>  and <span className='text-blue-500 hover:underline'>privacy policy</span> </p>
        {/* <Button image={""} title={""}  style={"w-[360px] border rounded-[25px] p-3 flex flex-row-reverse items-center justify-center gap-3"}/> */}
        <Button
        sx={{border:"3px"}}
        >
          <img src="public/assets/_Google Logo Icon.png" alt="" />
          Continue with Google
        </Button>
        <div>
            <p>Already have an account?  
                <Link to={"/"}>
                <span className='text-blue-500 hover:underline'> Login</span>
                </Link>
            </p>

        </div>
        <Button
        sx={{
          width: "200px",
          backgroundColor: "#60ABFF",
          color: "#fff",
          fontWeight: "700",
          textTransform: "none",
          padding: "18px 0",
          borderRadius:"25px 25px ",
          "&.Mui-disabled": {
            backgroundColor: "#7979794F",
            color: "white",
          },
        }}
        type="submit"
        disabled={!isStep1Valid()}
      >
        Next
      </Button>
        </div>
          </div> 
       </form>
    </Box>
     
    )

    const renderStep2 = () => (
     
       
      <div >
    
    <form className='flex flex-col  justify-center gap-10' onSubmit={submitIndividualDetails}>
      <div className='text-2xl font-bold'>
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
          
       
       <div className='flex items-center justify-end gap-3'>   
         
       <Button
        sx={{
          width: "200px",
          backgroundColor: "#60ABFF",
          color: "#fff",
          fontWeight: "700",
          textTransform: "none",
          padding: "18px 0",
          borderRadius:"25px 25px ",
          "&.Mui-disabled": {
            backgroundColor: "#7979794F",
            color: "white",
          },
        }}
        type="submit"
        disabled={!isStep2Valid()}
      >
        Next
      </Button>
        </div>
      </form>
      </div>
    
    )

    const renderStep3 = () => (
      <div className='w-full'>
      
      <form className='flex flex-col justify-center gap-10' onSubmit={submitIndividualDetails}>
      <div className=' text-2xl font-bold'>
            Please fill in your details
        </div>
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Business Name'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Business Phone Number'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Business Address'
              />
       </div>          
       <div>
            <TextField
             sx={{width: "100%"}}
             label='Business registration number'
              />
       </div>        
       

       <div className='flex items-center justify-end gap-10'>        
     
      
       {/* <Button
        sx={{
          width: "200px",
          backgroundColor: "#60ABFF",
          color: "#fff",
          fontWeight: "700",
          textTransform: "none",
          padding: "18px 0",
          borderRadius:"25px 25px ",
          "&.Mui-disabled": {
            backgroundColor: "#7979794F",
            color: "white",
          },
        }}
        onClick={handleBack}
      >
       Back
      </Button>      */}

      <button  className='w-[200px] bg-[#60ABFF] py-[18px] text-[#fff] rounded-[25px]' onClick={handleBack}>Back</button>
      <Button
        sx={{
          width: "200px",
          backgroundColor: "#60ABFF",
          color: "#fff",
          fontWeight: "700",
          textTransform: "none",
          padding: "18px 0",
          borderRadius:"25px 25px ",
          "&.Mui-disabled": {
            backgroundColor: "#7979794F",
            color: "white",
          },
        }}
        type="submit"
        // disabled={!isStep3Valid()}
      >
        Submit
      </Button>
        </div>
      </form>
      </div>
    )


    const renderImage1 = () => (
      <div className='hidden lg:block'>
         <img className=' h-[500px] w-full object-cover' src="assets/toyota 1.png" alt="" />
      </div>
    )
    const renderImage2 = () => (
      <div className='hidden lg:block'>
         <img className=' h-[400px] w-full object-cover' src="public/assets/image.png" alt="" />
      </div>
    )
    const renderImage3 = () => (
      <div className='hidden lg:block'>
         <img className=' h-[400px] w-full object-cover' src="public/assets/image.png" alt="" />
      </div>
    )

  return (
    <div className='lg:flex lg:w-full'>
      <div className='p-10 lg:p-0 lg:pl-[100px] lg:py-10 lg:w-1/2'>
      {step === 1 ? renderStep1() : step === 2 ? renderStep2() : renderStep3() }
      </div>
      <div className='hidden lg:w-1/2 lg:pl-[100px] lg:flex lg:items-center lgjustify-end'>
      {step === 1 ? renderImage1() : step === 2 ? renderImage2() : renderImage3() }
      </div>
    </div>
  )
}

export default Signup

