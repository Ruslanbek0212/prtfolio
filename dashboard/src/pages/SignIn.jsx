import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { icons } from '../utilits/icons'
import { Contexts } from '../context/Contexts'
import Api from '../api/Api'
import { userADD, userLoading } from '../redux/Action'
import { useDispatch } from 'react-redux'

function SignIn() {

  const { showPassword, setShowPassword } = useContext(Contexts)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const request = Api()

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(userLoading)
    const data = { email, password }
    request('http://localhost:9000/user', "POST", JSON.stringify(data))
      .then(data => dispatch(userLoading(data)))

      navigate('/sellcars')
  }

  return (
    <div className='py-[91px] px-[491px] bg-[#F5F5F5] sm:w-full'>
      <h1 className='text-signTitle text-Cprimarydark'>Get’s started.</h1>
      <Link to={'/dashboard'}>
        <button type="button" className='flex py-[10px] px-[20px] border-2 border-solid border-Cprimarypurple hover:bg-Cprimarypurple hover:delay-100 hover:duration-100 rounded-[10px] absolute left-[60px] top-[30px]'><span className='mr-[10px]'>{icons.left}</span>Back</button>
      </Link>
      <div className='flex mt-[20px]'>
        <p className='mr-[6px] mt-[16px] text-signSubTitle text-Cgray'>Don’t have an account?</p>
        <Link to={'/signup'} className='cursor-pointer text-signSubTitle mt-[16px] text-Cprimarypurple'>Sign up</Link>
      </div>

      <div className='mt-[40px] flex'>
        <Link to={'https://mail.google.com'}>
          <button className='py-[18px] px-[30px] flex border-2 border-solid border-[#E6E8EC] hover:border-[#4776D0] bg-white rounded-[8px]'>
            <span className='mr-[12px]'>{icons.google}</span>Sign in with Google</button>
        </Link>
        <Link to={'https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk4MzkzODUyLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D'}>
          <button className='py-[18px] px-[30px] flex border-2 border-solid border-[#E6E8EC] text-white hover:bg-[#6c99f4] bg-[#4776D0] rounded-[8px] ml-[14px]'>
            <span className='mr-[12px]'> {icons.facebook}</span>Sign in with Facebook</button>
        </Link>
      </div>

      <div className='my-[24px] flex'>
        <span className='mr-[14px] mt-[13px]'>{icons.rectangle}</span>
        <p>or</p>
        <span className='ml-[14px] mt-[13px]'>{icons.rectangle}</span>
      </div>

      <div className='bg-white w-[506px] rounded-[10px] shadow-lg'>
        <div className='pl-[20px] pt-[20px] pb-[14px]'>
          <h3 className='text-searchTittle'>Email</h3>
          <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='example@gmail.com' className='py-[19px] pl-[20px] w-[446px] mt-[12px] border-2 border-solid border-[#B1B5C3] rounded-[10px]' />
        </div>

        <div className='pl-[20px] pb-[20px] relative'>
          <h3 className='text-searchTittle'>Password</h3>
          <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='**********'
            className='py-[19px] pl-[20px] w-[446px] mt-[12px] border-2 border-solid border-[#B1B5C3] rounded-[10px]' />
          <div onClick={() => setShowPassword(!showPassword)} className='absolute top-[53px] right-[60px] cursor-pointer'>
            {
              showPassword ? <span>{icons.showPassword}</span> : <span>{icons.hidePassword}</span>
            }
          </div>
        </div>
      </div>

      <div className='mt-[24px] flex justify-between'>
        <div className='flex items-center'>
          <input type="checkbox" className='w-[15px] h-[15px] cursor-pointer' />
          <p className='ml-[13px] text-searchTittle text-[#B1B5C3]'>Remember me</p>
        </div>
        <Link to={'/forgotpassword'}>
          <h5 className='mr-[25px] text-searchTittle text-Cprimarypurple cursor-pointer'>Forgot your password?</h5>
        </Link>
      </div>

      <button onClick={(e) => handleLogin(e)} type='button' className='mt-[30px] py-[18px] px-[230px] border-none bg-Cprimarypurple rounded-[10px] text-white'>Sign in</button>

    </div>
  )
}

export default SignIn