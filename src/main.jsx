import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/About.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import Edit from './pages/Edit.jsx'



const router = createBrowserRouter([
    {
      path:'/',
      element: <Home /> 
    },
    {
      path:'/about',
      element: <About />
    },
    {
      path:'view/:id',
      element: <Detail />
    },
    {
      path:'edit/:id',
      element: <Edit />
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
