import React from "react";

const Recipe = ({ recipe }) => {
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
        <button style={{ marginRight: "1rem" }}>Add to Checkout</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default Recipe;
