import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import  {Home}  from './assets/Component/Home'
import  {Navbar}  from './assets/Component/Navbar'
import {Dashboard} from './assets/Component/Dashboard'
const router = createBrowserRouter(
[
  {
    path: '/',
    element:<div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: '/dashboard',
    element:<div>
      <Navbar />
      <Dashboard/>
    </div>
  },
]
)
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
