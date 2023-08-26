import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";

function Menus() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    const apiUrl =
      "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data[0].table_menu_list);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto overflow-x-scroll whitespace-nowrap overflow-y-hidden scrollbar-hide relative ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`inline-block px-4 py-2 cursor-pointer  bg-white mx-20 ${
              selectedItem === index
                ? " border-b-4  border-red-700 text-red-700"
                : " border-gray-400"
            }`}
            onClick={() => setSelectedItem(index)}
          >
            {item.menu_category}
          </div>
        ))}
        <div
          className="border-b-2 border-black"
          style={{ width: "var(--border-width)" }}
        ></div>
      </div>
    </>
  );
}

export default Menus;
