import React from 'react'

function Footer() {
  return (
    <div>
     <footer class="bg-gray-800 text-white py-10">
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
    {/* <!-- About Section --> */}
    <div>
      <h3 class="text-xl font-semibold mb-4">About Us</h3>
      <p class="text-sm text-gray-400">We are a leading ecommerce platform providing top-notch products and customer service.</p>
    </div>

    {/* <!-- Quick Links Section --> */}
    <div>
      <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
      <ul>
        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Men's</a></li>
        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Women's</a></li>
        <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Gadgets</a></li>
      </ul>
    </div>

    {/* <!-- Contact Section --> */}
    <div>
      <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
      <ul>
        <li class="mb-2"><span class="text-gray-400">Email: support@example.com</span></li>
        <li class="mb-2"><span class="text-gray-400">Phone: +123 456 7890</span></li>
        <li class="mb-2"><span class="text-gray-400">Address: 1234 Street Name, City, Country</span></li>
      </ul>
    </div>

    {/* <!-- Newsletter Section --> */}
    <div>
      <h3 class="text-xl font-semibold mb-4">Newsletter</h3>
      <p class="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
      <form class="flex">
        <input type="email" class="rounded-l-lg p-2 outline-none w-full text-gray-700" placeholder="Your email" />
        <button type="submit" class="bg-red-500 text-white rounded-r-lg px-4 hover:bg-red-600">Subscribe</button>
      </form>
    </div>
  </div>

  {/* <!-- Footer Bottom Section --> */}
  <div class="bg-gray-900 text-gray-400 text-center py-4 mt-8">
    <p>&copy; 2025 Ecommerce Platform. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
