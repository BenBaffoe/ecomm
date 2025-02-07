import React , { useContext} from 'react'
import { DataContext } from './Contexts/DataContext'


function View() {
  const { handlesView } = useContext(DataContext);
  return (

     <div  className='w-full pb-20 bg-grey-thin'>
        <p className='font-semibold pt-16 text-center text-slate-600 text-2xl'>Customize Your Order</p>
        <div  className=' h-24 md:h-12'></div>
     <div className="w-full flex items-center justify-center pt-2">
   {handlesView && (
    <div className='flex items-center justify-center lg:flex lg:space-x-20'>
    <div className='w-11/12 md:flex md:space-x-10'>
    <div className="md:w-6/12 md:h-72 w-11/12 h-full">
      <img src={handlesView.image} className="w-full rounded-lg object-cover object-top shadow-md h-full" alt="Selected product"/>
    </div>
    <div className='md:w-5/12 w-full'>
      <div className='font-extrabold pt-10 md:pt-0 lg:w-48 text-slate-600  text-md'>{handlesView.descript}</div>
      <p className='font-normal text-slate-600 '>{handlesView.price}</p>
      <div className='font-light text-sm pt-4 w-80'>{handlesView.assay}</div>
      <div className=''>
        <button className='md:h-10 md:w-48 h-12 w-full text-md font-semibold md:text-md  rounded-md duration-700 hover:-translate-y-1 hover:bg-black-dark  text-white mt-14 pt-2 pr-2 pl-2 pb-4  bg-black-neutral'>
         <p className='pb-6'> Add To Cart</p>
        </button>
        {/* <button className='md:h-10 md:w-48 h-9 w-44 text-xs md:text-md rounded-md text-white mt-14 pt-2 pr-2 pl-2  duration-700 hover:-translate-y-1 pb-4 border border-black-dark bg-white'>
        <p className='pb-6 text-black-newdark'>Remove</p>
        </button> */}
      </div>
    </div>
    </div>
    </div>
    )}
     </div>
     </div>

  )
}

export default View