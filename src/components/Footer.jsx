import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm text-left'>
        {/* ------------ Left Side ---------------- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full text-gray-600 md:w-2/3 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum aliquam, suscipit illo dolor provident porro asperiores ipsam soluta laborum, nihil odio facilis officia pariatur delectus quas maxime illum velit.</p>
        </div>
        {/* -------------- Center Side ------------------ */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* -------------------- Right Side --------------------- */}
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
              <li>+91-6378283594</li>
              <li>adisingh7478@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ----------- Copy Right -------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright Aditya</p>
      </div>
    </div>
  )
}

export default Footer