import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import DriversList from './pages/driversList/index.jsx'
import Root from './layouts/Root.jsx'
import DriverProfile from './pages/driverProfile/index.jsx'



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
      path: '/driversList',
      element: <DriversList />
     },
     {
      path: '/driverprofile/:id',
      element: <DriverProfile />
     }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
