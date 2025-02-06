import React, { useState , useEffect, useContext } from 'react';
import one from '../image_folder/sunglasses-2705642_1920.jpg';
import two from '../image_folder/accessory-3002608_1920.jpg';
import three from '../image_folder/woman-1846127_1280.jpg';
import four from '../image_folder/blue_.jpg';
import five from '../image_folder/red.jpg';
import Arrivals from './data/Arrivals';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Heart, ShoppingCart , Eye, Tag } from 'react-feather';
import  { DataContext } from  '../components/Contexts/DataContext';

function Hero() {

  const {handleIndex, setHandleIndex,  selectedItems , setSelectedItems , handleShop , shop , handleView} =  useContext(DataContext);



  const slides = [
    {
      image_render: one,
      description: <p className='text-white lg:text-2xl font-semibold pl-5 text-lg capitalize'>Discover the perfect blend of style, comfort,<span className='text-blue-400'>and quality – tailored just for you</span></p>,
      butt_on: <button className='bg-white text-black-dark rounded-3xl h-10 w-32  shadow-2xl'>Start Shopping</button>
    },

    {
      image_render: two,
      description: <p className='text-white font-semibold  lg:text-2xl pl-5 text-lg  capitalize'><span className='text-blue-400'>Unleash your true potential with our </span> premium collection designed for success</p>,
      butt_on: <button className='bg-white text-black-dark rounded-3xl h-10 w-32 shadow-2xl'>Start Shopping</button>
    },

    {
      image_render: three,
      description: <p className='text-black-dark font-semibold lg:text-2xl pl-5 text-lg capitalize'>Step into a new era of quality with our innovative products, <span className='text-blue-400'>designed to exceed expectations</span> </p>,
      butt_on: <button className='bg-red-thin rounded-3xl h-10 w-32 shadow-2xl'>Start Shopping</button>
    },
  ];

  const handleNext = () => {
    setHandleIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setHandleIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
        <div className="w-full mt-10 lg:mt-16 h-[60vh] relative lg:h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Forward and Back Buttons */}
        <div className="md:absolute md:z-20 md:top-10 md:w-40 md:right-4 absolute z-20 top-4 right-6 space-x-4 flex">
          <div
            className="w-4 h-4 md:w-6 md:h-6 bg-red-thin rounded-md flex justify-center items-center cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronUp size={16} color="black" />
          </div>
          <div
            className="w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-md flex justify-center items-center cursor-pointer"
            onClick={handleNext}
          >
            <ChevronDown size={16} color="black" />
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full lg:w-11/12 relative h-[60vh] lg:h-[100vh]">
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(-${handleIndex * 100}%)`,
            }}
          >
            {slides.map((slide, idx) => (
              <img
                key={idx}
                src={slide.image_render}
                className="w-full h-[60vh] lg:h-[100vh] object-cover rounded-3xl shadow-lg opacity-90"
                alt={`Slide ${idx}`}
              />
            ))}
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute md:w-96 md:top-48 md:z-20 lg:text-xl text-xs font-semibold w-96 top-28 z-20">
          <p>{slides[handleIndex].description}</p>
          <div className="flex items-center justify-center mt-20 lg:text-sm text-xs">
            {slides[handleIndex].butt_on}
          </div>
        </div>
      </div>

    


      <p className='text-center text-black-dark md:text-2xl text-lg pt-20'>Our New Collection</p>
    <div className='w-full block md:flex md:items-center mt-24 mb-24 md:mt-24 md:mb-40 justify-center h-fit md:space-x-16 space-x-0 '>

    <div className='w-full h-[30vh] shadow-lg relative   md:w-5/12 md:h-[60vh]'>
      <img src={five} className='w-full rounded-none md:rounded-md h-full'/>
      <div className='md:absolute md:bottom-28  md:right-10 absolute bottom-16 right-5'>
      <p className='text-blue-400'>30% OFF</p>
      <p className='text-black-dark  pb-10'>NEW COLLECTION</p>
      <button className='border-t text-sm hover:bg-blue-500 duration-500 hover:text-white hover:border-none hover:outline-none  border-l border-r  shadow-md  border-black-dark border-b w-32 h-10'>
        Shop now
      </button>
      </div>
    </div>



    <div className='w-full mt-0 md:mt-0  shadow-lg relative h-[30vh] rounded-md md:w-5/12 md:h-[60vh]'>
      <img src={four} className='w-full rounded-none md:rounded-md h-full'/>
      <div className='absolute bottom-16  right-5 md:absolute md:bottom-28  md:right-10'>
      <p className='text-red-400'>30% OFF</p>
      <p className='text-black-dark  pb-10'>NEW COLLECTION</p>
      <button className='border-t text-sm hover:bg-red-500 duration-500 hover:text-white hover:border-none hover:outline-none  border-l border-r  shadow-md  border-black-dark border-b w-32 h-10'>
        Shop now
      </button>
      </div>
    
    </div>
    </div>



  <div className='md:pt-20 bg-grey-thin md:pb-6 pt-10 pb-0'>

    <div className='w-full flex justify-center drop-shadow-2xl items-center font-thin text-xl '>
      <div className='hover:border-b-[1px] ease-in-out lg:text-5xl text-3xl  cursor-pointer hover:border-b-black-dark duration-200'>
      New Arrivals
      </div>    
    </div>
  </div>


  <div className="w-full  bg-grey-thin drop-shadow-2xl flex justify-center items-center h-fit md:h-fit pt-40 pb-96">
  <div className="md:w-7/12 w-8/12 mt-10 md:mt-0 grid grid-flow-col-1 gap-6  md:grid md:grid-cols-3 md:gap-6">
    {Arrivals.map((item, index) => (
      <div  className="rounded-xl bg-white p-1 h-[71vh] md:h-[78vh]" key={index}>
        <div  className='relative h-[53vh] md:h-[58vh]'>
        <img src={item.image} className="w-full h-full object-cover rounded-md" alt={`Image ${index}`} />
        <div className='absolute top-2 right-2'>
          <Heart color='black' size={16} />
        </div>
        <div className='absolute top-2 left-2'>
          <Tag size={16} className='text-red-600'/>
        </div>
        <button onClick={()=>handleView(item)} className='absolute  bottom-0 right-3'>
        <Link to={'/view'}>
         <Eye size={18}/>
         </Link>
        </button>
        </div>
        
       
        <div className='md:flex md:items-start md:justify-start  flex justify-start items-start md:pl-3 pl-2  pt-6 md:pt-2'>
        <div className='pb-4 md:pb-1'>
        <div className='pt-2 md:pt-2 md:text-left text-left pl-2 md:pl-2 text-sm md:text-xs'>{item.descript}</div>
        <div  className='pt-0 md:pt-1 md:text-left text-blue-400 text-left md:pl-2 pl-2 text-sm md:text-xs'>{item.price}</div>
        <div className='w-full  flex items-center justify-center md:block'>
          <div>
          <button key={index}  disabled={shop[item.id]} onClick={()=>handleShop(item)} className={` ${shop[item.id] ? 'bg-gray-300' : 'bg-black-dark'} flex space-x-5 md:flex md:space-x-24 pt-1.5 md:pt-3 pl-4 md:pl-4 text-white md:text-xs mt-2 rounded-2xl md:w-52 md:h-10 md:rounded-3xl w-44 h-9`}> <div className='font-bold'>{ shop[item.id] ? "Added" : item.butt_ons }</div><div className={`${shop[item.id] ? "hidden": "block"}`}><ShoppingCart size={16}  className='mr-2 pb-0.5 text-blue-400 mt-0.5 '/></div></button>
          </div>
        </div>
        
        </div>
        </div>
      </div>
    ))}
  </div>
</div>

 

    </div>
  );
}

export default Hero;
