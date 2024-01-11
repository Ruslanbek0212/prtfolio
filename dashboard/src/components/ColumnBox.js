import React, { useContext, useState } from 'react'
import ColumnStatistics from './ColumnStatistics'
import ForecastStatistic from './ForecastStatistic'
import { Contexts } from '../context/Contexts'

function ColumnBox() {

  const {darkMode} = useContext(Contexts)

  const datesMenu = ['Date', 'Week', 'Month' ]
  const [activeDate, setActiveDate] = useState('Date')
  const [activeDate2, setActiveDate2] = useState('Date')


  return (
    <div className='w-[350px] my-[15px] px-[10px] lg:px-[0px] lg:w-full lg:flex lg:my-[25px]' >
      <div className={darkMode?"w-[330px] mb-[10px] lg:mb-[0] lg:w-[512px] lg:h-[332px] lg:mx-[30px] py-[15px] px-[15px] lg:px-[35px] bg-Cprimarydark rounded-[14px] ":"w-[330px] mb-[10px] lg:mb-[0] lg:w-[512px] lg:h-[332px] lg:mx-[30px] py-[15px] px-[15px] lg:px-[35px] bg-white rounded-[14px] "}>
        <h3 className={darkMode?'text-statisticTitle mb-[24px] text-white ':'text-statisticTitle mb-[24px] '} ><span className='font-bold' >Miles</span>Statistics</h3>
        <div className="flex justify-between items-center text-Cgray">
          <ul className='grid grid-cols-3 lg:gap-[8px] items-center text-subHeading text-Cgray'>
            {
              datesMenu.map((element, value) => <li key={value} onClick={() => setActiveDate(element)}><button type='button' className={activeDate === element ? 'py-[10px] px-[12px] text-white text-subHeading leading-3 rounded-[24px] bg-Cblue' :
              'py-[10px] px-[12px] text-Cgray text-subHeading rounded-[24px] '}>{element}</button></li> )
            }
          </ul>
          <p className='text-subTittle1 '>256 Miles</p>
        </div>
        <ColumnStatistics/>
      </div>
      <div className={darkMode?"w-[330px] lg:w-[512px] lg:h-[332px] lg:mr-[30px] py-[15px] px-[15px] lg:px-[35px] bg-Cprimarydark rounded-[14px]  ":"w-[330px] lg:w-[512px] lg:h-[332px] lg:mr-[30px] py-[15px] px-[15px] lg:px-[35px] bg-white rounded-[14px]  "}>
        <h3 className={darkMode?'text-statisticTitle mb-[24px] text-white ':'text-statisticTitle mb-[24px] '}><span className='font-bold' >Car</span>Statistics</h3>
        <div className="flex justify-between items-center text-Cgray">
          <p className='text-subTittle3 '>20 February 2022</p>
          <ul className={darkMode?'grid grid-cols-3 gap-[8px] items-center text-subHeading text-BgGray rounded-[24px] bg-[#2B2E38]':'grid grid-cols-3 gap-[8px] items-center text-subHeading text-BgGray rounded-[24px] bg-BgGray'}>
            {
              datesMenu.map((element, value) => <li key={value} onClick={() => setActiveDate2(element)}><button type='button' className={activeDate2 === element ? 'py-[10px] px-[12px] text-white text-subHeading leading-3 rounded-[24px] bg-Corange' :
              'py-[10px] px-[12px] text-Cgray text-subHeading rounded-[24px] '}>{element}</button></li> )
            }
          </ul>
        </div>
        <ForecastStatistic/>
      </div>
    </div>
  )
}

export default ColumnBox