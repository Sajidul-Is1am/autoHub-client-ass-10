import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div><Toaster /></div>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
