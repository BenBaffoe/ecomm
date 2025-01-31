import React from 'react'
import one from '../image_folder/girl-1990347_1920.jpg'

function Women() {
  return (
    <div className='mt-4'>
      <div className='flex justify-center items-center '>
        <div className='w-full relative'>
          <img src={one} className='w-full -scale-90 h-[60vh] rounded-md lg:h-full' />
          <div className='absolute top-72 left-28 z-10'>
            <div className='w-6/12 text-3xl font-semibold text-black-primary'> <span className='text-white'>Discover the latest in fashion, beauty, and lifestyle, curated just for you,</span><br/>Looking for trendy outfits,or must-have accessories, we’ve got you covered</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Women