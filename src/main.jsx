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



const router = createHashRouter([
  {
    
    path: "/",
    element: <Root />,
    children: [
     {
      path: '/',
      element: <App />
     },
     {
      path: '/driverslist',
      element: <DriversList />
     },
     {
      path: '/driverprofile/:id',
      element: <DriverProfile />
     },
     {
      path: '/cars',
      element: <Cars />
     },
     {
      path: '/settings',
      element: <Settings />
     },    
     {
      path: '/schedule',
      element: <Schedule />
     },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
