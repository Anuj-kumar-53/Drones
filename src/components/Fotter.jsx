import React from 'react'
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,


} from 'react-icons/fa'
function Fotter() {
    return (
        <div className='h-[60vh] bg-black w-[100%] flex'>
            <div className='w-[50%] text-white '>
                <div className='flex flex-col justify-center  pt-20 ml-25'>

                    <h1 className='text-xl font-extrabold text-white '>Drones World</h1>
                    <p className='py-4'>Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:</p>
                    <input type="text" placeholder='Email' className='p-3 bg-white text-black max-w-[50%] rounded-xl' />
                    <div className='flex space-x-4 md:w-[75%] my-6'>
                        <FaLinkedin className='hover:text-blue-300' size={30} />
                        <FaFacebook className='hover:text-blue-300' size={30} />
                        <FaInstagram className='hover:text-blue-300' size={30} />
                        <FaTwitter className='hover:text-blue-300' size={30} />
                        <FaYoutube className='hover:text-blue-300' size={30} />
                        <FaWhatsapp className='hover:text-blue-300' size={30} />

                    </div>
                </div>
            </div>
        
            <div className='text-white max-w-[25%] mx-auto mt-20'>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-blue-300'>Analysis</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Marketing</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Commerce</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Insights</li>
                    
                </ul>
            </div>

            <div className='text-white max-w-[25%] mx-auto mt-20'>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-blue-300'>Pricing</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Documentation</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Guides</li>
                    <li className='py-2 text-sm hover:text-blue-300'>Api Status</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Fotter