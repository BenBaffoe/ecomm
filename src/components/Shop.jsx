import React, { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";

function Shop() {
  const { selectedItems, setSelectedItems } = useContext(DataContext);

  // Function to remove an item from the cart
  const removeItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-screen block mt-10 md:mt-0 md:flex  overflow-x-scroll  h-screen p-6">
      <div className="block w-full h-fit mt-4 md:w-8/12 md:space-x-0 p-6 shadow-md rounded-md">
        {/* Header Row */}
        <div className="flex w-full justify-between font-semibold text-gray-700 border-b pb-3">
          <div className="w-5/12   md:w-4/12">Product</div>
          <div className="w-3/12 md:w-3/12 text-center">Quantity</div>
          <div className="hidden md:flex   md:w-2/12 text-center">Total</div>
          <div className="hidden md:flex  md:w-2/12  text-center">Actions</div>
        </div>

        {/* Cart Items */}
        <div className="mt-6 md:mt-0 w-full">
          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b"
              >
                {/* Product Image & Name */}
                <div className="w-4/12 flex items-center">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="ml-4 text-gray-700">{item.descript}</span>
                </div>

                {/* Quantity (For now, it's static) */}
                <div className="w-2/12 text-center">1</div>

                {/* Total Price */}
                <div className=" hidden md:w-2/12 md:block  text-center font-semibold text-gray-700">
                  {item.price}
                </div>

                {/* Remove Button */}
                <div className="hidden md:w-2/12 md:block text-center">
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
          )}
        </div>
      </div>


      <div className="w-full mt-10 p-4  md:w-4/12 h-72  md:h-screen md:mt-20   rounded-md shadow-md">
     <div className="text-md text-gray-500 font-bold p-4">Order Summary</div>
     <div className="flex justify-between text-sm pl-4 pt-2">
      <div>Subtotal</div>
      <div>Ghs 0.00</div>
     </div>
     <div className="flex justify-between text-sm pl-4 pt-4">
      <div>Delivery Fee</div>
      <div>Ghs 0.00</div>
     </div>
     <div className="flex justify-between text-sm pl-4 pt-4">
      <div>Total</div>
      <div>Ghs 0.00</div>
     </div>

     <div className="pt-10 md:mt-72">
      <div className="flex items-center justify-center w-full">
        <button className="text-sm font-semibold text-white bg-black-neutral hover:bg-black-dark w-11/12 h-12 shadow-md rounded-2xl ">Pay Amount</button>
      </div>
     </div>
      </div>
    </div>
  );
}

export default Shop;
