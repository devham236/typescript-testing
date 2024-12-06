import React, { createContext, useEffect, useState } from "react";
const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState([]);
  const [checkoutData, setCheckoutData] = useState([]);

  const addToCheckout = (recipe) => {
    if (recipe.id) {
      setCheckoutData((prev) => [...prev, recipe]);
    }
  };

  const removeFromCheckout = (id) => {
    if (id) {
      const filteredList = checkoutData.filter((item) => item.id !== id);
      setCheckoutData(filteredList);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setRecipesData(data.recipes);
    };

    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        recipesData,
        setRecipesData,
        checkoutData,
        setCheckoutData,
        addToCheckout,
        removeFromCheckout,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
