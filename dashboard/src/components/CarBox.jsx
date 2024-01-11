import React from 'react'
import { icons } from '../utilits/icons'
import copper from '../Assets/Image/cooper.png'
import carrera from '../Assets/Image/porsh-carrera.png'
import porsh from '../Assets/Image/car-porsh.png'

function CarBox() {
  return (
    <div className='w-[360px] w-[100hv] ml-[10px] lg:ml-[41px] grid  gap-[20px] lg:w-full lg:grid lg:grid-cols-3 lg:gap-[29px] '>
        <div className="w-[318px] h-[236px] py-[15px] px-[27px] bg-tertiary rounded-[14px] ">
            <p className='flex mb-[15px]'>{icons.recommend}<span className='ml-[10px] text-serviceSubTitle text-dark1 ' >64% Recommend</span></p>
            <div className='w-[257px] h-[106] '>
                <img src={copper} alt="" />
            </div>
            <h3 className='my-[10px] text-signBtn text-Cdark1'>Mini Cooper</h3>
            <p className='flex items-center text-menu2 text-Cgraydark '  ><span className='mr-[16px]'>{icons.refresh}</span>132K <span className='ml-[16px] '>{icons.star}</span><span className='ml-[16px] '>{icons.lightning} </span> <span className='ml-[95px] ' >$32/h</span> </p>
        </div> 
        <div className="w-[318px] h-[236px] py-[15px] px-[27px] bg-Lightblue rounded-[14px] ">
            <p className=' flex mb-[15px]'>{icons.recommend}<span className='ml-[10px] text-serviceSubTitle text-dark1 ' >74% Recommend</span></p>
            <div className='w-[257px] h-[106] '>
                <img src={carrera} alt="" />
            </div>
            <h3 className='my-[10px] text-signBtn text-Cdark1'>Porsche 911 Carrera</h3>
            <p className=' flex items-center text-menu2 text-Cgraydark '  ><span className='mr-[16px]'>{icons.refresh}</span>130K <span className='ml-[16px] '>{icons.star}</span><span className='ml-[16px] '>{icons.lightning} </span> <span className='ml-[95px] ' >$28/h</span> </p>
        </div> 
        <div className="w-[318px] h-[236px] py-[15px] px-[27px] bg-Lightgray rounded-[14px]  ">
            <p className=' flex mb-[15px]'>{icons.recommend}<span className='ml-[10px] text-serviceSubTitle text-dark1 ' >74% Recommend</span></p>
            <div className='w-[257px] h-[106] '>
                <img src={porsh} alt="" />
            </div>
            <h3 className='my-[10px] text-signBtn text-Cdark1'>Porsche 911 Carrera</h3>
            <p className=' flex items-center text-menu2 text-Cgraydark '  ><span className='mr-[16px]'>{icons.refresh}</span>130K <span className='ml-[16px] '>{icons.star}</span><span className='ml-[16px] '>{icons.lightning} </span> <span className='ml-[95px] ' >$28/h</span> </p>
        </div> 
      
    </div>
  )
}

export default CarBox