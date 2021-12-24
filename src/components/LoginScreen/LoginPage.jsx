import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router";
import FirebaseContext from '../../context/firebase';

import googlePng from '../../assets/gstore.png';
import appstorePng from '../../assets/appstore.png'

import './LoginPage.css'

export default function LoginPage() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() =>{
        document.title = 'Login - InstKilogram'
    },[])

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push('/')
        } catch (error) {
            console.log("Login Err", error)
            setEmail("");
            setPassword("");
            setError(error.message)
        }
    }

    const handleNavigation = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/register'
        })
    }

    console.log('email', email)
    console.log('pass', password)

    return (
        <div className='bg-gray-100 flex justify-center items-center flex-col w-full h-screen'>

            <div className='px-12 mt-10 bg-white flex justify-center items-center flex-col mb-5 border rounded-md shadow-md'>
                <div className='my-4'><img src="https://see.fontimg.com/api/renderfont4/ZVGqm/eyJyIjoiZnMiLCJoIjoxMDgsInciOjEyNTAsImZzIjo4NiwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/SW5zdGFncmFt/amsterdam.png" alt="Instagram" width={155} height={155}/></div>
                    {error != null ? <p className="mb-4 text-sm flex justify-center text-red-500 w-60">{error}</p>: null}
                <div className='flex flex-col '>
                    <input type='text' onChange={(e) => setEmail(e.target.value)} className='border h-10 w-64 rounded bg-gray-100 mb-2 pl-2 text-xs' placeholder='Phone number, username, or email'/>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} className='border h-10 w-64 rounded bg-gray-100 mb-4 pl-2 text-xs' placeholder='Password'/>
                </div>
                <div>
                    <button className='LoginBtn w-64 h-8 rounded text-white mb-8 font-medium' onClick={(e) => handleLogin(e)}>Log In</button>
                </div>

                <div className="relative mb-6 flex items-center w-full">
                    <span className='h-px bg-gray-300 w-full mr-2'></span>OR<span className='h-px bg-slate-300 w-full ml-2'></span>
                </div>

                <div>
                    <p className='fbtxt text-md mb-6 cursor-pointer'><i className="fa fa-facebook"></i>Log in with Facebook</p>
                </div>

                <p className='text-xs mb-8 cursor-pointer'>Forgot password?</p>
            </div>

            <div className='px-16 bg-white h-16 flex justify-center items-center border rounded-md shadow-md'>
                <span className='flex'>Don't have an account? <p className='ml-2 text-blue-600 font-medium cursor-pointer' onClick={(e) => handleNavigation(e)}>Sign up</p></span>
            </div>

            <div className='my-4'>Get the app.</div>

            <div className='flex'>
                <img src={appstorePng} alt='appstore' width={120} height={50} className='mr-4 shadow-md cursor-pointer'/>
                <img src={googlePng} alt='googlestore' width={120} height={50} className='shadow-md cursor-pointer'/>
            </div>
        </div>
    )
}
