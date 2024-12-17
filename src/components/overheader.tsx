import React from 'react'
import { FaPlus } from "react-icons/fa";

const Overheader = () => {
  return (
    <main className='bg-[#000000]  h-[38px] flex justify-center items-center reletive w-full sm:w-[390px] md:w-[1440px]'>
        <div className='flex justify-center items-center'>
            <h3 className='text-white text-xs sm:text-sm'>
            Sign up and get 20% off to your first order. 
            </h3>

            <button className='text-white text-xs sm:text-sm ml-3'>Sign Up Now</button>
        </div>
        <FaPlus  className='text-white absolute right-[50px] hidden sm:block'/>
    </main>
  )
}

export default Overheader;