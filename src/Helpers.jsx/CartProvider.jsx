import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevCart) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] - 1,
      }));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
