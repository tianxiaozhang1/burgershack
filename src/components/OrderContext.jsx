// ONE

// "use client";
// import React, { createContext, useContext, useState } from 'react';

// const OrderContext = createContext();

// // export default OrderContext;

// // Create a provider component
// export const OrderProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light'); // default theme
  
//     // Toggle theme between 'light' and 'dark'
//     const toggleTheme = () => {
//       setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     };
  
//     return (
//       <OrderContext.Provider value={{ theme, toggleTheme }}>
//         {children}
//       </OrderContext.Provider>
//     );
//   };

// export const useTheme = () => useContext(OrderContext);


// TWO
// "use client";

// import { createContext, useState } from "react";

// export const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [userInput, setUserInput] = useState("");

//   return (
//     <UserContext.Provider value={{ userInput, setUserInput }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

"use client";
import React, { useState, useEffect, createContext } from "react";

// import { Config } from "./Config";

const savedFormData = "XXX"
// JSON.parse(localStorage.getItem("savedFormData"));

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [mainState, setMainState] = useState(() => {
    if (savedFormData) {
      return savedFormData;
    }
    // return { ...Config };
  });

  useEffect(() => {
    localStorage.setItem("savedFormData", JSON.stringify(mainState));
  }, [mainState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMainState((mainState) => ({
      ...mainState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainState((mainState) => ({
      ...mainState,
      submitted: true
    }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setMainState(() => ({
      ...mainState
    }));
  };

  return (
    <GlobalContext.Provider
      value={{
        mainState,
        setMainState,
        handleChange,
        handleSubmit,
        handleClear
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
