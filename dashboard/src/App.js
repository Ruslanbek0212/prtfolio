import React, { useState } from 'react'
import Home from './pages/Home'
import { Contexts } from './context/Contexts'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './components/ForgotPassword'
import Settings from './pages/Settings'
import Service from './pages/Service'
import Dashboard from './pages/Dashboard'
import Assets from './pages/Assets'
import Messages from './pages/Messages'
import SellCars from './pages/SellCars'
import Booking from './pages/Booking'

export default function App() {
  const [activeLink, setActiveLink] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeAside, setActiveAside] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [newPassword, setNewPassword] = useState(false)

  return (
    <div className={darkMode ? 'font-dm bg-Cblack h-full' : 'w-[350px] lg:w-full font-dm bg-CBody h-full'}>

      <Contexts.Provider value={{ activeLink, setActiveLink, darkMode, setDarkMode, activeAside, setActiveAside, showSearch, setShowSearch, showPassword, setShowPassword, newPassword, setNewPassword }}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/assets' element={<Assets/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/sellcars' element={<SellCars/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
        </Routes>
      </Contexts.Provider>
    </div>
  )
}
