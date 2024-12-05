import React, { createContext, useState } from "react";
const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState([]);

  return (
    <DataContext.Provider value={{ recipesData, setRecipesData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
