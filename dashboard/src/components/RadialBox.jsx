import React, { useContext } from 'react'
import EllipsStatistics from './EllipsStatistics'
import { icons } from '../utilits/icons'
import EllipsStatisticsto from './EllipsStatisticsto'
import { Contexts } from '../context/Contexts'

export default function RadialBox() {
    const {darkMode} = useContext(Contexts)
    return (
        <div className='px-[10px] mt-[85px] grid grid-cols-2 gap-[14px] lg:grid lg:grid-cols-4 lg:gap-[30px] lg:px-[30px] lg:mt-[30px] '>
            <div className={darkMode?'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-Cprimarydark hover:bg-Purple text-[#BFC3C9] hover:text-white rounded-[14px] cursor-pointer':'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-white hover:bg-Purple hover:text-white rounded-[14px] cursor-pointer'}>
                <div className='w-[35px] h-[35px] mt-[15px] mb-[10px] lg:w-[40px] lg:h-[40px] rounded-[50%] bg-[#A66FF0] m-auto lg:mb-[10px] lg:mt-[20px] relative'>
                    <span className='absolute top-[7px] left-[8px] lg:top-[9px] lg:left-[10px]'>{icons.energy}</span>
                </div>
                <h5 className={'mt-[10px] text-center text-logo'}>Energy</h5>
                <div className='hidden lg:block mt-[-10px]'>
                    <EllipsStatistics title="Energy" amaount="45" lineColor="#fff" lineBg="#B37EFC" bg="#A66FF0" />
                </div>
                <div className='lg:hidden mt-[-10px]'>
                    <EllipsStatisticsto title="Energy" amaount="45" lineColor="#fff" lineBg="#B37EFC" bg="#A66FF0" />
                </div>
            </div>
            <div className={darkMode?'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-Cprimarydark hover:bg-[#ff7e86] text-[#BFC3C9] hover:text-white rounded-[14px] cursor-pointer' :'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-white hover:bg-[#ff7e86] hover:text-white rounded-[14px] cursor-pointer'}>
                <div className='w-[35px] h-[35px] mt-[15px] mb-[10px] lg:w-[40px] lg:h-[40px] rounded-[50%] bg-[#FF7E861A] m-auto lg:mb-[10px] lg:mt-[20px] relative'>
                    <span className='absolute top-[9px] left-[14px] lg:top-[12px] lg:left-[16px]'>{icons.range}</span>
                </div>
                <h5 className='mt-[10px] text-center text-logo'>Range</h5>
                <div className='hidden lg:block mt-[-10px]'>
                    <EllipsStatistics title="Range" amaount="15" lineColor="#ff7e86" lineBg="#F4F5F9" bg="#fff" />
                </div>
                <div className='lg:hidden mt-[-10px]'>
                    <EllipsStatisticsto title="Range" amaount="15" lineColor="#ff7e86" lineBg="#F4F5F9" bg="#fff" />
                </div>
            </div>
            <div className={darkMode?'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-Cprimarydark hover:bg-Purple text-[#BFC3C9] hover:text-white rounded-[14px] cursor-pointer':'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-white hover:bg-Purple hover:text-white rounded-[14px] cursor-pointer'}>
                <div className='w-[35px] h-[35px] mt-[15px] mb-[10px] lg:w-[40px] lg:h-[40px] rounded-[50%] bg-Lightblue m-auto lg:mb-[10px] lg:mt-[20px] relative'>
                    <span className='absolute top-[9px] left-[11px] lg:top-[11.5px] lg:left-[14.5px]'>{icons.breakfuild}</span>
                </div>
                <h5 className='mt-[10px] text-center text-logo'>Break fluid</h5>
                <div className='hidden lg:block mt-[-10px]'>
                    <EllipsStatistics title="Break Fluid" amaount="9" lineColor="#a162f7" lineBg="#F4F5F9" bg="#fff" />
                </div>
                <div className='lg:hidden mt-[-10px]'>
                    <EllipsStatisticsto title="Break Fluid" amaount="9" lineColor="#a162f7" lineBg="#F4F5F9" bg="#fff" />
                </div>
            </div>
            <div className={darkMode?'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-Cprimarydark hover:bg-[#f5d858] text-[#BFC3C9] hover:text-white rounded-[14px] cursor-pointer':'w-[162px] h-[196px] lg:w-[232px] lg:h-[266px] bg-white hover:bg-[#f5d858] hover:text-white rounded-[14px] cursor-pointer'}>
                <div className='w-[35px] h-[35px] mt-[15px] mb-[10px] lg:w-[40px] lg:h-[40px] rounded-[50%] bg-[#F6CC0D1A] m-auto lg:mb-[10px] lg:mt-[20px] relative'>
                    <span className='absolute top-[7px] left-[8px] lg:top-[9px] lg:left-[10px]'>{icons.tirewear}</span>
                </div>
                <h5 className='mt-[10px] text-center text-logo'>Tire Wear</h5>
                <div className='hidden lg:block mt-[-10px]'>
                    <EllipsStatistics title="Tire Wear" amaount="25" lineColor="#f6cc0d" lineBg="#F4F5F9" bg="#fff" />
                </div>
                <div className='lg:hidden mt-[-10px]'>
                    <EllipsStatisticsto title="Tire Wear" amaount="25" lineColor="#f6cc0d" lineBg="#F4F5F9" bg="#fff" />
                </div>
            </div>
        </div>
    )
}
