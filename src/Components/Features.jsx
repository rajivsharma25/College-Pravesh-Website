import React from 'react'
import { assets } from '../assets/assets'

const Features = () => {
  return (
    <div className='px-4 sm:px-6 flex flex-col items-center justify-center gap-4 mb-10'>
        <div className='flex flex-col items-center justify-center gap-2 w-full mt-10 text-center'>
            <h2 className='text-2xl sm:text-[30px]'>TAKE INFORMED DECISIONS</h2>
            <hr className='bg-red-700 w-16 h-[3px]' />
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 p-4 w-full md:px-20">
          {/* Colleges */}
          <div className="sm:row-span-2 sm:col-start-1 relative group border-8 border-white shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer">
              <img src={assets.colleges} alt="Colleges"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
                <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                  Colleges
                </p>
              </div>
          </div>

          {/* News */}
          <div className="sm:col-start-1 sm:row-start-3 relative group border-8 border-white shadow-lg aspect-[4/2] -mt-4 overflow-hidden cursor-pointer">
            <img src={assets.news} alt="News" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">News</p>
            </div>
          </div>

          {/* Cuttoff */}
          <div className="sm:col-start-2 sm:row-start-1 relative group border-8 border-white shadow-lg aspect-[4/2] overflow-hidden cursor-pointer">
            <img src={assets.cutoff} alt="Cuttoff" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Cutoff</p>
            </div>
          </div>

          {/* Exams */}
          <div className="sm:row-span-2 sm:col-start-2 sm:row-start-2 relative group border-8 border-white shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer">
            <img src={assets.exams} alt="Exams" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Exams</p>
            </div>
          </div>

          {/* Tools */}
          <div className="sm:row-span-2 sm:col-start-3 sm:row-start-1 relative group border-8 border-white shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer">
            <img src={assets.tools} alt="Tools" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Tools</p>
            </div>
          </div>

          {/* Forum */}
          <div className="sm:col-start-3 sm:row-start-3 relative group border-8 border-white shadow-lg aspect-[4/2] -mt-4 overflow-hidden cursor-pointer">
            <img src={assets.forms} alt="Forum" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Forum</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Features