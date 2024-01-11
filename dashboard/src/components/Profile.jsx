import React from 'react'
import { icons } from '../utilits/icons'
import profile2 from '../Assets/Image/profile2.jpg'

export default function Profile(props) {
  return (
    <div className={props.title === 'Profile' ? 'block' : 'hidden'}>
        <h2 className='mt-[50px] mb-[15px] text-signBtn'>Profile</h2>
          <p className='text-settingSubtitle text-Cgray w-[350px]'>Update your photo and personal details here.</p>
          <div className='mt-[25px] border-b-2 w-[1100px] border-solid border-Cgray'></div>
          <div className='flex'>
            <div className='relative mt-[30px]'>
              <h3 className='text-menu text-Cgray'>Live in</h3>
              <input type="text" placeholder='Zuichi, Switzerland' className='py-[15px] pl-[50px] pr-[200px] mt-[10px] border-2 border-solid outline-none rounded-[10px] border-Cgray' />
              <span className='absolute left-[14px] top-[45px]'>{icons.home}</span>
            </div>
            <div className='relative mt-[30px] ml-[40px]'>
              <h3 className='text-menu text-Cgray'>Street Address</h3>
              <input type="text" placeholder='2445 Crosswind Drive' className='py-[15px] pl-[50px] pr-[200px] mt-[10px] border-2 border-solid outline-none rounded-[10px] border-Cgray' />
              <span className='absolute left-[14px] top-[45px]'>{icons.home}</span>
            </div>
          </div>
          <div className='mt-[33px] relative'>
            <h3 className='text-menu text-Cgray'>Email Address</h3>
            <span className='absolute top-[37px] left-[13px]'>{icons.email}</span>
            <input type="text" placeholder='uihutofficial@gmail.com' className='pl-[48px] py-[15px] pr-[670px] border-2 border-solid border-Cgray outline-none rounded-[10px]' />
          </div>
          <div className='flex mt-[30px]'>
            <div className='relative'>
              <h3 className='text-menu text-Cgray'>Date Of Birth</h3>
              <input type="text" placeholder='07.12.195' className='py-[15px] pl-[50px] pr-[200px] mt-[10px] rounded-[10px] border-2 border-solid border-Cgray outline-none' />
              <span className='absolute left-[14px] top-[45px]'>{icons.dateofbirth}</span>
            </div>
            <div className='relative ml-[40px]'>
              <h3 className='text-menu text-Cgray'>Gender</h3>
              <input type="text" placeholder='Male' className='py-[15px] pl-[50px] pr-[200px] mt-[10px] rounded-[10px] border-2 border-solid border-Cgray outline-none' />
              <span className='absolute left-[14px] top-[45px]'>{icons.gender}</span>
            </div>
          </div>
          <div className='mt-[25px] border-b-2 w-[1100px] border-solid border-Cgray'></div>
          <div className='flex w-[1100px]'>
            <div className='mt-[33px]'>
              <h4 className='text-searchTittle text-Cprimarydark'>Your photo</h4>
              <p className='text-subTittle2 text-Cgray mt-[4px]'>This will be displayed on your profile.</p>
            </div>
            <div className='ml-[73px] flex items-center'>
              <img src={profile2} alt="profile2" className='mt-[25px]' />
              <div className='mt-[23px] ml-[430px]'>
                <button type='button' className='text-menu text-Cgray hover:text-Cprimarypurple'>Delete</button>
                <button type='button' className='ml-[22px] text-menu text-Cgray hover:text-Cprimarypurple'>Update</button>
              </div>
            </div>

          </div>
          <div className='mt-[25px] border w-[1100px] border-solid border-Cgray'></div>
          <div className='mt-[24px] flex'>
            <h4 className='text-searchTittle'>Social Profiles</h4>
            <div className='ml-[330px] m-0'>
              <input type="text" placeholder='facebook.com/' className='py-[13px] pl-[14px] pr-[250px] border-2 border-solid border-Cgray outline-none rounded-[10px]' />
              <input type="text" placeholder='twitter.com/' className='py-[13px] pl-[14px] pr-[250px] mt-[16px] border-2 border-solid border-Cgray outline-none rounded-[10px]'/>
            </div>
          </div>
    </div>
  )
}
