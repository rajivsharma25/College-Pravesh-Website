import React from 'react'
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <div className="w-full min-h-[400px] flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-[38px] md:text-[56px] mt-[-30px] tracking-wide">
            KNOW MORE, DO MORE
          </h2>
          <div className="flex items-center w-full sm:w-[645px] text-sm mt-10 relative">
            <input
              type="text"
              placeholder="Search for Colleges, Courses or Exams"
              className="w-full py-4 pl-12 pr-10 outline-none border border-white md:rounded-r-none 
            rounded-md focus:border-[#CB2027] text-black mx-8 sm:mx-0"
            />
            <LuSearch className="absolute left-12 sm:left-4 top-1/2 transform -translate-y-1/2 text-orange-500 block md:hidden text-xl" />
            <button className="hidden md:flex items-center justify-center gap-3 w-[150px] py-4 bg-[#CB2027] text-white rounded-r-md border border-[#CB2027]">
              <LuSearch className="text-xl" />
              Search
            </button>
          </div>
    </div>
  )
}

export default Header