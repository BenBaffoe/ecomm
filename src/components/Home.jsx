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
 
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
              } else {
                entry.target.classList.remove('animate-in');
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);



  return (
  <div className="w-full h-[200vh]">
  <div className=''>
  <div className="w-full rounded-2xl pt-10 h-screen">
  <div className="w-full h-[100vh] rounded-2xl mt-14  sm:mt-16 md:mt-20 lg:mt-24 flex items-center justify-center">
     <img className='w-11/12  ml-3 rounded-2xl  opacity-90 mr-3 scale-y-105 h-[120vh]' src={one}  />
  </div>
  </div>

     <div className="absolute top-96 left-28">
      <div className="text-blue-400 font-bold text-4xl border-b border-b-gray-50 pb-4">Contemporary  <span className="text-white">and urban energy</span></div>
      <div className="flex space-x-16 pt-6">
      <div>
     <div className="flex space-x-2">
      <div className="mt-1">
        <Circle className="animate-pulse duration-500" size={16} />
      </div>
      <div className="ml-4">
      Agora Seasons
      </div>
     
      </div>
      <div className="ml-6">
        Sales with%50  
      </div>
      </div>
   <div>
    <div>June 26 - June 29 2024</div>
    <div>Barbarella Salon</div> 
   </div>
      
      </div>

      <div className="mt-8 flex space-x-16">
        <Link to={'/signup'}>
        <button className="w-28 flex space-x-2 ml-4 h-10 rounded-full text-sm bg-red-thin shadow-md hover:animate-bounce hover:running duration-200 hover:bg-blue-400 hover:text-black-dark">
          <div className="ml-4 mt-2.5">Shop now</div>
          <div className="mt-4"><ArrowRight size={12}/></div>
        </button>
        </Link>

        <Link to={'/signup'}>
        <button className="w-28 h-10  rounded-full ml-0 text-sm bg-slate-100 text-black-dark hover:text-white transform hover:translate-x-2  hover:bg-blue-400 duration-500 shadow-md">Discover</button>
        </Link>
      </div>


     

     </div>
     {/* <div className="relative">
      <Link to={'/signup'}>
      <div className="absolute  sm:mt-0 md:mt-0 lg:mt-0 lg:absolute lg:-top-72 sm:absolute sm:top-96 cursor-pointer left-6">
      <ArrowUpRight color="white" size={18}/>
      </div>
      </Link>
     </div> */}

    
     
     {/* <p className="text-black-dark">fashion</p> */}
     </div>

     <div className="w-full">
     <div className=" mb-20">
        <p className="font-bold text-center text-gray-600 sm:mt-10 text-3xl">Fashion and offers for everybody</p>
      </div>
     </div>

     
     <div className='mx-14 ml-44 mt-36  lg:mt-4 md:mt-6 sm:mt-20 flex pr-16'>
     
      <div className="flex space-x-8">
      <div className="w-52 relative rounded-3xl shadow-lg h-64">
       <img src={four} className="w-full rounded-3xl h-full"/>
       <div className="absolute top-24 left-4">
          <p className="text-xs ">
          Enjoy <br/>
        <span className="text-lg">With</span><br/> 
        <span className="text-2xl font-medium opacity-30">Earphone</span>
          </p>
          <button className="w-20 h-8 mt-4 transform hover:translate-y-2 duration-500 rounded-2xl shadow-md bg-red-600">
            <p className="text-xs text-white">Browse</p>
          </button>
        </div>
       </div>
       <div className="relative">
       <div className="w-52 rounded-3xl shadow-md h-64 relative">
       <div className="absolute inset-0 bg-black-dark opacity-20 rounded-3xl z-10"></div>
       <img src={three} className="w-full animate-in zoom-in-100 duration-1000 rounded-3xl h-full relative z-0" />
    
    
    <div className="absolute top-24 left-4 z-20">
      <p className="text-xs font-semibold text-white">
        New <br/>
        <span className="text-lg">Kick</span><br/>
        <span className="text-2xl font-medium opacity-40">Arrivals</span>
      </p>
      <button className="w-20 h-8 mt-4 rounded-2xl transform hover:translate-y-2 duration-500 shadow-md bg-yellow-400">
        <p className="text-xs text-white">Browse</p>
      </button>
    </div>
  </div>
</div>


       <div  className="w-[28rem] relative h-64 shadow-md rounded-xl bg-pink-500">
       <img src={six} className="w-2/4 ml-28  rounded-3xl h-full"/>
       <div className="absolute top-24 left-4">
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

     <div className="ml-28 mt-4 mr-8 flex">
      <div className="flex space-x-8">
         <div className="w-[28rem] relative ml-16 shadow-md rounded-xl bg-green-800  h-64">
        <img className="w-2/4 ml-28  h-full" src={five} />
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
     <div className="w-52 relative  rounded-2xl shadow-md h-64">
        <img className="w-full  rounded-2xl h-full" src={two} />
        <div className="absolute top-24 left-4">
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
      <div className="w-52 shadow-md h-64 relative bg-slate-200 rounded-3xl  ">
        <img className="w-full  h-full" src={seven} />
        <div className="absolute top-24 left-4 z-20">
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

<div className="ml-16 sm:ml-4 md:ml-4 lg:ml-28 w-[150vh] lg:w-[190vh] sm:w-[160vh] md:w-[170vh] mt-32">
  <div className="bg-slate-100 text-black-dark h-[90vh] mr-24 shadow-lg w-full lg:w-11/12 md:w-full sm:w-full  rounded-2xl">
  <div className="pt-14 pl-8  pr-8 animate-on-scroll  slide-in-from-left-32 duration-700 space-x-32">
  <p className="text-4xl font-bold">Experience the Best <br/>Shopping Journey</p>
  </div>

  <div className="w-full flex space-x-16 mt-40">
    <div className="ml-8 animate-on-scroll slide-in-from-bottom-32 duration-500  w-1/3">
      <div className="w-20 ml-10 mb-4 h-14">
      <ShoppingBag color="#60a5fa" className="w-full h-full" />
      </div>
      <div>
        <p className="font-bold text-xl mb-2">Wide Product Selection</p>
        <p className="text-sm font-normal">Explore a diverse range of products <br/> from fashion to electronics, all in one place</p>
      </div>
    </div>
    <div className="w-1/3 animate-on-scroll slide-in-from-bottom-32 duration-700">
    <div className="w-20 ml-10   mb-4 h-14">
      <CreditCard color="#60a5fa " className="w-full h-full" />
      </div>
      <div>
        <p className="font-bold text-xl  mb-2">Secure Payment Options</p>
        <p className="text-sm font-normal">Enjoy peace of mind with our secure and flexible payment methods.</p>
      </div>
    </div>
    <div className="w-1/3 animate-on-scroll slide-in-from-bottom-32 duration-1000">
    <div className="w-20 ml-10  mb-4 h-14">
      <Shield color="#60a5fa " className="w-full h-full" />
      </div>
      <div className="mb-2">
        <p className="font-bold text-xl mb-2">Trusted Customer Support</p>
        <p className="text-sm font-normal">Get assistance anytime with our dedicated support team
         ensuring your shopping experience is smooth and worry-free</p>
      </div>
    </div>
  </div>
   
  </div>
</div>


<div className="w-[150vh] lg:w-[190vh] sm:w-[160vh] md:w-[170vh] mt-36 pl-20 ml-16 mr-6 bg-grey-thin overflow-hidden  rounded-t-2xl flex space-x-44 h-[90vh]">
<div className="text-md w-5/12 mt-24 pl-6 text-black-dark">
<p className="text-2xl font-bold pb-10">50% <span className="text-red-500">Discount</span></p>
Unlock incredible savings with our exclusive discounts! For a limited time, enjoy up to 50% off on a wide range of products, including fashion, electronics, and home essentials. Whether you're shopping for the latest trends or upgrading your gadgets, we have deals that you can't resist. Plus, sign up for our newsletter and get an additional 10% off your first purchase. Don't miss out—these offers are only available while stocks last
</div>
<div className="w-5/12 h-[70vh] mt-10 -skew-x-6 transform">
  <img src={eight} className="w-3/4 rounded-2xl h-4/4" />
</div>
</div>

<div className="w-[150vh] lg:w-[190vh] sm:w-[160vh] md:w-[170vh]  pl-20 ml-16 mr-6 bg-grey-thin overflow-hidden rounded-b-2xl flex space-x-40 h-[90vh]">
<div className="w-5/12 h-[70vh] mt-10 -skew-x-6 transform">
  <img src={nine} className="w-3/4 rounded-2xl h-4/4" />
</div>
<div className="text-md w-5/12 mt-24 pl-2 text-black-dark">
<p className="text-2xl font-bold pb-10">50% <span className="text-blue-500">Discount</span></p>
<p className="sm:text-md  md:text-md text-md lg:text-md pr-4">
  Unlock incredible savings with our exclusive discounts! For a limited time, enjoy up to 50% off on a wide range of products, including fashion, electronics, and home essentials. Whether you're shopping for the latest trends or upgrading your gadgets, we have deals that you can't resist. Plus, sign up for our newsletter and get an additional 10% off your first purchase. Don't miss out—these offers are only available while stocks last
</p>
</div>
</div>
    </div>
  )
}
