import React from 'react'
import {
    FaDragon,
    FaSun,
    FaAnchor,
    FaSistrix




} from "react-icons/fa";

function Navbar() {
    return (
        <div className='flex justify-between bg-white p-4 mx-5 border border-white rounded-full shodow-xl text-lg'>
            <div class="flex items-center space-x-10 ml-2 ">
                <FaDragon className='text-2xl' />
                <a href="#" className='hover:text-blue-400'>Home</a>
                <a href="#" className='hover:text-blue-400'>About</a>
                <a href="#" className='hover:text-blue-400'>Accessories</a>
                <a href="#" className='hover:text-blue-400'>Videos</a>
                <a href="#" className='hover:text-blue-400'>Offer</a>
                <a href="#" className='hover:text-blue-400'>Contact</a>

                <div class="relative group">

                    <button class="hover:text-blue-400 ">
                        More
                    </button>

                    <div class="absolute left-0 mt-2 w-28 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <a href="#" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400">Help</a>
                        <a href="#" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400">Guide</a>
                        <a href="#" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400">Setting</a>
                    </div>
                </div>
            </div>
            <div className='flex items-center mr-2 space-x-8 text-xl'>
                <FaSun />
                <FaAnchor />
                <div className="relative flex items-center gap-2 group">
                    <input
                        type="text"
                        placeholder="search"
                        className="rounded-full  py-1 bg-gray-100 w-0 transition-all duration-300  group-hover:w-60 group-hover:px-2 group-hover:opacity-100 opacity-0 border-white"
                    />
                    <FaSistrix className="cursor-pointer" />
                </div>

            </div>
        </div>
    )
}

export default Navbar