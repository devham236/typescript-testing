import React from "react";
import useDataContext from "../Hooks/useDataContext";
import { RecipeProps } from "../Types/dataTypes";

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  const { checkoutData, addToCheckout, removeFromCheckout, openModal } =
    useDataContext();

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "2rem",
        border: "1px solid grey",
      }}
    >
      <div style={{ width: "100px", height: "100px" }}>
        <img
          src={recipe.image}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{recipe.name}</p>
        <p>{recipe.rating}</p>
        <p>{recipe.difficulty}</p>
      </div>
      <div style={{ marginLeft: "1rem" }}>
        {checkoutData.includes(recipe) ? (
          <button
            onClick={() => removeFromCheckout(recipe.id)}
            style={{ marginRight: "1rem" }}
          >
            Remove from Checkout
          </button>
        ) : (
          <button
            onClick={() => addToCheckout(recipe)}
            style={{ marginRight: "1rem" }}
          >
            Add to Checkout
          </button>
        )}
        <button onClick={() => openModal(recipe)}>Details</button>
      </div>
    </div>
  );
};

export default Recipe;
