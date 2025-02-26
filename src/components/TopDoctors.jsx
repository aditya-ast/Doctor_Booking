import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)
  return (
    <div className='flex flex-col items-center my-16 gap-4 md:mx-10 text-gray-900 text-left'>
        <h2 className='text-3xl font-medium'>
            Top Doctors To Book
        </h2>
        <p className='text-center text-sm sm:w-1/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quod culpa? Molestiae reiciendis iure</p>
        <div className='w-full grid grid-cols-auto pt-5 gap-4 gap-y-6 px-3 sm:px-0'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border-blue-200 border rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-center text-green-500 text-sm'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <button onClick={()=> {navigate('/doctors'); scroll(0,0)}} className='bg-blue-50 rounded-full text-gray-600 px-12 py-3 mt-10 hover:translate-y-[-10px] transition-all duration-500'>more -{'>'}</button>
    </div>
  )
}

export default TopDoctors