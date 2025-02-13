import one from '../image_folder/download (4).jpeg'
import React , { useContext , useState } from 'react';
// import one from '../image_folder/balancing-1868051_1920.jpg'
import gadgets from './data/gadgets';
import { DataContext } from './Contexts/DataContext';
import { ChevronDown, ChevronUp, Heart, ShoppingCart , Eye, Tag } from 'react-feather';
import { Link } from 'react-router-dom';


function Gagdets() {

  const { handleView , handleFavourites, handleLikes , setHandleFavourites , shop , handleShop } = useContext(DataContext);

  const [handleGadgetsData , setHandleGadgetsData] = useState(gadgets)

   
  function handleGadgetsFilter(string){
   
    if(string === 'Phone' ){
      const handleThePhone = gadgets.filter((value)=> value.title === string);
      setHandleGadgetsData(handleThePhone);
    }else if (string === 'Laptop'){
       const handleTheLaptop = gadgets.filter((value)=>value.title ===  string);
       setHandleGadgetsData(handleTheLaptop)
    }else if(string === 'Headphone'){
      const handleTheHeadphone = gadgets.filter((value)=> value.title === string );
      setHandleGadgetsData(handleTheHeadphone);
    }else if(string === 'Earplugs'){
      const handleTheEarlplug = gadgets.filter((value)=> value.title === string);
      setHandleGadgetsData(handleTheEarlplug)
    }else if (string === 'All'){
      setHandleGadgetsData(gadgets);
    }

  }



  return (
    <div  className='mt-14'>
      <div className='w-full flex items-center justify-center'>
      <div className='w-full relative lg:w-11/12'>
        <img src={one} className='w-full  rounded-2xl mb-6 h-[60vh] sm:h-[70vh] md:h-[100vh]' />
      {/* <p className='text-center text-5xl text-black-dark'>Nothing To See Here Vigilant</p> */}

      {/* <div className= 'absolute top-0  lg:w-full bg-black-dark opacity-30 rounded-2xl w-full  h-[50vh] md:h-[50vh] z-20 lg:h-[85vh] '>
       
      </div> */}
      <div className='z-20 md:absolute w-7/12 text-3xl font-bold md:w-6/12 sm:absolute sm:top-40 sm:left-6 sm:text-4xl  text-white absolute top-28 md:left-6 md:text-5xl md:top-52 left-10'> 
       <span className='text-red-500'>Our collection</span> is crafted for the modern tech lover.
      </div>
      </div>
      </div>



      <div className='w-full'>
          <p className='text-center font-light text-xl md:text-5xl pb-6 md:mb-10 mt-6 '>Categories</p>
           <div className='flex items-center justify-center space-x-6 p-2'>
           <div onClick={()=>handleGadgetsFilter('All')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              All
            </div>
            <div onClick={()=>handleGadgetsFilter('Phone')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Phones
            </div>
            <div onClick={()=>handleGadgetsFilter('Laptop')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
               Laptops
            </div>
            <div onClick={()=>handleGadgetsFilter('Headphone')} className='w-20 h-6 cursor-pointer md:w-24 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Headphones
            </div>
            <div onClick={()=>handleGadgetsFilter('Earplugs')} className='w-16 h-6 cursor-pointer md:w-20 shadow-md md:h-9 text-center rounded-full md:pt-2 bg-grey-light text-sm'>
              Earplugs
            </div>
           </div>




    <div className='mt-32 mb-10 drop-shadow-2xl flex items-center overflow-hidden justify-center'>
    <div className="md:w-full w-8/12 lg:w-7/12 sm:w-9/12 mt-10 md:mt-0 grid grid-flow-col-1 gap-6 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 md:gap-4">
    {handleGadgetsData.map((item, index) => (
      <div className="rounded-xl  bg-white p-1 h-[70vh] md:h-[70vh]" key={index}>
        <div className='relative  h-[48vh] w-full  md:h-[49vh]'>
        <img src={item.image} className="w-full h-full object-cover rounded-md" alt={`Image ${index}`} />
        <button onClick={()=>handleLikes(item.id , item)} className='absolute top-2 right-2'>
          {handleFavourites[item.id] ? <Heart color='red' size={16} fill='red' /> : <Heart color='red' size={16} />}
        </button>
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
        <div className='h-6'>

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

export default Gagdets