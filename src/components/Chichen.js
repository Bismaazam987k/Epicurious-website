import React from 'react'
import img1 from '../assets/img26.png';
import img2 from '../assets/img29.png';
import img3 from '../assets/img28.png';
export default function Chicken() {
  return (
    <div>
      <div className='flex justify-center my-4 hover:animate-pulse'> 
       <div className='rounded-l-3xl'>
        <img className='rounded-l-3xl h-[650px] w-[750px]' src={img1} alt=''/>
       </div>
       <div className='bg-orange-700 h-[650px] w-[750px] rounded-r-3xl relative'>
        <div className='absolute text-white font-bold pt-4'>
            <h1 className='text-center text-yellow-400 text-5xl py-6 font-serif '>
            Fried Chicken Recipe</h1>
            <p className='text-center text-wrap px-8'>Globally, the world is experiencing record energy prices and <br></br >soaring carbon emissions, placing significant financial pressure on households, <br></br> and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. <br></br> This causes significant emissions, widespread deforestation, burdens women with hours <br></br> of unpaid labour, and jeopardizes their health.
             Wonderbag is the solution to this crisi Globally, the world is experiencing record energy prices and soaring carbon emissions, placing significant financial pressure on households, and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. This causes significant emissions, widespread deforestation, burdens women with hours of unpaid labour, and jeopardizes their health
            </p>
            <div className='flex gap-3 justify-center mt-4'>
        <div>
         <img className='h-[225px] w-[280px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer ' src={img2}></img>
         <h1 className='text-xl font-serif font-semibold py-3 text-white cursor-pointer text-center '>Special Suppoter</h1>
        </div>
        <div>
         <img className='h-[225px] w-[280px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-white cursor-pointer text-center'>Bone Apitite</h1>
        </div>
      </div>
            {/* <button className='px-20 rounded-2xl py-3 text-center bg-yellow-400 mt-8 mx-56 text-xl hover:bg-yellow-500'>Description</button> */}
        </div>
       </div>
      </div>
      <hr className='my-6'></hr>
    </div>
   
  )
}
 