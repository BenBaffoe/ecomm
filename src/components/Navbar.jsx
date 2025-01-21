import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'react-feather';

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className='w-full overflow-hidden rounded-md shadow-md bg-white'>
      <nav className='flex py-4 pr-6  shadow-sm pl-2 md:pl-8 md:pr-4 justify-between md:flex md:space-x-96 md:justify-normal '>
      <div>
        <p className='md:pt-3 pt-0 md:pl-6 pl-0'>Ecommerce</p>
      </div>
     
     <div className='flex  space-x-4 md:hidden'>
      <button>
        <ShoppingCart size={16} />
      </button>

      <button className='z-20' onClick={()=>setShow(!show)}>
        {show ?  <X size={16}/> : <Menu size={16} />}
      </button>
      
     </div>


     <div className='md:flex text-sm space-x-12 hidden'>
      <p className='pt-3'>Home</p>
      <p  className='pt-3'>Men's</p>
      <p  className='pt-3'>Women's</p>
      <p  className='pt-3'>Gadgets</p>
      <div className='relative'>
            <input
              placeholder='Search here'
              className='bg-gray-100 text-sm font-semibold outline-none rounded-full px-4 py-2 w-full'
            />
            <Search size={18} className='absolute top-2 right-3' />
      </div>
      <p><ShoppingCart size={16} className='mt-2' /></p>
     </div>

      </nav>
     
    {show && 
    <div className='w-full absolute top-0 pt-16 text-lg h-screen bg-grey-thin text-left pl-10'>
      <p className='py-2'>Home</p>
      <p className='py-2'>Men's</p>
      <p className='py-2'>Women's</p>
      <p className='py-2'>Gadgets</p>
    </div>

    }


    </div>
  );
}

export default Navbar;

