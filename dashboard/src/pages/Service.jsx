import React from 'react'
import Aside from '../components/Aside'
// import Home from './Home'
// import { icons } from '../utilits/icons'
// import ava1 from '../Assets/Image/ava1.png'
// import group1 from '../Assets/Image/group1.png'
// import ava2 from '../Assets/Image/ava2.png'
// import viewed from '../Assets/Image/viewed.png'
// import ava3 from '../Assets/Image/ava3.jpg'
// import ava4 from '../Assets/Image/ava4.jpg'
// import ava5 from '../Assets/Image/ava5.jpg'
// import ava6 from '../Assets/Image/ava6.jpg'
// import ava7 from '../Assets/Image/ava7.jpg'
// import profile from '../Assets/Image/profile.jpg'
import Navbar from '../components/Navbar'

export default function Service() {
    return (
        <div className='flex items-start bg-[#F5F5F5]'>
            <Aside/>
            <div className='w-full'>
                <Navbar/>
                <div className='m-[30px] bg-white p-[30px] rounded-[10px]'></div>
            </div>
        </div>
        // <div className='flex items-start bg-[#F5F5F5]'>
        //     <Aside />
        //     <div className='w-full'>
        //         <Navbar />
        //         <div className='m-[30px] bg-white p-[30px] rounded-[10px] flex'>
        //             <div className='w-[300px] h-[830px] rounded-[5px]'>
        //                 <div className='flex justify-between mr-[12px]'>
        //                     <h1 className='text-signTitle mt-[20px] ml-[5px]'>Messages</h1>
        //                     <button type='button' className='mt-[6px]'>{icons.edit}</button>
        //                 </div>
        //                 <div className='mt-[30px] relative'>
        //                     <input type="text" placeholder='Search...' className='py-[13px] pl-[53px] pr-[60px] ml-[5px] border-none rounded-[8px] bg-[#F5F5F5] outline-none ' />
        //                     <button type='button' className='absolute left-[17px] top-[13px] '>{icons.search}</button>
        //                 </div>
        //                 <div className='mt-[40px]'>
        //                     <div className='flex'>
        //                         <p><span>{icons.picker}</span></p>
        //                         <h5 className='flex text-serviceTitle text-Cgray ml-[5px] mt-[10px]'>PINNED</h5>
        //                     </div>
        //                     <div className='mt-[8px]'>
        //                         <div className='flex items-center relative cursor-pointer hover:bg-[#F5F5F5] rounded-[10px]'>
        //                             <img src={ava1} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                             <p className='absolute left-[48px] top-[46px]'>{icons.activenow}</p>
        //                             <div className='ml-[15px] mt-[5px] flex'>
        //                                 <div className='mt-[10px]'>
        //                                     <h3 className='text-serviceSubTitle text-Cblack'>Killan James</h3>
        //                                     <p className='text-subTittle2 text-[#258C60] pt-[13px]'>Typing...</p>
        //                                 </div>
        //                                 <div className='ml-[60px] items-center'>
        //                                     <p className='mt-[2px] text-Cgray text-menu'>4:30 PM</p>
        //                                     <img src={group1} alt="group1" className='mt-[5px] ml-[35px]' />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='flex items-center relative mt-[5px] cursor-pointer hover:bg-[#F5F5F5] rounded-[10px]'>
        //                             <img src={ava2} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                             {/* <p className='absolute left-[37px] top-[46px]'>{icons.activenow}</p> */}
        //                             <div className='ml-[15px] mt-[5px] flex'>
        //                                 <div className='mt-[10px]'>
        //                                     <h3 className='text-serviceSubTitle text-Cblack'>Desian Tam</h3>
        //                                     <p className='text-subTittle2 text-Cblack pt-[12px]'>Hello! Everyone</p>
        //                                 </div>
        //                                 <div className='ml-[60px] items-center'>
        //                                     <p className='mt-[2px] text-Cgray text-menu'>9:36 AM</p>
        //                                     <img src={viewed} alt="group1" className='mt-[8px] ml-[35px]' />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='flex items-center relative mt-[5px] cursor-pointer hover:bg-[#F5F5F5] rounded-[10px]'>
        //                             <img src={ava3} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                             {/* <p className='absolute left-[37px] top-[46px]'>{icons.activenow}</p> */}
        //                             <div className='ml-[15px] mt-[5px] flex'>
        //                                 <div className='mt-[10px]'>
        //                                     <h3 className='text-serviceSubTitle text-Cblack'>Ahmed Medi</h3>
        //                                     <p className='text-subTittle2 flex text-Cblack pt-[12px]'>Wow really Cool <span className=''>🔥</span></p>
        //                                 </div>
        //                                 <div className='ml-[60px] items-center'>
        //                                     <p className='mt-[2px] ml-[-13px] text-Cgray text-menu'>1:15 AM</p>
        //                                     {/* <img src={group1} alt="group1" className='mt-[8px] ml-[35px]' /> */}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className='mt-[30px]'>
        //                         <div className='flex items-center'>
        //                             <p><span>{icons.messages}</span></p>
        //                             <h5 className='flex text-subTitile text-Cgray ml-[5px]'>All Message</h5>
        //                         </div>
        //                         <div className='mt-[18px]'>
        //                             <div className='flex items-center relative cursor-pointer hover:bg-[#F5F5F5] rounded-[10px]'>
        //                                 <img src={ava4} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                                 {/* <p className='absolute left-[37px] top-[46px]'>{icons.activenow}</p> */}
        //                                 <div className='ml-[15px] mt-[5px] flex'>
        //                                     <div className='mt-[10px]'>
        //                                         <h3 className='text-serviceSubTitle text-Cblack'>Claudia Maudi</h3>
        //                                         <p className='text-subTittle2 text-Cgray pt-[13px]'>Nice</p>
        //                                     </div>
        //                                     <div className='ml-[60px] items-center'>
        //                                         <p className='mt-[2px] text-Cgray text-menu ml-[-9px]'>4:30 PM</p>
        //                                         {/* <img src={group1} alt="group1" className='mt-[5px] ml-[35px]' /> */}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='flex items-center relative cursor-pointer mt-[5px] hover:bg-[#F5F5F5] rounded-[10px]'>
        //                                 <img src={profile} alt="profile" className='rounded-[50%] mt-[15px] mb-[10px] ml-[10px]' />
        //                                 <p className='absolute left-[47px] top-[48px]'>{icons.activenow}</p>
        //                                 <div className='ml-[15px] mt-[5px] flex'>
        //                                     <div className='mt-[10px]'>
        //                                         <h3 className='text-serviceSubTitle text-Cblack'>Novita</h3>
        //                                         <p className='text-subTittle2 text-Cgray pt-[13px]'>yah, nice design</p>
        //                                     </div>
        //                                     <div className='ml-[60px] items-center'>
        //                                         <p className='mt-[2px] text-Cgray text-menu'>4:30 PM</p>
        //                                         <img src={group1} alt="group1" className='mt-[5px] ml-[35px]' />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='flex items-center relative cursor-pointer mt-[5px] hover:bg-[#F5F5F5] rounded-[10px]'>
        //                                 <img src={ava5} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                                 <p className='absolute left-[47px] top-[47px]'>{icons.activenow}</p>
        //                                 <div className='ml-[15px] mt-[5px] flex justify-between'>
        //                                     <div className='mt-[10px]'>
        //                                         <h3 className='text-serviceSubTitle text-Cblack'>Milie Nose</h3>
        //                                         <p className='text-subTittle2 text-Cgray pt-[13px]'>Awesome 🔥</p>
        //                                     </div>
        //                                     <div className='ml-[80px] items-center'>
        //                                         <p className='mt-[2px] text-Cgray text-menu'>8:20 PM</p>
        //                                         <img src={group1} alt="group1" className='mt-[5px] ml-[35px]' />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='flex items-center relative cursor-pointer mt-[5px] hover:bg-[#F5F5F5] rounded-[10px]'>
        //                                 <img src={ava6} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                                 {/* <p className='absolute left-[37px] top-[46px]'>{icons.activenow}</p> */}
        //                                 <div className='ml-[15px] mt-[5px] flex'>
        //                                     <div className='mt-[10px]'>
        //                                         <h3 className='text-serviceSubTitle text-Cblack'>Ikhsan SD</h3>
        //                                         <p className='text-subTittle2 flex items-center text-Cgray pt-[13px]'><span className='mr-[2px]'>{icons.voice}</span>Voice message</p>
        //                                     </div>
        //                                     <div className='ml-[42px] items-center'>
        //                                         <p className='mt-[-2px] text-Cgray text-menu'>yesterday</p>
        //                                         {/* <img src={group1} alt="group1" className='mt-[5px] ml-[35px]' /> */}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className='flex items-center relative cursor-pointer mt-[5px] hover:bg-[#F5F5F5] rounded-[10px]'>
        //                                 <img src={ava7} alt="ava" className='rounded-[50%] mt-[10px] mb-[10px] ml-[10px]' />
        //                                 <p className='absolute left-[47px] top-[48px]'>{icons.activenow}</p>
        //                                 <div className='ml-[15px] mt-[5px] flex'>
        //                                     <div className='mt-[10px]'>
        //                                         <h3 className='text-serviceSubTitle text-Cblack'>Aditya</h3>
        //                                         <p className='text-subTittle2 text-Cgray pt-[13px]'>publish now</p>
        //                                     </div>
        //                                     <div className='ml-[72px] items-center'>
        //                                         <p className='mt-[-2px] text-Cgray text-menu'>yesterday</p>
        //                                         <img src={viewed} alt="viewed" className='mt-[10px] ml-[35px]' />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='mt-[30px] ml-[35px] border border-solid border-Cgray w-[800px] h-[840px] rounded-[10px]'>
        //                 <div className='border border-solid border-Cgray rounded-[10px] flex justify-between'>
        //                     <div className='ml-[23px] py-[17px] flex'>
        //                         <img src={ava1} alt="ava" className='rounded-[50%]' />
        //                         <p className='absolute left-[685px] top-[222px]'>{icons.activenow}</p>
        //                         <div className='ml-[13px]'>
        //                             <h5 className='text-menu text-Cdark mt-[5px]'>Killan James</h5>
        //                             <p className='text-serviceTitle text-Cprimarygray mt-[12px]'>Active Now</p>
        //                         </div>
        //                     </div>
        //                     <div className='py-[17px] mr-[25px]'>
        //                         <ul className='items-center grid grid-cols-3 gap-[10px] mt-[10px] cursor-pointer'>
        //                             <li className='w-[40px] h-[40px] rounded-[50%] bg-GrayDark relative'>
        //                                 <span className='absolute top-[8px] left-[8px]'>{icons.video}</span>
        //                             </li>
        //                             <li className='w-[40px] h-[40px] rounded-[50%] bg-GrayDark relative'>
        //                                 <span className='absolute top-[9px] left-[8px]'>{icons.phone}</span>
        //                             </li>
        //                             <li className='w-[40px] h-[40px] rounded-[50%] bg-GrayDark relative'>
        //                                 <span className='absolute top-[9px] left-[8px]'>{icons.menu}</span>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}