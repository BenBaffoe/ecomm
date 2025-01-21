import React, { useState } from 'react'
import one from '../image_folder/valued_for_2.jpg'
import { Link } from 'react-router-dom'
import two from '../image_folder/finally-ezgif.com-gif-maker.gif'
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import { useNavigate } from "react-router-dom";

function Signup() {
 
  const [show , setShow] = useState(false);
  const navigate = useNavigate();

  function handleLoading (e){
    e.preventDefault();
    

      const formData = new FormData(e.target);
      const payLoad = Object.fromEntries(formData);
    
      const userName = payLoad.username || ""; // Default to empty string if undefined
      const email = payLoad.email || "";
      const password = payLoad.password || "";
      const confirmpassword = payLoad.confirmpassword || "";
    
      // Validate First Name
      if (!userName.trim()) {
        toast.error("A username is required!");
        return;
      }
    
      // Validate Last Name
    
      // Validate Email
      if (!email.trim()) {
        toast.error("Email is required!");
        return;
      } else if (!validator.isEmail(email)) {
        toast.error("Enter a valid email!");
        return;
      }
    
      // Validate Password
      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long!");
        return;
      }
      if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter!");
        return;
      }
      if (!/[a-z]/.test(password)) {
        toast.error("Password must contain at least one lowercase letter!");
        return;
      }
      if (!/[0-9]/.test(password)) {
        toast.error("Password must contain at least one number!");
        return;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        toast.error("Password must contain at least one special character!");
        return;
      }
    
      // Validate Confirm Password
      if (password !== confirmpassword) {
        toast.error("Passwords do not match!");
        return;
      }
    
      setShow(true);
      setTimeout(() => {
        setShow(false);
        navigate("/hero"); 
      }, 4000);
  }

  return (
    <div>
      <div className='sm:block md:flex lg:flex block bg-white w-full'>
      <div className='w-0   lg:w-6/12'>
          <img src={one} className='w-0 sm:w-0 sm:h-0 lg:w-3/4 lg:h-screen md:w-3/4 md:h-screen '/>
        </div>
        <div className='w-full md:w-full lg:w-6/12  mt-2 sm:mt-2 md:mt-2 lg:mt-2  ml-0  md:ml-28 lg:ml-6'>
          <form  onSubmit={handleLoading} className='w-full sm:w-full md:w-full lg:w-full text-black-dark  flex justify-center items-center sm:block md:block lg:block text-sm scrollbar-hide overflow-y-auto '>
          <div className='w-full sm:w-full md:w-full lg:w-full p-4 sm:p-0 md:p-0 lg:p-0'>
             <p className='text-xs font-normal text-left mb-4 text-black-dark'>Ecommerce</p>
          <p className='text-2xl font-semibold text-left text-black-dark'>We make shopping easy</p>
          <p className='text-blue-400 text-left mb-6'>Register here</p>
         


        {/* username */}
          <div>
          <label className='text-sm text-left text-black-dark font-light'>
            Username
          </label>
          </div>
          <input name='username' placeholder='username' className='w-11/12 sm:w-5/5 lg:w-4/5 md:w-4/5 sm:h-16 md:h-12 lg:h-12  bg-gray-100 outline-none pl-3 h-12 rounded-lg mt-2 mb-4' />


          {/* Email */}
            <div>
          <label className='text-sm text-left  text-black-dark font-light'>
            Email address
          </label>
            </div>
            <input name='email' placeholder='email here' className='w-11/12 sm:w-5/5 lg:w-4/5 md:w-4/5  sm:h-16 md:h-12 lg:h-12  bg-gray-100 outline-none h-12 pl-3 rounded-lg mt-2 mb-4' />

           {/* password */}
            <div>
               <label className='text-sm text-left text-black-dark font-light'>
              Password
            </label>
            </div>
            <input name='password' placeholder='password here'  className='w-11/12   pl-3 sm:w-5/5 lg:w-4/5 md:w-4/5  sm:h-16 md:h-12 lg:h-12  bg-gray-100 outline-none h-12 rounded-lg mt-2 mb-4'/>

           {/* confirmpassword */}
            <div>
               <label className='text-sm text-left text-black-dark font-light'>
             Confirm Password
            </label>
            </div>
            <input name='confirmpassword' placeholder='confirm password' className='w-11/12 sm:w-5/5 lg:w-4/5  sm:h-16 md:h-12 lg:h-12 md:w-4/5 h-12  bg-gray-100 outline-none pl-3 rounded-lg mt-2 mb-4'/>



            <button  className='w-11/12  sm:h-16 md:h-12 lg:h-12 sm:w-5/5 lg:w-4/5 md:w-4/5 rounded-xl h-14 mt-6 hover:border hover:border-black-dark hover:bg-white hover:text-black-dark bg-blue-400 duration-500'>
             <div className='text-lg font-bold  duration-500 flex justify-center items-center text-center'>
               {show ? <img src={two} className='w-16 h-16' /> : <p>Register</p> }  
             </div>
            </button>

            <div className='flex justify-between w-10/12 sm:w-5/5 lg:w-4/5 md:w-4/5 ml-2 mt-4 text-md'>
              <div>Already have an account?</div>
              <Link to={'/signin'}>
              <div className='text-blue-400'>
                Log In
              </div>
              </Link>
            </div>
          </div>
         
          </form>
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default Signup