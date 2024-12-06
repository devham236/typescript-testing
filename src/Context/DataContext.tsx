import React, { createContext, useEffect, useState } from "react";
const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState([]);
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setRecipesData(data.recipes);
    };

    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ recipesData, setRecipesData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
