import React from 'react'
import img2 from '../assets/img14.png';
import img3 from '../assets/img15.png';
import img4 from '../assets/img17.png';
import img5 from '../assets/img16.png';
import img6 from '../assets/img18.png';
import img7 from '../assets/img19.png';
import img8 from '../assets/img20.png';
import img9 from '../assets/img21.png';
export default function Shopping() {
  return (
    <>
   
       <div>
        <h1 className='text-5xl text-red-600 font-semibold text-center my-4 font-serif border-t-2 pt-10'>SHOPPING</h1>
       </div>
      <div className='grid grid-cols-4 px-16 gap-5 pt-4'>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>The Best Electric Kettles, Tested and Reviewed</a>
                <p className='text-lg text-gray-600 font-serif font-normal' >We found the best conventional and gooseneck electric kettles on the market, so you can make expert pour-over, full-bodied tea, and more.</p>
            </div>

        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-purple-600 cursor-pointer'>
                <a>The Best Meal Prep and Delivery Services</a>
                <p className='text-lg text-gray-600 font-serif font-normal'>Blue Apron, Daily Harvest, and more: We tested the top meal delivery services to find the best options for all budgets, tastes, and dietary needs.</p>
            </div>
        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-blue-600 cursor-pointer'>
                <a>The Best Rice Cookers for Effortless, Fluffy Rice </a>
                <p className='text-lg text-gray-600 font-serif font-normal'>Even if you keep your distance from single-use appliances, a good rice cooker may bring you over to the dark side.</p>
            </div>
        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>
                <a>The Best Pasta Makers for Pro-Level Bucatini and Ravioli at Home</a>
                <p  className='text-lg text-gray-600 font-serif font-normal'>Nothing impresses quite like homemade pasta.</p>
            </div>
        </div>
      </div>
      {/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
      <div className='grid grid-cols-4 px-16 gap-5 pt-4'>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img6} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>Is the Zojirushi $750 Rice Cooker Worth It?</a>
                <p className='text-lg text-gray-600 font-serif font-normal' >We found the best conventional and gooseneck electric kettles on the market, so you can make expert pour-over, full-bodied tea, and more.</p>
            </div>

        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img7} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-purple-600 cursor-pointer'>
                <a>The Best Dutch Ovens for Breads, Braises, and Beyond</a>
                <p className='text-lg text-gray-600 font-serif font-normal'>Blue Apron, Daily Harvest, and more: We tested the top meal delivery services to find the best options for all budgets, tastes, and dietary needs.</p>
            </div>
        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img8} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-blue-600 cursor-pointer'>
                <a>
This Purifier Will Clean Your Air—After It Tells You How Dirty It Is
 </a>
                <p className='text-lg text-gray-600 font-serif font-normal'>Even if you keep your distance from single-use appliances, a good rice cooker may bring you over to the dark side.</p>
            </div>
        </div>
        <div>
            <img className='h-[400px] rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img9} alt='no img'></img>
            <div className='text-3xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>
                <a>The Best Carbon-Steel Pans for Pro-Level Cooking Without the Weight of Cast Iron
                Carbon steel</a>
                <p  className='text-lg text-gray-600 font-serif font-normal'>Nothing impresses quite like homemade pasta.</p>
            </div>
        </div>
      </div>
    </>
  )
}
