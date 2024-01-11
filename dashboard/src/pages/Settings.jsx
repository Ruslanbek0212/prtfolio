import React, { useState } from 'react'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import MyDetails from '../components/MyDetails'
import Password from '../components/Password'
import Email from '../components/Email'
import Notification from '../components/Notification'

export default function Settings() {

  const tabsMenu = ['My details', 'Profile', 'Password', 'Email', 'Notification']
  const [activeTabs, setActiveTabs] = useState('Profile')

  return (
    <div className='flex items-start bg-[#F5F5F5]'>
      <Aside />
      <div className='w-full'>
        <Navbar />
        <div className='m-[30px] bg-white p-[30px] rounded-[10px]'>
          <h1 className='text-signTitle'>Settings</h1>
          <ul className='mt-[30px] grid grid-cols-5'>
            {
              tabsMenu.map((element, value) => {
                return (
                  <li key={value} onClick={() => setActiveTabs(element)}><button type='button' className={activeTabs === element ? 'py-[20px] px-[14px] text-Cgray text-settingTitle rounded-[5px] bg-GrayDark' :
                    'py-[20px] px-[14px] text-Cgray text-settingTitle rounded-[5px]'}>{element}</button></li>
                )
              })
            }

            <MyDetails title={activeTabs} />
            <Profile title={activeTabs} />
            <Password title={activeTabs} />
            <Email title={activeTabs} />
            <Notification title={activeTabs} />
          </ul>
        </div>
      </div>
    </div>
  )
}