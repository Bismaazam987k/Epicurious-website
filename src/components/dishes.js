import React from 'react'
import img2 from '../assets/img10.png';
import img3 from '../assets/img6.png';
import img4 from '../assets/img7.png';
import img5 from '../assets/img8.png';
export default function Dishes(Props) {
  return (
    <>
   
       <div>
        <h1 className='text-5xl text-red-600 font-semibold text-center my-4 font-serif'>Recipes based on dietary preferences</h1>
       </div>
      <div className='grid grid-cols-4 px-16 gap-[1px] pt-4'>
        <div>
            <img className='h-[500px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>Sesame (Til) Ladoo</a>
            </div>
        </div>
        <div>
            <img className='h-[500px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-purple-600 cursor-pointer'>
                <a>Pork Chops With Green Chiles and Apples</a>
            </div>
        </div>
        <div>
            <img className='h-[500px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-blue-600 cursor-pointer'>
                <a>Đâu Phu Rán Tâ’m Hành (Fried Tofu With)</a>
            </div>
        </div>
        <div>
            <img className='h-[500px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>
                <a>Charred Cabbage With Sausages and Apples</a>
            </div>
        </div>
      </div>
    </>
  )
}
