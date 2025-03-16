import React from 'react'

function Hero() {
  return (
    <div>
        {/* <img src="https://canvastemplate.com/demos/drone/images/drone-2.jpg" alt="" /> */}
        <div className=' flex flex-col items-center justify-center mt-15 font-bold'>

        <h1 className='text-6xl mb-8'>Hawakeye From The Sky</h1>
        <h2 className='text-xl '>Empowering Innovation Through Aerail Excellence </h2>
        <h2 className='text-xl mb-10'> Taking Flight,unleashing possiblities</h2>
        
        <button className='border border-blue-500 border-w-10 p-3 min-w-[20%] text-black hover:bg-blue-600 hover:text-white border-3 hover:scale-105'> View Demo</button>

        </div>


    </div>
  )
}

export default Hero