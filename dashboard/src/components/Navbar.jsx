import React, { useContext } from 'react'
import Search from './Search'
import { icons } from '../utilits/icons'
import { Contexts } from '../context/Contexts'
import { Link } from 'react-router-dom'
import profile from '../Assets/Image/profile.jpg'

export default function Navbar() {
  const { setDarkMode, darkMode, activeAside, setActiveAside, setShowSearch } = useContext(Contexts)

  return (
    <nav className={darkMode ? 'fixed z-10 top-0 left-0 lg:relative bg-Cprimarydark w-[360px] duration-100 delay-100 lg:w-full py-[15px] px-[15px] lg:px-[30px] bg-CBgdark flex justify-between items-center'
      : 'w-[360px] z-10 fixed lg:relative top-0 left-0  duration-100 delay-100 lg:w-full py-[15px] px-[15px] lg:px-[30px] bg-white flex justify-between items-center'}>
      <Link to={'/dashboard'} className='flex items-center lg:hidden'>
        <span className='bg-Purple p-[6px] block rounded-[6px]'>{icons.logo}</span>
        <span className={darkMode ? 'text-logo text-white ' : 'text-logo text-Cblack ml-[15px]'}>Motiv.</span>
      </Link>
      <Search />
      <div className='flex items-center'>
        <button onClick={() => setDarkMode(!darkMode)} className='ml-[10px]'>
          {
            darkMode ? <span>
              {icons.sun}
            </span> : <span>
              {icons.moon}
            </span>

          }
        </button>
        <button className='mx-[10px] lg:mx-[20px]'>
          {icons.notification}
        </button>
        <Link to={'/signin'}>
          <img src={profile} className='w-[30px] h-[30px] rounded-[50%] cursor-pointer' alt="profile" />
        </Link>
        <button onClick={() => setShowSearch(true)} className='mx-[10px] block lg:hidden 
        '>
          {icons.search}
        </button>
        <button onClick={() => setActiveAside(!activeAside)} className='lg:mx-[20px] block lg:hidden'>
          {icons.bars}
        </button>
      </div>
    </nav>
  )
}
