import React from 'react'
import { SiWalmart } from 'react-icons/si';
import WalmartLogo from '../../assets/LandingImages/walmart-logo.webp';

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center shadow-2xl  h-[100vh]' >
      <div className=' text-[28px] font-serif  text-[#426B1F]' >
        <img src={WalmartLogo} alt="walmart-logo"/>
      </div>
      <div className='flex flex-col gap-8 justify-center items-center bg-[#F8F9FA] w-[55vw] h-[100%]'>
        <button className=' bg-[#259dff] text-white px-6 text-[28px] py-2 rounded-xl w-[400px] font-serif' >
            Sign Up
        </button>

        <button className=' bg-[#259dff] text-white px-6 text-[28px] py-2 rounded-xl w-[400px] font-serif' >
            Login 
        </button>
      </div>
    </div>
  )
}

export default Navbar
