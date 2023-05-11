import React from 'react'
import Bike_Delivery from '../img/delivery.png'
import hero1 from '../img/hero2.webp'
import { herodata } from '../utils/data'




const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 gap-2 md:grid-cols-2 w-full '>
    <div className='py-2  inset-0 flex-1 flex flex-col gap-6 items-start justify-start '>
        <div className="relative group">
            <div className="absolute  blur rounded-full -inset-1 opacity-75 bg-gradient-to-r from-orange-600 to-purple-600 
              group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
            </div>
            <div className='flex relative items-center  justify-center gap-2 bg-black rounded-full p-2'>
            <p className='text-white font-bold'>
                Bike Delivery
            </p>
            <div className='  w-6 h-6 rounded-full overflow-hidden'>
                <img src={Bike_Delivery} alt="" className='w-full h-full object-contain bg-black' />
            </div>
            </div>
        </div>

        <p className='text-black text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide pr-1 leading-tight '>Best delicious Food in
           <span className='text-orange-300 text-[3rem] lg:text-[5rem] leading-snug tracking-wider'> our College</span>
        </p>

        <p className='text-black text-center md:text-left md:w-[80%] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et maiores sapiente non vel architecto unde. Est molestias quia illum sapiente, odit, quis doloremque corrupti mollitia animi dolorem suscipit iure.
        </p>

        <button type="button" className="text-white w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative '>
         <img  className='rounded-[40px] ml-auto lg:h-[650px] lg:w-auto w-full h-420 brightness-80 ' src={hero1} alt="" />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-6 flex-wrap'>
        {herodata && herodata.map(n=>(
            <div className='relative group'>
            <div className="absolute  blur rounded-3xl -inset-2 opacity-75 bg-gradient-to-r from-orange-500 to-orange-200 
              group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
            </div>
            <div key={n.id} className='lg:w-190  p-4 bg-orange-100 backdrop-blur-md  rounded-3xl flex flex-col items-center justify-center drop-shadow-lg '>
                <img src={n.imgsrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="" />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                    {n.name}
                </p>

                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                   {n.desciption}
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                    <span className='text-xs text-red-600 '>$</span>{n.price}
                </p>
           </div>
           </div>
        ))}
        
      </div>
      </div>
    </section>
  )
}

export default HomeContainer
