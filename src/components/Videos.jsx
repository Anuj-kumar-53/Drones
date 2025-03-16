import React from 'react'
import film from "../assets/fiml.mp4"
function Videos() {
  return (
    <div className="relative h-[90vh] w-screen mt-10">
   

    <video src={film} autoPlay loop muted className="w-full h-full object-cover"></video>
   

 
    <div className="absolute top-90 left-0   text-white">
    <div className='text-semibold text-md  flex p-4  space-x-25 mx-8 text-lg '>
        <div>
            <h1 className='text-extrabold text-2xl'>Motor & Blades</h1>
           <p> Sapien quis consectetur iste, quis inceptos hendrerit? Luctus erat tristique incidunt nunc quo possimus perferendis.</p>
        </div>
        <div> <h1 className='text-extrabold text-2xl'> 4K Video</h1> <p>Penatibus ornare commodi tempus varius! Neque voluptatum congue laboris! Autem earum voluptas nemo.</p></div>
        <div><h1 className='text-extrabold text-2xl'>36Hrs Battery Life</h1> <p>Dis blanditiis faucibus, quibusdam proin similique, leo porro, eius, corporis aperiam ipsum exercitationem dis lorem.</p></div>
    </div>
      
      
    </div>
  </div>
  )
}

export default Videos