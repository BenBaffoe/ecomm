import React from 'react'
import { Search, ShoppingCart } from 'react-feather';


function Navbar() {
  return (
    <div className='pb-6 h-full text-md shadow-3xl  bg-white white-glass shadow-gray-100 rounded-lg text-black-muted font-bold sm:w-full md:w-full lg:w-full w-full pt-6'>
 <div className='flex space-x-52  sm:flex sm:space-x-52 md:flex md:space-x-20 lg:flex lg:space-x-52 xl:flex xl:space-x-72'>
    <div className='ml-16'>
      <p>Ecommerce</p>
    </div>
    <div className='flex space-x-12  text-xs'>
    <div className='cursor-pointer pl-10'>
        Home
      </div>
      <div className='cursor-pointer'>
        Shoes
      </div>
      <div className='cursor-pointer'>
        Gadgets
      </div>
      <div className='cursor-pointer'>
        Men's
      </div>
      <div className='cursor-pointer'>
        Women's
      </div>
    </div>

    <div className='text-sm ml-0  flex space-x-14'>
    <div className='w-40 relative h-8 rounded-xl'>
      <input placeholder='search here' className='outline-none bg-grey-thin rounded-3xl text-center text-xs h-full w-full'/>
      <Search size={16} className='absolute left-2 top-1.5'/>
    </div>
    <div className=''>
      <ShoppingCart size={16} className='mt-1' color='black'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar