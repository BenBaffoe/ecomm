import React , { useContext} from 'react'
import { DataContext } from './Contexts/DataContext'


function View() {
  const { handlesView } = useContext(DataContext);
  return (

     <div  className='w-full bg-grey-thin'>
        <p className='font-semibold pt-16 text-center text-slate-600 text-2xl'>Customize Your Order</p>
     <div className="w-full flex items-center justify-center h-screen  pt-2">
   {handlesView && (
    <div className='block lg:flex lg:space-x-20'>
    <div className="w-6/12  h-72">
      <img src={handlesView.image} className="w-full rounded-lg object-cover object-top shadow-md h-full" alt="Selected product"/>
    </div>
    <div>
      <div className='font-extrabold lg:w-48 text-slate-600  text-md'>{handlesView.descript}</div>
      <p className='font-normal text-slate-600 '>{handlesView.price}</p>
      <div className='font-light pt-4 w-80'>{handlesView.assay}</div>
      <div className='flex space-x-4'>
        <button className='h-10 w-48 rounded-md duration-700 hover:-translate-y-1 hover:bg-black-dark  text-white mt-14 pt-2 pr-2 pl-2 pb-4  bg-black-neutral'>
         <p className='pb-6'> Add To Cart</p>
        </button>
        <button className='h-10 w-48 rounded-md text-white mt-14 pt-2 pr-2 pl-2  duration-700 hover:-translate-y-1 pb-4 border border-black-dark bg-white'>
        <p className='pb-6 text-black-newdark'>Remove</p>
        </button>
      </div>
    </div>
    </div>
    )}
     </div>
     </div>

  )
}

export default View