import React, { useState , useContext } from 'react';
import { Search, ShoppingCart, Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { DataContext } from "./Contexts/DataContext"

function Navbar() {
  const [show, setShow] = useState(false);
  const { selectedItems, setSelectedItems } = useContext(DataContext);

  let shopLength = selectedItems.length;

  return (
    <div className='w-full flex-grow overflow-hidden rounded-md shadow-md bg-white'>
      <nav className='flex py-4 pr-6 md:pb-6 pb-4  shadow-sm pl-2 md:pl-8 md:pr-4 justify-between md:flex md:space-x-96 md:justify-normal '>
      <div>
        <p className='md:pt-3 text-red-400 pt-0 md:pl-6 pl-0'>Buy <span className='text-blue-400'>Hive</span></p>
      </div>
     
     <div className='flex  space-x-4 md:hidden'>
     <Link to={'/shop'}>
      <button className='relative'>
       <ShoppingCart size={16} />
      <div className='absolute -bottom-4 -left-3 bg-rose-400 text-black-dark p-[0.008rem]  w-5 rounded-full'>
        { shopLength && <div className='text-center '><p className='text-xs font-light text-center '>{shopLength}</p></div> }
      </div>
      </button>
      </Link>

      <button className='z-20' onClick={()=>setShow(!show)}>
        {show ?  <X size={16}/> : <Menu size={16} />}
      </button>
      
     </div>


     <div className='md:flex text-sm space-x-12 hidden'>
     <Link to={'/hero'}><div className='pt-3 cursor-pointer'>Home</div></Link>
      <Link to={'/men'}><div className='pt-3 cursor-pointer'>Men's</div></Link>
      <Link to={'/women'}><div className='pt-3 cursor-pointer'>Women's</div></Link>
      <Link to={'/gadgets'}> <div className='pt-3 cursor-pointer'>Gadgets</div></Link>
      <div className='relative'>
            <input
              placeholder='Search here'
              className='bg-gray-100 text-sm font-semibold outline-none rounded-full px-4 py-2 w-full'
            />
            <Search size={18} className='absolute top-2 right-3' />
     </div>

     <Link to={'/shop'}>
     <button className='relative'>
      <p><ShoppingCart size={16} className='mt-2' /></p>
      <div className='absolute -bottom-3 right-3 bg-rose-400 text-white h-5 w-5 rounded-full'>
        { shopLength && <div className='text-sm'>{shopLength}</div> }
      </div>
     </button>
     </Link> 
     </div>

      </nav>
     
    {show && 
    <div className='w-full absolute top-0 pt-16 text-lg h-screen bg-grey-thin text-left pl-10'>
      <Link to={'/hero'}><div className='py-2 cursor-pointer'>Home</div></Link>
      <Link to={'/men'}><div className='py-2 cursor-pointer'>Men's</div></Link>
      <Link to={'/women'}><div className='py-2 cursor-pointer'>Women's</div></Link>
      <Link to={'/gadgets'}> <div className='py-2 cursor-pointer'>Gadgets</div></Link>
     
    </div>

    }


    </div>
  );
}

export default Navbar;

