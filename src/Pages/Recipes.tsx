import React from "react";
import useDataContext from "../Hooks/useDataContext";

const Recipes = () => {
  const { recipesData } = useDataContext();
  console.log(recipesData);

  return (
    <div>
      {recipesData?.map((recipe) => (
        <div key={recipe.id}>Recipe</div>
      ))}
    </div>
  );
};

export default Recipes;
