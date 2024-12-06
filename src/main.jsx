import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'



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
      path: '/login',
      element: <h2>Overview</h2>
     }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
