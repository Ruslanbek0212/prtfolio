import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../utilits/icons'
import { Contexts } from '../context/Contexts'


function ForgotPassword() {
    const { showPassword, setShowPassword, newPassword, setNewPassword } = useContext(Contexts)
    return (
        <div className='py-[91px] px-[491px] bg-[#F5F5F5] relative'>
            <h1 className='text-signTitle text-Cprimarydark'>Get’s started.</h1>
            <Link to={'/signup'}>
                <button type="button" className='flex py-[10px] px-[20px] border-2 border-solid border-Cprimarypurple hover:bg-Cprimarypurple hover:delay-100 hover:duration-100 rounded-[10px] absolute left-[60px] top-[30px]'><span className='mr-[10px]'>{icons.left}</span>Back</button>
            </Link>

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
                    <h3 className='text-searchTittle'>New Password</h3>
                    <input type='password' placeholder='Create new password'
                        className='py-[19px] pl-[20px] w-[446px] mt-[12px] border-2 border-solid border-[#B1B5C3] rounded-[10px]' />
                    <div onClick={() => setNewPassword(!newPassword)} className='absolute top-[341px] right-[39%] cursor-pointer'>
                        {
                            newPassword ? <span>{icons.showPassword}</span> : <span>{icons.hidePassword}</span>
                        }
                    </div>
                </div>

                <div className='pl-[20px] pb-[20px] relative'>
                    <h3 className='text-searchTittle'>Confirm your password</h3>
                    <input type='password' placeholder="Confirm your password"
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
            </div>

            <button type='button' className='mt-[30px] py-[18px] px-[230px] border-none bg-Cprimarypurple rounded-[10px] text-white'>Sign in</button>
        </div>
    )
}

export default ForgotPassword