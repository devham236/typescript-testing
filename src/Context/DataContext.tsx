import React, { createContext, useEffect, useState } from "react";
import {
  RecipeType,
  DataContextType,
  DataContextProviderProps,
} from "../Types/dataTypes";
const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const [checkoutData, setCheckoutData] = useState<RecipeType[]>([]);
  const [modal, setModal] = useState<{
    open: boolean;
    data: RecipeType | null;
  }>({
    open: false,
    data: null,
  });

  const addToCheckout = (recipe: RecipeType) => {
    if (recipe.id) {
      setCheckoutData((prev) => [...prev, recipe]);
    }
  };

  const removeFromCheckout = (id: number) => {
    if (id) {
      const filteredList = checkoutData.filter((item) => item.id !== id);
      setCheckoutData(filteredList);
    }
  };

  const openModal = (recipe: RecipeType) => {
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
