import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar/navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App