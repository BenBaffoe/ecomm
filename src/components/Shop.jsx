import React, { useContext, useState } from "react";
import { DataContext } from "./Contexts/DataContext";
import { ChevronDown, ChevronUp } from "react-feather";

function Shop() {
  const { selectedItems, setSelectedItems , shop , setShop } = useContext(DataContext);

  // Function to remove an item from the cart
 

   const [handleQuantity , setHandleQuantity] = useState({});
   const [price , setPrice] = useState({});
   const [total , setTotal] = useState(0);

   function handleValueChange(value, prices) {
    setHandleQuantity((prev) => {
      const currentCount = prev[value] || 0;
      const newCount = currentCount + 1;

      setPrice((prevPrice) => {
        const updatedPrice = { ...prevPrice, [value]: newCount * prices };
        updateTotal(updatedPrice); // Update total after setting price
        return updatedPrice;
      });

      return { ...prev, [value]: newCount };
    });
  }

  const removeItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
    // setShop(((prev) => ({ [index]: false })));
    setTotal();
  };

  // Function to decrease quantity and update price
  function handleValueReduction(value, prices) {
    setHandleQuantity((prev) => {
      const currentCount = prev[value] || 0;
      const newCount = Math.max(currentCount - 1, 0); // Prevent negative quantity

      setPrice((prevPrice) => {
        if(currentCount <= 0 ){
          const updatedPrice = { ...prevPrice, [value]:  prices * currentCount }
          updateTotal(updatedPrice);
          return updatedPrice;
        }else{
          const updatedPrice = { ...prevPrice, [value]:  prices - (prices - prices * newCount ) };
          console.log(updatedPrice , "jjjjjjjjjj") 

          updateTotal(updatedPrice); // Update total after setting price
          return updatedPrice;
        }
      });
      return { ...prev, [value]: newCount };
    });
  }

  // Function to calculate subtotal
  function updateTotal(updatedPrice) {
    const totalAmount = Object.values(updatedPrice).reduce((acc, curr) => acc + curr, 0);
    setTotal(totalAmount);
  }




 




  return (
    <div className="w-screen block mt-10 md:mt-0 md:flex  overflow-x-scroll  h-screen p-6">
      <div className="block w-full h-fit mt-4 md:w-8/12 md:space-x-0 p-6 shadow-md md:shadow-none rounded-md">
        {/* Header Row */}
        <div className="flex w-full justify-between font-semibold text-gray-700 border-b pb-3">
          <div className="w-5/12   md:w-4/12">Product</div>
          <div className="w-3/12 md:w-4/12 text-center">Quantity</div>
          <div className="hidden md:flex   md:w-2/12 text-center">Total</div>
          <div className="hidden md:flex  md:w-2/12 pl-6  text-center">Actions</div>
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
                <div className="w-3/12 flex justify-evenly text-center">
                <button onClick={()=>handleValueChange(item.id , item.price)} className="rounded-full shadow-sm bg-black-newdark cursor-pointer h-fit w-fit"><ChevronUp color="white" size={18} /></button>
                <div>{handleQuantity[item.id] || 0}</div>
                <button onClick={()=>handleValueReduction(item.id , item.price)} className="rounded-full shadow-sm bg-black-newdark  h-fit w-fit"><ChevronDown color="white" size={18}/></button>
                </div>

                {/* Total Price */}
                <div className=" hidden md:w-2/12 md:block  text-center font-semibold text-gray-700">
                 Ghs {price[item.id] || 0.00}
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
      <div>Ghs {total}</div>
     </div>
     <div className="flex justify-between text-sm pl-4 pt-4">
      <div>Delivery Fee</div>
      <div>Ghs 0</div>
     </div>
     <div className="flex justify-between text-sm pl-4 pt-4">
      <div>Total</div>
      <div>Ghs {total}</div>
     </div>

     <div className="pt-10 md:mt-72">
      <div className="flex items-center justify-center w-full">
        <button className="text-sm font-semibold text-white bg-black-neutral hover:bg-black-dark w-full h-12 shadow-md rounded-2xl ">Pay Amount</button>
      </div>
     </div>
      </div>
    </div>
  );
}

export default Shop;
