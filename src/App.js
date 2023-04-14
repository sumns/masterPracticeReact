import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar'
import './App.css'
import Home from './AllRoutes/Home'
import About from './AllRoutes/About'
import Contact from './AllRoutes/Contact'
import Login from './AllRoutes/Login'
const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-page' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App