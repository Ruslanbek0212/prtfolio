import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Contexts } from '../context/Contexts'
import { icons } from '../utilits/icons'

function Booking() {
  const [statusDrop, setStatusDrop] = useState(false)
  const {darkMode} = useContext(Contexts)
  return (
    <div className={darkMode ? 'w-[360px] lg:w-full h-[100hv] flex items-start bg-Cblack': 'w-[360px] lg:w-full h-[100hv] flex items-start bg-[#F5F5F5]'}>
      <Aside  />
      <div className='w-[360px] lg:w-full'>
        <Navbar />
        <div className="p-[30px] ">          
          <h1 className={darkMode?" mt-[80px]  mb-[20px] lg:mt-[0px] text-white  text-signTitle":" mt-[80px]  mb-[20px] lg:mt-[0px]  text-signTitle"}>Booking</h1>
          <div className="">
            <div className="">
              <p onClick={() => setStatusDrop(!statusDrop)} className={darkMode?"flex text-serviceTitle text-[#7C7C8D] cursor-pointer":"flex text-serviceTitle text-[#72767C] cursor-pointer"}>
                    Assets{" "}<span className="ml-[11px] ">{icons.dropDown}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking