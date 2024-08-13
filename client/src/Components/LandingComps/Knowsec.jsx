import React from 'react'
import temp from "../../assets/LandingImages/temp.png"
import Ques from './Ques'

const Knowsec = () => {
  return (
    <div className=' p-8 w-[95%] m-auto flex gap-[5%]  my-8'>
        <div className='w-[40%] rounded-xl overflow-hidden '>
            <img src={temp} alt=""  />
        </div>
        <div className='w-[50%]  '>
            <div className='text-center font-bold text-[24px] mb-4'>
                More to Know....
            </div>
            <div className='w-full flex flex-col gap-4' >
                <Ques/>
                <Ques/>
                <Ques/>
                <Ques/>
                <Ques/>
            </div>
        </div>
    </div>
  )
}

export default Knowsec
