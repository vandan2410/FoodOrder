import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvide";
import MenuContainer from "./MenuContainer";
import CartConainer from "./CartConainer";



const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
  
  }, [scrollValue,cartShow]);
  

 


  return (
    
    <div className='w-full flex flex-col h-auto justify-center items-center'>
      <HomeContainer/>

      <section className="w-full my-6 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-black relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-900 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-600 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={(prev) => setScrollValue(prev=>prev-400  )}
            >
              <MdChevronLeft className="text-lg text-black" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={(prev) => setScrollValue(prev=>prev+400 )}
            >
              <MdChevronRight className="text-lg text-black" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer/>

      {cartShow && (<CartConainer/>)}
     
    </div>

  
  )
}

export default MainContainer




  // <div class="px-8 py-32">
  // <div class="grid gap-8 items-start justify-center">
  //   <div class="relative group">
  //     <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
  //     <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
  //       <span class="flex items-center space-x-5">
  //         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  //         </svg>
  //         <span class="pr-6 text-gray-100">Labs Release 2021.09</span>
  //       </span>
  //       <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
  //     </button>
  //   </div>
  // </div>
  // </div> 