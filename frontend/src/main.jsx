import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';


import GlobalStyles from './styles/globalStyles'
import { UserProvider } from '../src/hooks/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>
)
