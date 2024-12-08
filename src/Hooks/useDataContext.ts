import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { DataContextType } from "../Types/dataTypes";

const useDataContext = (): DataContextType => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }

  return dataContext;
};

export default useDataContext;
