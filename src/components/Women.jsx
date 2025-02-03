import one from '../image_folder/woman-7009979_1920.jpg'
import React , { useContext } from 'react';
// import one from '../image_folder/balancing-1868051_1920.jpg'
import data_women from './data/womens';
import { DataContext } from './Contexts/DataContext';
import { ChevronDown, ChevronUp, Heart, ShoppingCart , Eye, Tag } from 'react-feather';
import { Link } from 'react-router-dom';

function Women() {
  const { handleView , shop , handleShop } = useContext(DataContext);
  return (
    <div className='mt-16'>
      <div className='flex w-full  justify-center items-center '>
        <div className='w-11/12 relative'>
          <img src={one} className='w-full h-[60vh] rounded-md lg:h-full' />
          <div className='absolute top-72 left-28 z-10'>
            <div className='w-6/12 text-5xl font-bold text-white'>Discover timeless trends and modern looks.</div>
          </div>
        </div>
      </div>
      <div className='w-full'>
          <p className='text-center font-light text-xl md:text-5xl pb-6 md:mb-10 mt-6 '>Categories</p>
           <div className='flex items-center justify-center space-x-6 p-2'>
            <div className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Shirts
            </div>
            <div className='md:w-20 md:h-9 cursor-pointer shadow-md  w-16 h-6 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Glasses
            </div>
            <div className='md:w-20 md:h-9 cursor-pointer  shadow-md  w-16 h-6 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
               Trousers
            </div>
           </div>




    <div className='mt-32 mb-10 flex items-center justify-center'>
    <div className="md:w-7/12 w-8/12 mt-10 md:mt-0 grid grid-flow-col-1 gap-6  md:grid md:grid-cols-3 md:gap-6">
    {data_women.map((item, index) => (
      <div className="rounded-xl shadow-md bg-white p-1 h-[53vh] md:h-fit" key={index}>
        <div className='relative'>
        <img src={item.image} className="w-full h-fit object-cover rounded-md" alt={`Image ${index}`} />
        <div className='absolute top-2 right-2'>
          <Heart color='black' size={16} />
        </div>
        <div className='absolute top-2 left-2'>
          <Tag size={16} className='text-red-600'/>
        </div>
        <button onClick={()=>handleView(item)} className='absolute bottom-0 right-3'>
          <Link to={'/view'}><Eye size={18}/></Link>
        </button>
        </div>
        <div className='md:flex md:items-start md:justify-start  flex justify-start items-start md:pl-3 pl-2  pt-6 md:pt-2'>
        <div className='pb-4 md:pb-1'>
        <div className='pt-2 md:pt-2 md:text-left text-left pl-2 md:pl-2 text-sm md:text-xs'>{item.descript}</div>
        <div  className='pt-0 md:pt-1 md:text-left text-blue-400 text-left md:pl-2 pl-2 text-sm md:text-xs'>{item.price}</div>
        <div className='w-full  flex items-center justify-center md:block'>
          <div>
          <button key={index}  disabled={shop[item.id]} onClick={()=>handleShop(item)} className={` ${shop[item.id] ? 'bg-gray-300' : 'bg-black-dark'} flex space-x-5 mt-4 md:flex md:space-x-24 pt-1.5 md:pt-3 pl-4 md:pl-4 text-white md:text-xs rounded-2xl md:w-52 md:h-10 md:rounded-3xl w-44 h-9`}> <div className='font-bold'>{ shop[item.id] ? "Added" : item.butt_ons }</div><div className={`${shop[item.id] ? "hidden": "block"}`}><ShoppingCart size={16}  className='mr-2 pb-0.5 text-blue-400 mt-0.5 '/></div></button>
          </div>
        </div>
        
        </div>
        </div>
      </div>
    ))}
  </div>
           </div>
        </div>
    </div>
  )
}

export default Women