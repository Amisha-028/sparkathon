import React from 'react'
import hero from '../../assets/LandingImages/Designer (3).jpeg'

const Hero = () => {
  return (
    <div className='h-[500px] mt-8 relative' >
      <div className='w-[100%] h-[100%]  absolute top-0 flex flex-col justify-center gap-6 items-center '>
        <div className='text-[40px] font-serif' >
            <span className='font-serif  text-[#274010]' >WALMART</span> - STORE CONNECT
        </div>
        <button className=' bg-[#0071CE] text-white px-4 text-[20px] py-2 rounded-xl ' >
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
