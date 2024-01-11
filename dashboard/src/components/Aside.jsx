import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../utilits/icons'
import { menu, subMenu } from '../utilits/menu'
import { Contexts } from '../context/Contexts'
import Search from './Search'

export default function Aside() {
    const { darkMode, activeAside } = useContext(Contexts)
    return (
        <aside className={activeAside ? 'z-20 lg:relative lg:w-[240px] lg:top-0 lg:left-0 w-full h-full border-t-2 bg-Cprimarydark border-solid border-Cgray lg:border-none fixed top-[70px] left-[0%] duration-100 delay-100'
         : 'w-[360px] h-[100hv] lg:w-[240px] lg:border-none fixed z-10 top-[70px] left-[-200%] lg:relative lg:top-0 lg:left-0 bg-white duration-100 delay-100'}>
            <div className={darkMode ? 'w-full h-full py-[30px] bg-Cprimarydark px-[24px]' : 'w-full bg-white h-full py-[30px] px-[24px]'}>
                {activeAside ? <Search/> : '' }
                <Link to={'/dashboard'} className='hidden lg:flex items-center '>
                    <span className='bg-Purple p-[6px] block rounded-[6px]'>{icons.logo}</span>
                    <span className={darkMode ? 'text-logo text-white ml-[15px]' : 'text-logo text-Cblack ml-[15px]'}>Motiv.</span>
                </Link>
                <ul className={darkMode ? 'lg:mt-[35px] ': 'lg:mt-[35px] '}>
                    {
                        menu.map((element, value) => {
                            return <li className={darkMode ? 'bg-Cblack hover:bg-darkActiveMenu mb-[10px] p-[8px] w-full lg:w-[180px] rounded-[6px]' : 'hover:bg-activeMenu mb-[20px] p-[8px] w-full lg:w-[180px] rounded-[6px]'} key={value}>
                                <Link to={element.slug} className='flex items-center text-menu text-Cgray' >{element.icons} <span className='ml-[8px]'>{element.linkName}</span></Link>
                            </li>
                        })
                    }
                </ul>
                <ul className={darkMode ? 'lg:mt-[500px]  ': 'lg:mt-[450px] '}>
                    {
                        subMenu.map((element, value) => {
                            return <li className={darkMode ? 'bg-Cblack hover:bg-darkActiveMenu mb-[10px] p-[8px] w-full lg:w-[180px] rounded-[6px]' : 'hover:bg-activeMenu mb-[20px] p-[8px] w-full lg:w-[180px] rounded-[6px]'} key={value}>
                                <Link className='flex items-center text-menu text-Cgray' >{element.icons} <span className='ml-[8px]'>{element.linkName}</span></Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}
