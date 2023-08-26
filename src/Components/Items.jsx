import React from "react";
import Vegetarian from "../assets/Vegetarian.png";
import NonVegetarian from "../assets/Non-Vegetarian.png";
import { useCart } from "../Helpers.jsx/CartProvider";
import Food from "../assets/Food.jpg"

function Items({ items }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  return (
    <>
    <div className="container mx-auto py-8">
      {items.map((item) => (
        <div key={item.dish_id} className="bg-white shadow-md p-4 mb-6 flex">
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {item.dish_Type === 1 && (
                    <img
                      src={NonVegetarian}
                      alt="NonVegetarian"
                      className="w-6 h-6 inline-block mr-2"
                    />
                  )}
                  {item.dish_Type === 2 && (
                    <img
                      src={Vegetarian}
                      alt="Vegetarian"
                      className="w-6 h-6 inline-block mr-2"
                    />
                  )}
                  {item.dish_name}
                </h2>
                <p className="text-gray-600">
                  {item.dish_currency} {item.dish_price}
                </p>
              </div>
              <div className="text-right">
                <span className="text-black font-semibold">
                  {item.dish_calories} Calories
                </span>
              </div>
            </div>
            <p className="text-gray-600">{item.dish_description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <button
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded-l-full"
                  onClick={() => removeFromCart(item.dish_id)}
                >
                  -
                </button>
                <div className="bg-green-600 text-white py-2 px-4">
                  {cartItems[item.dish_id] || 0}
                </div>
                <button
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded-r-full"
                  onClick={() => addToCart(item.dish_id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-2">
              <span
                className={`text-sm ${
                  item.addonCat ? "text-red-600" : "text-red-600"
                }`}
              >
                {item.addonCat.length >= 1
                  ? "Customization Available"
                  : "Customization Not Available"}
              </span>
            </div>
          </div>
          <div className="w-1/4 pl-4">
            <img
              // src={item.dish_image}
              src={Food}
              alt={item.dish_name}
              className=" ml-10 w-52 h-32 object-cover "
            />
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Items;
