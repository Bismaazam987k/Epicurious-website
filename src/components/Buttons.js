import React from 'react'

export default function Buttons() {
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
    </>
  )
}
