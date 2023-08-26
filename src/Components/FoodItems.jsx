import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Items";

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);
  const [addOn,setAddOn]=useState([])
  useEffect(() => {
    const apiUrl =
      "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099";
    axios
      .get(apiUrl)
      .then((response) => {
        setFoodItems(response.data[0]?.table_menu_list[0]?.category_dishes);
        setAddOn(response.data[0]?.table_menu_list[0]?.category_dishes.add)
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  console.log("Food items:", foodItems);

  return (
    <>
        <Items items={foodItems} />
    </>
  );
}

export default FoodItems;
