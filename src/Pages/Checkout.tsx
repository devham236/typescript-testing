import React from "react";
import useDataContext from "../Hooks/useDataContext";

const Checkout = () => {
  const { recipesData } = useDataContext();
  console.log(recipesData);

  return <div>Checkout</div>;
};

export default Checkout;
