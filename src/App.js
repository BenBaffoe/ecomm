import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from './components/Signup';
import Signin from "./components/Signin";
import Hero from "./components/Hero";
import Men from "./components/Men";
import Women from "./components/Women";
import Gagdets from "./components/Gagdets";
import data  from "./components/data/NewArrivals";
import { DataContext } from "./components/Contexts/DataContext";
import Shop from "./components/Shop";
import View from "./components/View";

function App() {
  const location = useLocation();

  // Check if the current path is sign-in or sign-up
  const showNavbar = location.pathname !== '/signin' && location.pathname !== '/signup';
  const showFooter = location.pathname !== '/signin' && location.pathname !== '/signup';


  //Hero page 
  const [handleIndex, setHandleIndex] = useState(0);
  const [shop , setShop] = useState({});
  const [handlesView , setHandlesView] = useState([]);
  const [selectedItems , setSelectedItems] = useState([]);
  // const [handleCart , setHandle]


  function handleShop(value , item){
   setShop(((prev) => ({ ...prev, [value]: true })));

  //  const exists = selectedItems.some((existingItem) => existingItem.id === item.id);
    
    // if (!exists) {
      // Add item if it doesn't exist in the cart
      setSelectedItems((prev) => [...prev, item]);
    // }
  }

  function handleView(item){
   setHandlesView(item);
  }

  return (
    <div className="w-screen  sm:w-screen md:w-screen lg:w-screen xl:w-screen">
      {showNavbar && (
        <div className="navbar  w-full h-12 bg-white fixed top-0 z-20">
          <Navbar />
        </div>
       
       
      )}

<div className="w-full overflow-hidden">
<DataContext.Provider value={{handleShop , selectedItems, handlesView, handleView  , shop , setSelectedItems , handleIndex, setHandleIndex}}>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/hero' element={<Hero/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/gadgets" element={<Gagdets/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/shop" element={<Shop/>}/>
  </Routes>
</DataContext.Provider>     
</div>
      

      {showFooter && (
       <Footer /> 
      )}
      
    </div>
  );
}

export default App;
