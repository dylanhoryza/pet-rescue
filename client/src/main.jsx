import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import SignUp from './pages/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <HomePage />

      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
