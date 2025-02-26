import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-25 text-sm'>
        <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='text-left flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br /> suites 370, Wasington, USA</p>
          <p className='text-gray-500'>TEL: +91-6378283594 <br /> EMAIL: adisingh7478@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact