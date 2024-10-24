import React from 'react'
import img1 from '../assets/img4.png';
export default function Recipes() {
  return (
    <div>
      <div className='flex justify-center my-4 hover:animate-pulse'> 
       <div className='rounded-l-3xl'>
        <img className='rounded-l-3xl ' src={img1} alt=''/>
       </div>
       <div className='bg-gray-900 h-[534px] w-[700px] rounded-r-3xl relative'>
        <div className='absolute text-white font-bold pt-8'>
            <h1 className='text-center text-red-600 text-5xl py-6 font-serif '>
            Change is needed</h1>
            <p className='text-center text-wrap px-8'>Globally, the world is experiencing record energy prices and <br></br >soaring carbon emissions, placing significant financial pressure on households, <br></br> and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. <br></br> This causes significant emissions, widespread deforestation, burdens women with hours <br></br> of unpaid labour, and jeopardizes their health.
             Wonderbag is the solution to this crisi Globally, the world is experiencing record energy prices and soaring carbon emissions, placing significant financial pressure on households, and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. This causes significant emissions, widespread deforestation, burdens women with hours of unpaid labour, and jeopardizes their health
            </p>
            <button className='px-20 rounded-2xl py-3 text-center bg-red-700 mt-8 mx-52 text-xl hover:bg-yellow-500'>Description</button>
        </div>
       </div>
      </div>
      <hr className='my-6'></hr>
    </div>
   
  )
}
 