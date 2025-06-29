import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ScrollTop from './Component/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
)
