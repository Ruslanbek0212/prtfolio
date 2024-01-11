import React, { useContext, useEffect } from 'react'
import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import RadialBox from '../components/RadialBox'
import Api from '../api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { userError, userSuccess } from '../redux/Action'
// eslint-disable-next-line no-unused-vars
import SellCars from './SellCars'
import ColumnBox from '../components/ColumnBox'
import CarBox from '../components/CarBox'
import { Contexts } from '../context/Contexts'

export default function Dashboard() {
  
  const {darkMode} = useContext(Contexts)

  // eslint-disable-next-line no-unused-vars
  const { user, loadingStatus} = useSelector(state => state.reducer)  

  const request = Api()

  const dispatch = useDispatch()

  useEffect(() => {
    request('http://localhost:9000/user')
    .then(data => dispatch(userSuccess(data)))
    .catch(err => dispatch(userError(err)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(loadingStatus);

  return (
    <div className={darkMode ? 'w-[360px] lg:w-full h-[100hv] flex items-start bg-Cblack': 'w-[360px] lg:w-full h-[100hv] flex items-start bg-[#F5F5F5]'}>
      <Aside  />
      <div className='w-[360px] lg:w-full'>
        <Navbar />
        <RadialBox/>
        <ColumnBox/>
        <CarBox/>
      </div>
    </div>
  )
}
