import React, { useContext } from 'react'
import { icons } from '../utilits/icons'
import { Contexts } from '../context/Contexts'

export default function Search() {
    const { darkMode, showSearch, setShowSearch  } = useContext(Contexts)
    return (
        <div className={showSearch ? 'border-b-2 border-solid border-Cgray fixed top-0 left-0 w-full h-[70px] lg:relative lg:w-auto lg:h-auto duration-150 delay-150' :
         'fixed top-0 left-[-200%] lg:relative lg:w-auto lg:h-auto lg:left-0 duration-150 delay-150'}>
            <form action=''>
                <button className='left-[14px] absolute top-[50%] translate-y-[-50%]'>{icons.search}</button>
                <input className={darkMode ? 'h-[70px] lg:h-auto duration-100 delay-100 bg-Gray py-[12px] w-[360px] pl-[56px] pr-[14px] text-searchTitle text-white rounded-[8px] focus:outline-none' :
                    'h-[69px] lg:h-auto duration-100 delay-100 bg-CInput py-[12px] w-[360px] pl-[56px] pr-[14px] text-searchTitle text-Cgray bg-[#F5F4F6] rounded-[8px] focus:outline-none'}
                    type="text" placeholder='Search or type' />
            </form>

            <p onClick={() => setShowSearch(false)} className={showSearch ? 'duration-150 delay-150 block w-[30px] h-[30px] fixed top-[20px] right-[30px] lg:hidden' :
             'duration-150 delay-150 block w-[30px] h-[30px] fixed top-[20px] right-[200%] lg:hidden' }>{icons.close}</p>

        </div>
    )
}