import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between p-6  ' >
      <div className=' text-[28px] font-serif  text-[#426B1F]' >
        WALMART
      </div>
      <div className='flex gap-4 justify-center items-center' >
        <div>
            Shop
        </div>
        <div>
            Contact Us
        </div>
        <div>
            Who are we 
        </div>

        <button className=' bg-[#0071CE] text-white px-4 text-[18px] py-2 rounded-xl ' >
            Sign Up
        </button>

        <button className=' bg-[#0071CE] text-white px-4 text-[18px] py-2 rounded-xl ' >
            Login 
        </button>
      </div>
    </div>
  )
}

export default Navbar
