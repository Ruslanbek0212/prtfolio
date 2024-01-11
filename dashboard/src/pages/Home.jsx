import React from 'react'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className='flex items-start bg-[#F5F5F5]'>
      <Aside />
      <Navbar />
    </div>
  )
}
