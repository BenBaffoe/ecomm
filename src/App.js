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
    <div className="w-screen  sm:w-screen md:w-screen lg:w-screen xl:w-screen">
      {showNavbar && (
        <div className="navbar  w-full h-12 bg-white fixed top-0 z-20">
          <Navbar />
        </div>
       
       
      )}

<div className="w-full overflow-hidden">
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/hero' element={<Hero/>}/>
      </Routes>
     
</div>
      

      {showFooter && (
       <Footer /> 
      )}
      
    </div>
  );
}

export default App;
