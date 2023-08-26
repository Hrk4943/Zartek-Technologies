import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import FoodItems from "./Components/FoodItems";
import { CartProvider } from "./Helpers.jsx/CartProvider";


function App() {
  return (
    <>
    <CartProvider>
      <Header />
      <Menus/>
     <FoodItems/>
    </CartProvider>
    </>
  );
}

export default App;
