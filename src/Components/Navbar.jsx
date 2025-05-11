import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [rotateCross, setRotateCross] = useState(false);

  useEffect(() => {
    if (visible) {
      setRotateCross(true);
      const timer = setTimeout(() => setRotateCross(false), 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div className="relative py-3 flex justify-between items-center px-4">
    
      <div className="lg:hidden">
        <IoReorderThreeOutline
          onClick={() => setVisible(true)}
          className="text-4xl text-white cursor-pointer -ml-4"
        />
      </div>

      <img
        src={assets.logo}
        className="w-[250px] lg:w-[250px] mx-auto lg:mx-0" 
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-6 text-[14px] text-gray-200">
        <NavLink to="/">News</NavLink>
        <NavLink to="/">Colleges</NavLink>
        <NavLink to="/">Exams</NavLink>
        <NavLink to="/">Admissions</NavLink>
        <NavLink to="/">Tools</NavLink>
        <NavLink to="/">Forum</NavLink>
      </ul>

      {/* Sidebar Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setVisible(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#222222] z-50 transition-all duration-300 ease-in-out ${visible ? 'w-4/5' : 'w-0 overflow-hidden'}`}
      >
        <div className="relative h-full w-full flex flex-col">
          {/* Close Icon */}
          <RxCross2
            onClick={() => setVisible(false)}
            className={`text-4xl absolute top-3 -right-14 text-white cursor-pointer transform transition-transform duration-500 ${rotateCross ? 'rotate-180' : ''}`}
          />

          {/* Sidebar Links */}
          <div className="flex flex-col items-center text-white text-lg mt-2">
            <div className='relative w-full flex justify-center items-center mt-2 mb-4'>
              <input className='w-[90%] rounded-full py-1 px-4 text-sm' type="text" placeholder="Search" />
              <FiSearch className='absolute right-8 sm:right-10 top-1/2 -translate-y-1/2 text-gray-700 ' />
            </div>

            <NavLink onClick={() => setVisible(false)} className="py-2 border-y-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              News
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 border-b-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              Colleges
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 border-b-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              Exams
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 border-b-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              Admissions
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 border-b-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              Tools
            </NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-2 border-b-2 border-gray-600 w-full text-gray-400 pl-4 text-md hover:text-white transition" to="">
              Forum
            </NavLink>
            <div className="mt-6 flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaLinkedinIn size={20} /></a>
              <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
