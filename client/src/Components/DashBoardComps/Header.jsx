import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between p-6 shadow-2xl' >
      <div className=' text-[28px] font-serif  text-[#426B1F] flex justify-center items-center' >
        Walmart Warehouse
      </div>
      <div className='flex gap-4 justify-center items-center' >
        <div className=' bg-red-500 text-white px-4 text-[30px] py-2 rounded-full w-[70px] h-[70px] flex justify-center items-center font-bold' >
            U
        </div>

        <button className=' bg-[#0071CE] text-white px-4 text-[18px] py-2 rounded-xl' >
            Edit Inventory
        </button>
      </div>
    </div>
  )
}

export default Header
