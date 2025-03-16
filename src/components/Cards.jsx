import React from 'react'
import { FaArrowUp } from "react-icons/fa";
function Cards() {
    return (
        <div>

        <div className='flex h-[100vh] justify-center items-center mx-5 ml-8'>
            <div  className='relative'>
                <img src="https://canvastemplate.com/demos/drone/images/cards/1.jpg" className='w-[90%] h-[80vh] rounded-3xl' />
                <div className='absolute top-10 right-30 flex flex-col text-white justify-center items-center my-auto '>

                <h1 className='text-gray-500 text-lg mb-2'>Popular Drone</h1>
                <h1 className='font-bold text-2xl'>Canvas Mini 2 SE</h1>
                <p  className='font-semibold mb-8'>Starting $79.99</p>
                <button className='border p-2 bg-white text-black rounded-xl hover:scale-105 min-w-[100px]'>View Now </button> 
                {/* <FaArrowUp className='rotate-45'/> */}
                </div>
            </div>

            <div className='relative'>
                <img src="https://canvastemplate.com/demos/drone/images/cards/2.jpg" className='w-[90%] h-[88vh] rounded-3xl'/>
                <div className='absolute top-10 right-40 flex flex-col text-white justify-center items-center my-auto '>

                <h1 className='text-gray-400 text-lg mb-2'>Featured</h1>
                <h1 className='font-bold text-3xl'>Air Sky Pro</h1>
                <p className='font-semibold mb-8'>Starting $59.99</p>
                <button className='border p-3 bg-white text-black rounded-xl hover:scale-105 min-w-[120px]'>View Now </button>
                </div>
            </div>
            <div className='relative'>
                <img src="https://canvastemplate.com/demos/drone/images/cards/3.jpg" className='w-[90%] h-[80vh] rounded-3xl' />
                <div className='absolute top-10 right-35 flex flex-col text-black justify-center items-center my-auto '>

                <h1 className='text-gray-500 text-lg mb-2'>Others</h1>
                <h1 className='font-bold text-2xl'>Controllers</h1>
                <p className='font-semibold mb-8'>Starting $29.99</p>
                <button className='border p-2 bg-white text-black rounded-xl hover:scale-105 min-w-[100px]'> view Now</button>
                </div>
            </div>
        </div>
        <div className='ml-20 relative max-w-[90%] '>

            <img src="https://canvastemplate.com/demos/drone/images/drone-features.jpg"  className='rounded-xl' />
            <div className='absolute top-10 text-white right-120  flex flex-col  items-center mt-10'>
                <h1 className='text-3xl'>What's New in v3</h1>
                <p className='mb-3'>More Better, More Harder</p>
                <button className='border p-2 bg-white text-black rounded-xl hover:scale-105 min-w-[100px]'> view Now </button>


            </div>

        </div>

        <div className='flex max-w-[70%] mx-auto my-20 items-center justify-evenly'>
            <div className='mr-5'>
                <img src="https://canvastemplate.com/demos/drone/images/icons/logo-1.svg" className='w-80px h-10' />
                <h1>Popular camera Company from for end.</h1>
                <p>Change the color scheme of the Theme in a flash just by changing the 6-digit HEX code.

</p>
            </div>
            <div className=' flex flex-col items-center justify-center'>
                <img src="https://canvastemplate.com/demos/drone/images/icons/logo-2.svg" className='h-10'  />
                <h1>Best Third-party Mobile App for our Drone.</h1>
                <p className='ml-20'>Ipsam eveniet per posuere, aspernatur Voluptate. Minus sed cubilia exercitation posuere itaque? Tempus soluta, modi.</p>
            </div>

        </div>




        </div>
    )
}

export default Cards