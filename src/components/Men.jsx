import React , { use, useContext, useState } from 'react';
import one from '../image_folder/balancing-1868051_1920.jpg'
import data_men from './data/mens';
import { DataContext } from './Contexts/DataContext';
import { ChevronDown, ChevronUp, Heart, ShoppingCart , Eye, Tag, Filter } from 'react-feather';
import { Link } from 'react-router-dom';

function Men() {
 
  const { handleView , shop , handleShop } = useContext(DataContext);
  const [handleData , setHandleData] = useState(data_men);



  function handleShirts(string){
   
    if(string === 'Shirt' ){
      const handleTheShirts = handleData.filter((value)=> value.title === string);
      setHandleData(handleTheShirts);
    }else if (string === 'Glasses'){
       const handleTheGlasses = handleData.filter((value)=>value.title ===  string);
       setHandleData(handleTheGlasses)
    }else if(string === 'Watch'){
      const handleTheWatch = handleData.filter((value)=> value.title === string );
      setHandleData(handleTheWatch);
    }else if(string === 'Shoes'){
      const handleTheShoe = handleData.filter((value)=> value.title === string);
      setHandleData(handleTheShoe);
    }else if(string === 'Shorts'){
      const handleTheShorts = handleData.filter((value)=> value.title === string);
      setHandleData(handleTheShorts)
    }else if(string === 'Touser'){
      const handleTheTrousers = handleData.filter((value)=> value.title === string);
      setHandleData(handleTheTrousers);
    }else if (string === 'All'){
      setHandleData(data_men);
    }

  }





  return (
    <div>
        <div className='flex w-full overflow-hidden items-center justify-center'>
            <div className='w-full relative h-[50vh] mb-4 rounded-2xl mt-10 md:mt-16  md:h-[100vh]'>
                <img src={one} className='w-full md:w-11/12 md:ml-10 ml-0 h-full rounded-2xl'/>
                <div className='absolute top-0 md:w-11/12 md:ml-10 ml-0 bg-black-dark opacity-30 rounded-2xl w-full  h-[50vh]  z-20 md:h-[100vh] '>
                  <div className='text-red-thin z-50 text-left text-lg  left-2 absolute top-4 md:absolute md:top-10 md:text-6xl font-extrabold md:left-16'>
                  <div className='text-left font-bold text-3xl z-50 w-6/12  left-0 absolute top-10 md:absolute md:top-6 md:font-extrabold md:text-7xl md:left-1'>Check Our Men's Collection</div>
                  </div>
                </div>
            </div>
        </div>

        <div className='w-full'>
          <p className='text-center font-light text-xl md:text-5xl pb-6 md:mb-10 mt-6 '>Categories</p>
           <div className='flex items-center justify-center text-xs md:text-md scrollbar-hide overflow-x-scroll space-x-6 p-2'>
           {/* <div  className='md:w-20 md:h-9 cursor-pointer  w-16 h-6 text-center text-sm'>
              <Filter size={16}/>
            </div> */}
           <div onClick={()=>handleShirts('All')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              All
            </div>
            <div onClick={()=>handleShirts('Shirt')} className='w-52 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              Shirts
            </div>
            <div onClick={()=>handleShirts('Glasses')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              Glasses
            </div>
            <div onClick={()=>handleShirts('Watch')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              Watch
            </div>
            <div onClick={()=>handleShirts('Shoes')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              Shoes
            </div>
          
            <div onClick={()=>handleShirts('Shorts')} className='md:w-20 md:h-9 cursor-pointer shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
              Shorts
            </div>
            <div onClick={()=>handleShirts('Touser')} className='md:w-20 md:h-9 cursor-pointer  shadow-md  w-52 h-6 text-center rounded-full md:pt-2 bg-gray-50 text-sm'>
               Trousers
            </div>
           </div>




    <div className='mt-32 mb-10 drop-shadow-2xl flex items-center justify-center'>
    <div className="md:w-11/12 lg:w-8/12 w-8/12 mt-10 md:mt-0 grid grid-flow-col-1 gap-6 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 md:gap-14">
    {handleData.map((item, index) => (
      <div className="rounded-xl bg-white p-1 h-[70vh] lg:h-[76vh]" key={index}>
        <div className='relative h-[50vh] w-full  md:h-[54vh]'>
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
        <div className='md:flex md:items-start md:justify-start  flex justify-start items-start md:pl-3 pl-2  pt-6 md:pt-2'>
        <div className='pb-4 md:pb-1'>
        <div className='pt-2 md:pt-2 md:text-left text-left pl-2 md:pl-2 text-sm md:text-xs'>{item.descript}</div>
        <div  className='pt-0 md:pt-1 md:text-left text-blue-400 text-left md:pl-2 pl-2 text-sm md:text-xs'>{item.price}</div>
        <div className='w-full  flex items-center justify-center md:block'>
          <div>
          <button key={index}  disabled={shop[item.id]} onClick={()=>handleShop(item)} className={` ${shop[item.id] ? 'bg-gray-300' : 'bg-black-dark'} flex space-x-10 md:flex md:space-x-24 pt-1.5 md:pt-3 pl-4 md:pl-4 text-white md:text-xs mt-2 rounded-2xl md:w-52 md:h-10 md:rounded-3xl w-44 h-9`}> <div className='font-bold'>{ shop[item.id] ? "Added" : item.butt_ons }</div><div className={`${shop[item.id] ? "hidden": "block"}`}><ShoppingCart size={16}  className='mr-2 pb-0.5 text-blue-400 mt-1.5 md:mt-0.5 '/></div></button>
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

export default Men