import React from "react";
import useDataContext from "../Hooks/useDataContext";
import Recipe from "../Components/Recipe";

const Recipes = () => {
  const { recipesData } = useDataContext();

  console.log(recipesData);

  return (
    <div>
      {recipesData.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
