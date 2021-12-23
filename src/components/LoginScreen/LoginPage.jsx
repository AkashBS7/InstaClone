import React from 'react'
import googlePng from '../../assets/gstore.png';
import appstorePng from '../../assets/appstore.png'

import './LoginPage.css'

export default function LoginPage() {
    return (
        <div className='bg-gray-100 flex justify-center items-center flex-col w-full h-screen'>

            <div className='px-12 mt-10 bg-white flex justify-center items-center flex-col mb-5 border rounded-md shadow-md'>
                <div className='my-4'><img src="https://see.fontimg.com/api/renderfont4/ZVGqm/eyJyIjoiZnMiLCJoIjoxMDgsInciOjEyNTAsImZzIjo4NiwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/SW5zdGFncmFt/amsterdam.png" alt="Instagram" width={155} height={155}/></div>
                <div className='flex flex-col '>
                    <input type='text' className='border h-10 w-64 rounded bg-gray-100 mb-2'placeholder='Phone number, username, or email'/>
                    <input type='text' className='border h-10 w-64 rounded bg-gray-100 mb-4' placeholder='Password'/>
                </div>
                <div>
                    <button className='LoginBtn w-64 h-8 rounded text-white mb-8'>Log In</button>
                </div>

                <div className="relative mb-6 flex items-center w-full">
                    <span className='h-px bg-gray-300 w-full mr-2'></span>OR<span className='h-px bg-slate-300 w-full ml-2'></span>
                </div>

                <div>
                    <p className='fbtxt text-md mb-6'><p className="fa fa-facebook"></p>Log in with Facebook</p>
                </div>

                <p className='text-xs mb-8'>Forgot password?</p>
            </div>

            <div className='px-16 bg-white h-16 flex justify-center items-center border rounded-md shadow-md'>
                <p className='flex'>Don't have an account? <p className='ml-2 text-blue-600 font-medium'>Sign up</p></p>
            </div>

            <div className='my-4'>Get the app.</div>

            <div className='flex'>
                <img src={appstorePng} alt='appstore' width={120} height={50} className='mr-4 shadow-md'/>
                <img src={googlePng} alt='googlestore' width={120} height={50} className='shadow-md'/>
            </div>
        </div>
    )
}
