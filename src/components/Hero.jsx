import React, { useState , useEffect } from 'react';
import one from '../image_folder/sunglasses-2705642_1920.jpg';
import two from '../image_folder/accessory-3002608_1920.jpg';
import three from '../image_folder/balancing-1868051_1920.jpg';
import { ChevronDown, ChevronUp } from 'react-feather';

function Hero() {
  const [index, setIndex] = useState(0);


  

  const slides = [
    {
      image_render: one,
      description: <p className='text-white font-bold  text-2xl capitalize'>Discover the perfect blend of style, comfort, <span className='text-blue-400'>and quality – tailored just for you</span></p>,
      butt_on: <button className='bg-white text-black-dark rounded-3xl h-10 w-32  shadow-2xl'>Start Shopping</button>
    },

    {
      image_render: two,
      description: <p className='text-white  text-2xl font-bold   capitalize'><span className='text-blue-400'>Unleash your true potential with our </span> premium collection designed for success</p>,
      butt_on: <button className='bg-white text-black-dark rounded-3xl h-10 w-32 shadow-2xl'>Start Shopping</button>
    },

    {
      image_render: three,
      description: <p className='text-black-dark font-bold   text-2xl capitalize'>Step into a new era of quality with our innovative products, <span className='text-red-thin'>designed to exceed expectations</span> </p>,
      butt_on: <button className='bg-red-thin rounded-3xl h-10 w-32 shadow-2xl'>Start Shopping</button>
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  useEffect(()=>{
    setInterval(handleNext , 3000);
} , []);

  return (
    <div className="w-full h-screen">
      <div className="w-full relative mt-10  h-[100vh] flex items-center justify-center">
        <div className="absolute z-30 top-10 w-40 right-4 space-x-4 flex">
          <div
            className="w-6 h-6 bg-red-thin rounded-md flex justify-center items-center cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronUp size={16} color="black" />
          </div>
          <div
            className="w-6 h-6 bg-blue-400 rounded-md flex justify-center items-center cursor-pointer"
            onClick={handleNext}
          >
            <ChevronDown size={16} color="black" />
          </div>
        </div>
        <img
          src={slides[index].image_render}
          className="w-11/12 ml-3 rounded-2xl transition-transform duration-700 ease-in-out shadow-lg opacity-90 mr-3 h-[100vh]"
          alt="Slide"
        />
        <div className="absolute rounded-2xl w-11/12">
          <div className="bg-black-dark pr-4 rounded-2xl pl-4 opacity-45 z-20 w-full h-[100vh]">
          </div>
        </div>
        <div className= 'absolute w-96 top-48 z-40' style={{ whiteSpace: 'normal' }} >
              <p>{slides[index].description}</p>
              <div className='flex items-center justify-center mt-20 text-sm'>{slides[index].butt_on}</div>
            </div>

      </div>
    </div>
  );
}

export default Hero;
