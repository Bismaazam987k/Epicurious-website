import React from 'react'
import img1 from '../assets/img5.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img25.png';
import img5 from '../assets/img1.png';
export default function Stories() {
  return (
    <>
   
      <div className='flex gap-2 pl-20 text-white border-y-2 pb-8 my-12'>
      <button className='px-4 rounded-2xl py-3 text-center bg-green-700 mt-8  text-xl hover:bg-green-500'>ginger jam</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-yellow-500 mt-8  text-xl hover:bg-yellow-400'>Nihari</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-purple-800 mt-8  text-xl hover:bg-purple-600'> Biryani</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-pink-600 mt-8  text-xl hover:bg-pink-500'> Chaat</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-red-700 mt-8  text-xl hover:bg-red-600'> Halwa Puri</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-green-500 mt-8  text-xl hover:bg-green-400'>smoked sprats</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-blue-600 mt-8  text-xl *:hover:bg-blue-500'>conchiglion</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-orange-600 mt-8  text-xl hover:bg-orange-500'> Shawarma</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-red-900 mt-8  text-xl hover:bg-red-800'> Pizza</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-teal-600 mt-8  text-xl hover:bg-teal-700'> Burgur</button>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      
      <div>
        <h1 className='text-5xl text-red-600 font-semibold text-center my-4 font-serif'>TOP STOPIES</h1>
      </div>
      <div className='flex gap-4 px-16 pt-6'>
        {/* bbbbbbbbbbbbbbbbbbb */}
      <div className=''>
        <div>
         <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer ' src={img1}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-blue-600 cursor-pointer '>Weeknight Harissa Eggplant Parm</h1>
        </div>
        <div>
         <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>Weeknight Harissa Egg fried <br></br> Rice and tomato cachup</h1>
        </div>
      </div>
      {/* nnnnnnnnnnnnnnnnnnnn */}
      <div>
      <img className='w-[800px] h-[600px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5}></img>
      <h1 className='text-5xl font-serif font-semibold py-3 text-pink-600 cursor-pointer'>Skillet Chicken and <br></br>Zucchini Enchiladas</h1>
      <p className='text-gray-600 text-lg'>Ready in under 30 minutes, these enchiladas are destined to be “a hit with the <br></br> whole family.” The 3 Best Travel Coffee Mug The 3 Best Travel Coffee <br></br> Mu3 Vegetarian Tacos That Don’t Skimp on Flavor Vegetarian Tacos That Don’t<br></br> Skimp on Flavor (or Toppings)</p>
      </div>
      {/* bbbbbbbbbbbbbbbbbbbb */}
      <div>
      <div>
         <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-red-600 cursor-pointer'>One-Pot Salmon and Shiitake Rice</h1>
        </div>
        <div>
         <img className='w-[400px] h-[300px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>Sweet Potatoes With <br></br>Cocoa-Sesame Butter</h1>
        </div>
      </div>
      {/* bbbbbbbbbbbbbbbb */}
      </div>
    </>
  )
}
