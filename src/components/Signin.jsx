import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import one from '../image_folder/valued_signup.jpg'
import two from '../image_folder/finally-ezgif.com-gif-maker.gif'

function Signin() {

  const [handleshow , setHandleShow] = useState(false);

  function handleLoading(e){
    e.preventDefault();
    setHandleShow(!handleshow)
  }

  return (
    <div className='md:flex block bg-white overflow-hidden w-12/12 :w-10/12'>
      <div className='w-0 lg:w-6/12'>
          <img src={one} className='w-0 h-0 lg:w-full lg:h-screen '/>
        </div>

      <div className='w-full h-screen lg:w-6/12 flex items-start justify-start md:block    pl-4 md:pl-0 md:mt-4 mt-0 lg:ml-10'>
      <div className='w-full md:flex md:w-full md:justify-center md:ml-28 md:mt-40 mt-0 lg:mt-0  ml-0 lg:ml-0 md:items-center'>
      <form className='w-full text-black-dark text-sm scrollbar-hide overflow-y-auto '>
          <p className='text-xs font-normal mb-8 text-left pt-6 md:pt-2 text-black-dark'>Ecommerce</p>
          <p className='text-2xl font-semibold text-left  text-black-dark'>Welcome Back</p>
          <p className='text-blue-400 text-left mb-6'>Log in</p>
         


        {/* username */}
          <div>
          <label className='text-sm text-left text-black-dark font-light'>
            Username
          </label>
          </div>
          <div className='text-left'>
             <input name='username' placeholder='username' className='w-11/12  md:h-12  md:w-8/12  lg:w-10/12  lg:h-12   bg-gray-100  outline-none pl-3 h-12 rounded-lg mt-2 mb-4' />
          </div>
         

          {/* Email */}
            <div>
          <label  className='text-sm text-left text-black-dark font-light'>
            Email address
          </label>
            </div>
            <div className='text-left'>
                <input name='email' placeholder='email here' className='w-11/12  md:h-12  md:w-8/12 lg:w-10/12  bg-gray-100 outline-none h-12 pl-3 rounded-lg mt-2 mb-4' />
            </div>
          

           {/* password */}
            <div>
               <label className='text-sm text-black-dark text-left font-light'>
              Password
            </label>
            </div>
            <div className='text-left'>
            <input name='password' placeholder='password here'  className='w-11/12  md:w-8/12 lg:w-10/12  sm:h-12 md:h-12 lg:h-12  text-left bg-gray-100  pl-3 outline-none h-12 rounded-lg mt-2 mb-4'/>
            </div>
           

           
           <div className='text-left'>
              <button onClick={handleLoading} className='w-11/12  md:w-8/12 lg:w-10/12 hover:border hover:border-black-dark rounded-xl h-14 mt-6 duration-700 transform hover:-translate-y-1  hover:bg-white hover:text-black-dark bg-blue-400'>
             <div className='text-lg font-bold  hover:text-black-neutral  flex justify-center items-center text-center'>
              {handleshow ?  <img src={two} className='w-12 h-10'/> : <p>Log In</p>}
             </div>
            </button>
           </div>
         
           <div className='text-center  lg:text-left'>
               <div className='flex justify-between w-11/12  md:w-8/12  lg:w-10/12 ml-0 md:ml-2 lg:ml-0 mt-4 text-md'>
              <div>Don't have an account?</div>
              <Link to={'/signup'}>
             <div className='text-blue-400'>Register</div>
              </Link>
            </div>
           </div>
         
          </form>
      </div>
        
      </div>
     
    
      </div>

    
  )
}

export default Signin