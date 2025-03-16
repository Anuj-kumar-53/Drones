import React from 'react'

function Section() {
  return (
    <div className='h-[100vh]'>

    <div className='h-[60vh]  '>
       <div className='font-small text-xl my-10 max-w-[50%] mx-auto text-center font- '>
            <h1 className='text-5xl font-bold p-3'>Out Latest Products</h1>
            <p className='p-1'>Unlock the sky potential with our cutting edges Drone Technology.</p>
            <p className=''>Revolution Flight with Innovation Drones.</p>
        </div> 
        
        <div className='flex space-x-10 justify-evenly pt-5 sm:flex-col lg:flex-row'>
            <div className=''>
              <img src="https://canvastemplate.com/demos/drone/images/drones/1.png" className='h-20' />
              <p className='my-4 text-sm text-center'>Canvas Mini 2 SE</p>
            </div>
            <div className=''>
              <img src="https://canvastemplate.com/demos/drone/images/drones/2.png" className='h-20'/>
              <p className='my-4 text-sm text-center'>Intergo Auto Robotics</p>
            </div>
            <div>
              <img src="https://canvastemplate.com/demos/drone/images/drones/3.png" className='h-20' />
              <p className='my-4 text-sm text-center'>Air Sky Pro</p>
            </div>
            <div>
              <img src="https://canvastemplate.com/demos/drone/images/drones/4.png" className='h-20' />
              <p className='my-4 text-sm text-center font-semibold'>Hawake Eye SE 2</p>
            </div>
            <div>
                <img src="https://canvastemplate.com/demos/drone/images/drones/5.png" className='h-20' />
                <p className='my-4 text-sm text-center'>remote & others</p>
            </div>

        </div>

        <div className='h-[60vh] bg-gray-200 flex py-15 '>
          <div className='max-w-screen-sm mx-auto '>

            <h1 className='font-bold text-3xl pb-5'>Hawake Eye SE 2</h1>

            <p className='text-gray-600 pb-3'>Whether you’re into weird facts   And if you’re looking for trivia questions for kids to entertain them during a family dinner or a long road trip, we’ve got plenty of those, too!</p>

            <p className='font-semibold text-md pb-4'>It was found in 2002, approximately 12 miles south of Ljubljana, the capital of Slovenia,  Radiocarbon dating was used to determine the wheel’s age, which is somewhere between 5,100 and 5,350 years old.   attractions in every state.</p>
            <button className='border p-3 min-w-[150px] border-gray-200 text-white bg-black font-bold rounded-xl hover:bg-blue-500 hover:text-white'>Learn More</button>
          </div>
          <div className='max-w-[40%] mx-auto'>
            <img src="https://canvastemplate.com/demos/drone/images/drones/4.png" className='h-[40vh]' />
          </div>

        </div>
        
       
        
        
        
    </div>
    </div>
  )
}

export default Section