import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import SignUp from './pages/SignUpPage.jsx';
import Login from './pages/LoginPage.jsx';
import Profile from './pages/ProfilePage.jsx';
import AdoptDogPage from './pages/AdpotDogPage.jsx';
import DogInfoPage from './pages/DogInfoPage.jsx';

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
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile/:userId',
        element: <Profile />
      },
      {
        path: '/adopt/danes',
        element: <AdoptDogPage />
      },
      {
        path: '/adopt/:petId',
        element: <DogInfoPage />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
