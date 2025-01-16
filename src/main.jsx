import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, useLocation } from 'react-router-dom'
import { route } from './Routes/Routes.jsx'
import AuthContext from './Context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'



const queryClient = new QueryClient();






createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    

    <AuthContext>
      <QueryClientProvider client={queryClient}>
           
    <RouterProvider router={route}/>
      </QueryClientProvider>

    </AuthContext>



  </StrictMode>,
)
