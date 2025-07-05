import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [input, setinput] = useState("");
    const [cat, setCat] = useState(food_items);
   const [showCart, setshowCart] = useState(false);
  const data = {
    input,
    setinput,
    cat,
    setCat,
    showCart,
    setshowCart
  };

  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  );
};

export default UserContext;
