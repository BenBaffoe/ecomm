import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-black-dark w-[190vh] overflow-hidden mt-32 lg:w-[208vh] sm:w-[190vh] md:w-[200vh] text-white py-16">

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-12">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-black-newdark">Ecommerce</a>
          </div>

          <div className="flex space-x-8">
            <a href="#" className="hover:text-grey-thin">About Us</a>
            <a href="#" className="hover:text-grey-thin">Services</a>
            <a href="#" className="hover:text-grey-thin">Contact</a>
            <a href="#" className="hover:text-grey-thin">Privacy Policy</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              {/* Facebook SVG */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              {/* Twitter SVG */}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400">
              {/* Instagram SVG */}
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2025 BrandName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
