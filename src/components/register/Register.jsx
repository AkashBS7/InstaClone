import { useHistory, useLocation } from "react-router";

import googlePng from '../../assets/gstore.png';
import appstorePng from '../../assets/appstore.png'
import './register.css';

export default function Register() {

    const history = useHistory();

    const handleNavigation = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/'
        })
    }

    return (
        <div className='pb-12 bg-gray-100 flex justify-center items-center flex-col'>

            <div className='px-12 mt-10 bg-white flex justify-center items-center flex-col mb-5 border rounded-md shadow-md'>
                <div className='my-4'><img src="https://see.fontimg.com/api/renderfont4/ZVGqm/eyJyIjoiZnMiLCJoIjoxMDgsInciOjEyNTAsImZzIjo4NiwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/SW5zdGFncmFt/amsterdam.png" alt="Instagram" width={155} height={155}/></div>
                <p className='w-72 mb-5 text-center wlcm-text'>Sign up to see photos and videos from your friends.</p>
                <div>
                    <button className='LoginBtn w-64 h-8 rounded text-white mb-4 font-medium'>
                        <p className='fbtxt register-fbtxt text-md cursor-pointer'><p className="fa fa-facebook register-fa"></p>Log in with Facebook</p>
                    </button>
                </div>
                <div className="relative mb-4 flex items-center w-64">
                    <span className='h-px bg-gray-300 w-full mr-2'></span>OR<span className='h-px bg-slate-300 w-full ml-2'></span>
                </div>


                <div className='flex flex-col '>
                    <input type='text' className='border h-10 w-64 rounded bg-gray-100 mb-2 pl-2 text-xs' placeholder='Mobile number or email'/>
                    <input type='text' className='border h-10 w-64 rounded bg-gray-100 mb-2 pl-2 text-xs' placeholder='Full name'/>
                    <input type='text' className='border h-10 w-64 rounded bg-gray-100 mb-2 pl-2 text-xs' placeholder='Username'/>
                    <input type='password' className='border h-10 w-64 rounded bg-gray-100 mb-4 pl-2 text-xs' placeholder='Password'/>
                </div>
                <div>
                    <button className='LoginBtn w-64 h-8 rounded text-white mb-8 font-medium'>Sign Up</button>
                </div>
            </div>

            <div className='w-96 bg-white h-16 flex justify-center items-center border rounded-md shadow-md'>
                <span className='flex'>Have an account? <p className='ml-2 text-blue-600 font-medium cursor-pointer' onClick = {(e) => handleNavigation(e)}>Log in</p></span>
            </div>

            <div className='my-4'>Get the app.</div>

            <div className='flex'>
                <img src={appstorePng} alt='appstore' width={120} height={50} className='mr-4 shadow-md cursor-pointer'/>
                <img src={googlePng} alt='googlestore' width={120} height={50} className='shadow-md cursor-pointer'/>
            </div>
        </div>
    )
}
