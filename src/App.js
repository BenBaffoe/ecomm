import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from './components/Signup';
import Signin from "./components/Signin";
import Hero from "./components/Hero";

function App() {
  const location = useLocation();

  // Check if the current path is sign-in or sign-up
  const showNavbar = location.pathname !== '/signin' && location.pathname !== '/signup';
  const showFooter = location.pathname !== '/signin' && location.pathname !== '/signup';

  return (
    <div className="w-[160vh] bg-yellow-400 sm:bg-green-500 md:bg-orange-500 lg:bg-blue-500 xl:bg-black-darker sm:w-[186vh] md:w-[190vh] lg:w-[208vh] xl:w-[214vh]">
      {showNavbar && (
        <div>
          <Navbar />
        </div>
       
       
      )}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/hero' element={<Hero/>}/>
      </Routes>
     
{/* 
      {showFooter && (
       <Footer /> 
      )} */}
      
    </div>
  );
}

export default App;
