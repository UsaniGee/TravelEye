import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import DriversList from './pages/driversList/index.jsx'
import Root from './layouts/Root.jsx'
import DriverProfile from './pages/driverProfile/index.jsx'
import Cars from './pages/cars/index.jsx'
import Settings from './pages/settings/index.jsx'
import Schedule from './pages/schedule/index.jsx'
import Backup from './pages/backup/index.jsx'
import Logout from './pages/logout/index.jsx'
import SignIn from './pages/signinPage/index.jsx'
import Signup from './pages/onboarding/index.jsx'
import MerchantOnboardingStepTwo from './pages/onboarding/stepTwo/index.jsx'
import MerchantOnboardingStepThree from './pages/onboarding/stepThree/index.jsx'
import GlobalProvider from './context/globalContext/index.jsx'
import ProtectedRoute from './components/protectedRoute/index.jsx'



const router = createHashRouter([
  {
    
    path: "/",
    element: <Root />,
    children: [
     {
      path: '/',
      element: <SignIn />
     },
     {
      path: '/signup',
      element: <Signup />
     },
     {
      path: '/merchantsteptwo',
      element: <MerchantOnboardingStepTwo />
     },
     {
      path: '/merchantstepthree',
      element: <MerchantOnboardingStepThree />
     },
     {
      path: '/home',
      element: 
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
     },
     {
      path: '/driverslist',
      element: 
      <ProtectedRoute>
        <DriversList />
      </ProtectedRoute>
      
     },
     {
      path: '/driverprofile/:id',
      element:
      <ProtectedRoute>
          <DriverProfile />  
      </ProtectedRoute>
      
     
     },
     {
      path: '/cars',
      element: 
      <ProtectedRoute>
          <Cars />
      </ProtectedRoute>
      
     },
     {
      path: '/schedule',
      element: 
      <ProtectedRoute>
          <Schedule />
      </ProtectedRoute>
      
      
     },
    {
      path: "/backup",
      element: 
      <ProtectedRoute>
          <Backup />
      </ProtectedRoute>
      
    },
     {
      path: '/settings',
      element: 
      <ProtectedRoute>
           <Settings />
      </ProtectedRoute>
      
     
     },    
     {
      path: '/logout',
      element: 
      <ProtectedRoute>
           <Logout />
      </ProtectedRoute>
      
     },    
  
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} /> 
    </GlobalProvider>
  </StrictMode>,
)
