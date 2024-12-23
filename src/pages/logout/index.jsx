import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ( ) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState(false);

    const handleAlertOpen = () => {
      setIsConfirmationModalOpen(true);
  };

  const handleAlertClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleConfirmLogout = async () => {
    setIsConfirmationModalOpen(false);
    try {
      // 1. Clear local storage (or session storage)
      localStorage.removeItem('token'); // Replace 'token' with your key
      sessionStorage.removeItem('user');

      // 2. Clear authentication state (if using state management)
      // Example using a hypothetical context:
      // authContext.logout();

      // 3. Make a request to the server (if needed)
      const response = await fetch('/api/logout', { // Replace '/api/logout' with your endpoint
          method: 'POST', // Or GET, depending on your API
      });

      if (!response.ok){
          throw new Error("logout failed")
      }
      // 4. Navigate to the login page (or home page)
      navigate("/");
  } catch (error) {
      console.error("Logout error:", error);
      // Handle errors (e.g., display an error message to the user)
      alert("Logout failed. Please try again later.")
  }
  };

  const navigate = useNavigate();

  return (
    <Box sx={{width: "100%"}}>
      <Typography onClick={handleAlertOpen} className="cursor-pointer">Logout</Typography>
      {/*  notification */}
      {isConfirmationModalOpen && (
        <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0 bg-[#D9D9D9] bg-opacity-75">
          {/* Modal */}
          <div className="bg-[#FFFFFF] relative shadow-xl w-[326px] lg:w-[546px] h-[221px] rounded-[10px] flex flex-col gap-6 items-center justify-center">
            <Typography variant="body1" className="text-[#0C0C0C]">
              Are you sure you want to log out?
            </Typography>

            <div className="flex justify-center gap-[20px] cursor-default">
              <Typography
                variant="body1"
                onClick={handleConfirmLogout}
                className=" text-[#60ABFF] cursor-pointer"
              >
                Logout
              </Typography>

              <Typography
                variant="body1"
                onClick={handleAlertClose}
                className=" text-[#0C0C0CB2] cursor-pointer"
              >
                Cancel
              </Typography>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Logout;
