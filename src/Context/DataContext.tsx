import React, { createContext, useEffect, useState } from "react";
const DataContext = createContext();
import { Recipe } from "../Types/dataTypes";

const DataContextProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [checkoutData, setCheckoutData] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    data: null,
  });

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

  const openModal = (recipe) => {
    if (recipe.id) {
      setModal({ open: true, data: recipe });
    }
  };

  const closeModal = () => {
    if (modal.open) {
      setModal((prev) => ({ ...prev, open: false }));
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
        checkoutData,
        modal,
        closeModal,
        openModal,
        setModal,
        setRecipesData,
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
