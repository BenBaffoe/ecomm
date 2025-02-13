import React , { useContext, useState } from 'react';
import { DataContext } from './Contexts/DataContext';
import { CheckCircle, Circle } from 'react-feather';

function Favourite() {
  
  const {likedItems} = useContext(DataContext);

  return (
    <div className='w-full h-full overflow-x-scroll md:h-screen  p-6 mt-4'>
      <div className='w-10/12'>
      <div className='text-3xl font-semibold text-left pb-20 md:pb-8 '>Favourites</div>
        {likedItems.map((item , index)=>(
          <div className='w-11/12 md:pl-2 mt-6 pl-0 border-grey-thin block md:flex md:space-x-44 h-fit mb-10' key={index}>
            <div className='w-10/12  md:w-2/12 h-full'>
              <img src={item.image} className='w-full h-full' />
            </div>

            <div className='w-full md:w-6/12'>
              <div className='md:font-bold md:text-xl font-semibold text-xl mt-4 pb-2'>
                {item.descript}
              </div>
              <div className='font-light'>
                {item.assay}
              </div>

              <div className='mt-2 font-bold flex justify-between'>
                <div>{item.price}</div>
                <div><CheckCircle size={16} color='green'/></div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Favourite