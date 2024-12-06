import React from "react";
import useDataContext from "../Hooks/useDataContext";

const Modal = ({ recipe }) => {
  const { closeModal } = useDataContext();
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2rem",
        backgroundColor: "lightblue",
      }}
    >
      <p>{recipe.name}</p>
      <ul>
        {recipe.ingredients.map((ingre, index) => (
          <li key={index}>{ingre}</li>
        ))}
      </ul>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;
