import React, { useState  , useEffect} from "react";
import one from '../image_folder/woman-2564660_1920.jpg'
// import Navbar from "./components/Navbar";
import {ArrowRight, ArrowUpRight, Circle , ShoppingBag , CreditCard, Shield} from 'react-feather';
import two from '../image_folder/8dbab1bcd891eb914907ca42db4ac501-removebg-preview.png'
import three from '../image_folder/yellow_show.jpg'
import four from '../image_folder/red_black.jpg'
import five from '../image_folder/green-removebg-preview.png'
import six from '../image_folder/lp-removebg-preview.png'
import seven from '../image_folder/bag-removebg-preview.png'
import eight from '../image_folder/model_1.jpg'
import nine from '../image_folder/GUEST_23c32b6d-d90a-4287-acb4-1d1623e306a1.webp'
import { Link } from "react-router-dom";

// import Footer from "./components/Footer";


export default function Home() {
 
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-in');
  //         } else {
  //           entry.target.classList.remove('animate-in');
  //         }
  //       });
  //     },
  //     { threshold: 0.5, rootMargin: "0px 0px -20% 0px" } // Adjust threshold and rootMargin as needed
  //   );
  
  //   const elements = document.querySelectorAll('.animate-on-scroll');
  //   elements.forEach((el) => observer.observe(el));
  
  //   return () => {
  //     elements.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);
  

  return (
  <div className="w-full md:mb-28 mt-6 mb-6 ">
    <div className="flex items-center justify-center">
<div className="w-12/12 relative  ml-0  mt-4 md:mt-16 lg:mt-16 mr-0 sm:w-11/12 md:w-11/12 ">
       <img src={one} className="w-full h-[60vh] sm:h-[65vh] md:h-[100vh] rounded-none  md:rounded-2xl" />
    </div>
    </div>
    
    
    <div className="absolute z-10 top-48 left-6 sm:absolute sm:top-44 sm:left-24  md:absolute md:top-96 md:left-28 lg:absolute lg:top-96 lg:left-28">
      <div className="text-red-400 font-bold text-xl md:text-4xl lg:text-4xl border-b border-b-gray-50 pb-4">Contemporary  <span className="text-white">and urban energy</span></div>
      <div className="flex space-x-16 pt-6">
      <div>
     <div className="flex text-slate-200  md:text-black-neutral text-sm sm:text-base md:text-base lg:text-base space-x-2">
      <div className="mt-0 md:mt-1 h-4 w-4 ">
        <Circle className="animate-pulse  duration-500 w-full h-full" color="white" size={16} />
      </div>
      <div className="ml-4">
      Agora Seasons
      </div>
     
      </div>
      <div className="ml-6 text-sm text-slate-200 md:text-black-neutral sm:text-base md:text-base lg:text-base">
        Sales with%50  
      </div>
      </div>
   <div className="text-sm text-black-neutral sm:text-base md:text-base lg:text-base">
    <div>June 26 - June 29 2024</div>
    <div>Barbarella Salon</div> 
   </div>
      
      </div>

      <div className="mt-8 flex space-x-10">
        <Link to={'/signup'}>
        <button className="w-28 flex space-x-2 ml-2 md:ml-4 lg:ml-4 h-10 rounded-full text-sm bg-red-thin shadow-md hover:animate-bounce hover:running duration-200 hover:bg-blue-400 hover:text-black-dark">
          <div className="ml-4 mt-2.5">Shop now</div>
          <div className="mt-4"><ArrowRight size={12}/></div>
        </button>
        </Link>

        <Link to={'/signup'}>
        <button className="w-28 h-10  rounded-full ml-0 md:ml-4 text-sm bg-slate-100 text-black-dark hover:text-white transform hover:translate-x-2  hover:bg-blue-400 duration-500 shadow-md">Discover</button>
        </Link>
      </div>

   </div>
      

      <div className="w-full">
      <div className="md:mb-20 mb-16  mt-14 md:mt-20">
          <p className="font-bold text-center text-gray-600 sm:mt-10 duration-700 text-xl md:text-3xl">Fashion and offers for everybody</p>
      </div>


   {/* Earphone */}
      <div className='sm:flex  md:items-center sm:justify-center block items-center '>
      <div className="md:flex flex items-center justify-center  space-x-8 ">
      <div className="w-40 md:h-64 md:w-52 mb-12 sm:mb-2 relative  rounded-3xl shadow-lg h-52">
       <img src={four} className="w-full rounded-3xl h-full"/>
       <div className="absolute top-16 left-4 md:absolute md:top-24 md:left-4">
          <p className="text-xs text-white">
          Enjoy <br/>
        <span className="text-lg">With</span><br/> 
        <span className="text-2xl font-medium opacity-30">Earphone</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-red-600">
            <p className="text-xs text-white">Browse</p>
          </button>
        </div>
       </div>


       {/* Kicks */}
       <div className="relative">
       <div className="w-40 md:h-64 md:w-52 mb-12 md:mb-2 relative  duration-1000 rounded-3xl shadow-lg h-52">
       <div className="absolute inset-0 bg-black-dark opacity-20 rounded-3xl z-10"></div>
       <img src={three} className="w-full animate-in zoom-in-100 duration-1000 rounded-3xl h-full relative z-0" />
    
    
    <div className="absolute top-16 left-4 md:absolute md:top-24 md:left-4">
      <p className="text-xs font-semibold text-white">
        New <br/>
        <span className="text-lg">Kick</span><br/>
        <span className="text-2xl font-medium md:opacity-40 opacity-55 ">Arrivals</span>
      </p>
      <button className="w-20 h-8 mt-4 rounded-2xl transform hover:translate-y-2 duration-500 shadow-md bg-yellow-400">
        <p className="text-xs text-white">Browse</p>
      </button>
    </div>
  </div>
</div>
</div>
 
 {/* laptop  */}

<div className="flex justify-center items-center">
  <div  className="lg:w-[28rem] ml-1 md:ml-7 w-96  relative  8 duration-500 h-64 shadow-md rounded-xl bg-pink-500">
       <img src={six} className="w-2/4 md:w-2/4 ml-40 pt-8  md:mt-0 md:ml-28 h-3/4  rounded-3xl md:h-full"/>
       <div className="md:absolute md:top-24 md:left-4 absolute top-14 left-4">
          <p className="text-xs ">
          Trend <br/>
        <span className="text-lg">Devices</span><br/> 
        <span className="text-2xl font-medium opacity-30">Laptop</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-pink-300">
            <p className="text-xs text-white">Browse</p>
          </button>
        </div>
       </div>  
</div>
   
</div>



{/* Men's wear */}
<div className="sm:flex sm:items-center mt-4 sm:mt-4 sm:justify-center block items-center">
      <div className=" md:flex md:justify-between flex items-center justify-center  space-x-8">
         <div className="lg:w-[28rem] relative  duration-1000 mr-0 ml-1 md:mr-6 w-96  shadow-md rounded-xl bg-green-800  h-64">
        <div>
           <img className="w-2/4 md:w-2/4 ml-40 pt-8 md:ml-28  h-full" src={five} />
        </div>
       
        <div className="absolute top-24 left-4">
          <p className="text-xs ">
          New <br/>
        <span className="text-lg">Shirts</span><br/> 
        <span className="text-2xl font-medium opacity-30">Men's Wear</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-black-darker">
            <p className="text-xs text-white">Browse</p>
          </button>
        </div>
      </div> 
      </div>
      {/* woman and bags */}
      <div className="flex space-x-8  mt-12  items-center justify-center sm:mt-0 ">
      <div className="lg:w-52 w-40 h-52 sm:ml-2 ml-0 relative  duration-600 rounded-2xl shadow-md md:h-64">
        <img className="w-full  rounded-2xl h-full" src={two} />
        <div className="absolute top-9 left-4 md:absolute md:top-16 md:left-4">
          <p className="text-xs ">
          New <br/>
        <span className="text-lg">Dresses</span><br/> 
        <span className="text-2xl font-medium opacity-30">Women's Wear</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-blue-500">
            <p className="text-xs text-white">Browse</p>
          </button>
        </div>
      </div>
      <div className="relative">
      <div className="absolute inset-0 bg-black-dark opacity-20 rounded-2xl z-10"></div>
      <div className="lg:w-52 w-40 h-52 relative shadow-md md:h-64  bg-slate-200 rounded-2xl  ">
        <img className="w-full  h-full" src={seven} />
        <div className="absolute top-16 left-4 md:absolute md:top-24 md:left-4">
          <p className="text-xs ">
          New <br/>
        <span className="text-lg">Arrivals</span><br/> 
        <span className="text-2xl font-medium opacity-40">Bags</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-grey-thin">
            <p className="text-xs text-black-dark">Browse</p>
          </button>
        </div>
      </div> 
      </div>
      </div>   
     </div>
      </div>


      {/* Experience the Best Shopping Journey */}

      <div className="w-full flex justify-center mt-20 items-center">
        <div className="md:bg-grey-thin bg-white md:w-11/12 w-full h-[80vh]  rounded-2xl  ">
        <div className="md:pt-14 pt-4 duration-700 space-x-32">
      <p className="md:text-4xl text-xl  mb-16 md:mb-0 text-center  font-bold">Experience the Best Shopping Journey</p>
        </div>


        <div className="w-full block text-center md:text-left md:flex md:space-x-16 md:mt-40 mt-6">
    <div className="md:ml-8 ml-0  duration-500 w-full md:w-1/3">
      <div className="flex items-start pl-6 md:pl-0 justify-start mb-4 ">
        <div className="md:w-20 md:h-14 w-8 h-8">
           <ShoppingBag color="#60a5fa" className="w-full h-full" />
        </div>
     
      </div>
      <div className="text-left mb-10 pl-6 md:pl-0">
        <p className="font-bold md:text-xl text-sm mb-2">Wide Product Selection</p>
        <p className="text-left font-normal  text-sm">Explore a diverse range of products <br/> from fashion to electronics, all in one place</p>
      </div>
    </div>
    <div className="md:w-1/3 w-full animate-on-scroll slide-in-from-bottom-20 duration-700">
    <div className="flex items-start pl-6 md:pl-0 justify-start">
      <div className="md:w-20 w-8 h-8 mb-4 md:h-14">
      <CreditCard color="#60a5fa " className="w-full h-full" />
      </div>
    </div>
      <div className="text-left pl-6 mb-10 md:pl-0">
        <p className="font-bold md:text-xl text-sm  mb-2">Secure Payment Options</p>
        <p className="text-sm font-normal text-left">Enjoy peace of mind with our secure and flexible payment methods.</p>
      </div>
    </div>
    <div className="md:w-1/3 w-full animate-on-scroll slide-in-from-bottom-20 duration-1000">
    <div className="flex items-start pl-6 md:pl-0 justify-start">
       <div className="md:w-20 w-8 h-8  mb-4 md:h-14">
      <Shield color="#60a5fa " className="w-full h-full" />
      </div>
    </div>
   
      <div className="mb-2 text-left pl-6 md:pl-0 ">
        <p className="font-bold md:text-xl text-sm mb-2">Trusted Customer Support</p>
        <p className="text-sm font-normal">Get assistance anytime with our dedicated support team
         ensuring your shopping experience is smooth and worry-free</p>
      </div>
    </div>
  </div>
   


        </div>

      </div>



<div className="w-full mt-24">
<div className="md:flex md:items-center mb-44 justify-between block">
  {/* first discount */}
  <div className="text-md md:w-5/12 w-full mt-24 pl-6 text-black-dark">
<p className="text-2xl font-bold pb-10">50% <span className="text-red-500">Discount</span></p>
Unlock incredible savings with our exclusive discounts! For a limited time, enjoy up to 50% off on a wide range of products, including fashion, electronics, and home essentials. Whether you're shopping for the latest trends or upgrading your gadgets, we have deals that you can't resist. Plus, sign up for our newsletter and get an additional 10% off your first purchase. Don't miss out—these offers are only available while stocks last
</div>
<div className="md:w-5/12 w-full ml-16 md:ml-0 h-[65vh] md:h-[68vh] mt-10 -skew-x-6 transform">
  <img src={eight} className="w-3/4 rounded-2xl h-full" />
</div>
</div>


{/* second discount */}



<div className="md:flex  md:mt-32 mt-16 block md:items-center justify-between">
  <div className="md:w-5/12 w-full mb-20 md:ml-8 ml-10 md:h-[68vh] h-[65vh] mt-4 -skew-x-6 transform">
  <img src={nine} className="w-3/4 rounded-2xl h-4/4" />
</div>
<div className="text-md md:w-5/12 w-full mt-0 pl-4 md:pl-2 text-black-dark">
<p className="text-2xl font-bold pb-10">50% <span className="text-blue-500">Discount</span></p>
<p className="sm:text-md  md:text-md text-md lg:text-md pr-4">
  Unlock incredible savings with our exclusive discounts! For a limited time, enjoy up to 50% off on a wide range of products, including fashion, electronics, and home essentials. Whether you're shopping for the latest trends or upgrading your gadgets, we have deals that you can't resist. Plus, sign up for our newsletter and get an additional 10% off your first purchase. Don't miss out—these offers are only available while stocks last
</p>
</div>
</div>






</div>



   </div>
  )
}
