import React from 'react'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'

export default function SellCars() {
    return (
        <div className='flex items-start bg-[#F5F5F5]'>
            <Aside />
            <div className='w-full'>
                <Navbar />
                <div className='m-[30px] bg-white p-[30px] rounded-[10px]'></div>
            </div>
        </div>
    )
}
