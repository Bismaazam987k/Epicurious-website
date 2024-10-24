import React from 'react'
import img2 from '../assets/img32.png';
import img3 from '../assets/img34.png';
import img4 from '../assets/img33.png';
import img5 from '../assets/img35.png';
export default function Brands(Props) {
  return (
    <>
   
       <div>
        <h1 className='text-5xl text-red-600 font-semibold text-center my-4 font-serif'>SEE RECIPES BY BRANDS</h1>
       </div>
      <div className='grid grid-cols-4 px-20 gap-3 pt-4 text-center'>
        <div>
            <img className='h-[380px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt='no img'></img>
            <div className='text-xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>Explore Recipes <span className='text-red-700'>---></span></a>
            </div>
        </div>
        <div>
            <img className='h-[380px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt='no img'></img>
            <div className='text-xl font-serif font-semibold py-3 text-purple-600 cursor-pointer'>
                <a>Explore Recipes <span className='text-red-700'>---></span></a>
            </div>
        </div>
        <div>
            <img className='h-[380px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt='no img'></img>
            <div className='text-xl font-serif font-semibold py-3 text-blue-600 cursor-pointer'>
                <a>Explore Recipes <span className='text-red-700'>---></span></a>
            </div>
        </div>
        <div>
            <img className='h-[380px] rounded-xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt='no img'></img>
            <div className='text-xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>
                <a>Explore Recipes <span className='text-red-700'>---></span></a>
            </div>
        </div>
      </div>
    </>
  )
}
