import one from '../image_folder/woman-7009979_1920.jpg'
import React , { useContext, useState } from 'react';
// import one from '../image_folder/balancing-1868051_1920.jpg'
import data_women from './data/womens';
import { DataContext } from './Contexts/DataContext';
import { ChevronDown, ChevronUp, Heart, ShoppingCart , Eye, Tag } from 'react-feather';
import { Link } from 'react-router-dom';

function Women() {
  const { handleView , shop , handleShop } = useContext(DataContext);

  const [handleWomenData , setHandleWomenData] = useState(data_women)

   
  function handleWomenFilter(string){
   
    if(string === 'Dress' ){
      const handleTheShirts = data_women.filter((value)=> value.title === string);
      setHandleWomenData(handleTheShirts);
    }else if (string === 'Shoe'){
       const handleTheGlasses = data_women.filter((value)=>value.title ===  string);
       setHandleWomenData(handleTheGlasses)
    }else if(string === 'Bag'){
      const handleTheWatch = data_women.filter((value)=> value.title === string );
      setHandleWomenData(handleTheWatch);
    }else if (string === 'All'){
      setHandleWomenData(data_women);
    }

  }




  return (
    <div className='mt-8 md:mt-16'>
      <div className='flex w-full  justify-center items-center '>
        <div className='md:w-11/12 w-full relative'>
          <img src={one} className='w-full h-[60vh] sm:h-[70vh] md:h-[90vh] rounded-2xl lg:h-full' />
          <div className='absolute md:absolute top-32 left-10 sm:absolute sm:top-40 sm:left-28 md:top-52 md:left-28  z-10'>
            <div className='md:w-9/12 sm:text-5xl sm:font-bold md:text-5xl text-3xl w-9/12 font-bold text-white'>Discover timeless trends and modern looks.</div>
          </div>
        </div>
      </div>
      <div className='w-full'>
          <p className='text-center font-light text-xl md:text-5xl pb-6 md:mb-10 mt-6 '>Categories</p>
           <div className='flex items-center justify-center space-x-6 p-2'>
           <div onClick={()=>  handleWomenFilter('All')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              All
            </div>
            <div onClick={()=>  handleWomenFilter('Dress')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Dresses
            </div>
            <div onClick={()=>  handleWomenFilter('Bag')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-16 h-6 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Bags
            </div>
            <div onClick={()=>  handleWomenFilter('Shoe')} className='md:w-20 md:h-9 cursor-pointer  shadow-md  w-16 h-6 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
               Shoes
            </div>
           </div>




    <div className='mt-32 mb-10 drop-shadow-2xl flex items-center justify-center'>
    <div className="md:w-full lg:w-7/12 w-9/12 sm:w-10/12 mt-10 md:mt-0 grid grid-flow-col-1 gap-6 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 md:gap-6">
    {handleWomenData.map((item, index) => (
      <div className="rounded-xl  bg-white p-1 h-[86vh] md:h-[74vh]" key={index}>
        <div className='relative w-full h-[63vh] md:h-[54vh]'>
        <img src={item.image} className="w-full h-full object-cover rounded-md" alt={`Image ${index}`} />
        <div className='absolute top-2 right-2'>
          <Heart color='red' size={16} />
        </div>
        {/* <div className='absolute top-2 left-2'>
          <Tag size={16} className='text-red-600'/>
        </div> */}
        <button onClick={()=>handleView(item)} className='absolute bottom-0 right-3'>
          <Link to={'/view'}><Eye size={18}/></Link>
        </button>
        </div>
        <div className=''>
        <div className='pb-4 md:pb-1'>
        <div className='pt-2 md:pt-2 md:text-left text-left pl-2 md:pl-2 text-sm md:text-xs'>{item.descript}</div>
        <div  className='pt-0 md:pt-1 md:text-left text-blue-400 text-left md:pl-2 pl-2 text-sm md:text-xs'>{'Ghs ' + item.price}</div>
        <div className='h-3'>

        </div>
        <div className='w-full'>
          <div className='w-11/12 ml-2'>
          <button key={index}  disabled={shop[item.id]} onClick={()=>handleShop(item)} className={` ${shop[item.id] ? 'bg-gray-300' : 'bg-black-dark'} flex justify-between md:flex md:space-x-14 pr-4 md:pr-0 pt-2.5 md:pt-3 pl-4 md:pl-2 text-white md:text-xs mt-2 rounded-2xl md:w-full md:font-light md:h-11 lg:h-10 md:rounded-lg lg:rounded-2xl w-full h-12`}> <div className='font-bold'>{ shop[item.id] ? "Added" : item.butt_ons }</div><div className={`${shop[item.id] ? "hidden": "block"}`}><ShoppingCart size={16}  className='mr-2 pb-0.5 text-blue-400 mt-1.5 md:mt-0.5 '/></div></button>
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