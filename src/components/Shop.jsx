import React, { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";

function Shop() {
  const { selectedItems, setSelectedItems } = useContext(DataContext);

  // Function to remove an item from the cart
  const removeItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-screen flex  overflow-x-scroll items-center justify-center h-screen p-6">
      <div className="w-full bg-white p-6 shadow-md rounded-md">
        {/* Header Row */}
        <div className="flex justify-between font-semibold text-gray-700 border-b pb-3">
          <div className="w-5/12   md:w-4/12">Product</div>
          <div className="w-3/12 md:w-2/12 text-center">Quantity</div>
          <div className="w-3/12  md:w-2/12 text-center">Total</div>
          <div className="w-3/12 md:w-2/12  text-center">Actions</div>
        </div>

        {/* Cart Items */}
        <div className="mt-6">
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
                <div className="w-2/12 text-center font-semibold text-gray-700">
                  ${item.price}
                </div>

                {/* Remove Button */}
                <div className="w-2/12 text-center">
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
    </div>
  );
}

export default Shop;
