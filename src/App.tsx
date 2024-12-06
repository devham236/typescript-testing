import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Recipes from "./Pages/Recipes";
import Checkout from "./Pages/Checkout";
import useDataContext from "./Hooks/useDataContext";
import Modal from "./Components/Modal";

const App = () => {
  const { modal } = useDataContext();
  return (
    <div style={{ position: "relative" }}>
      <div className="links-container">
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <h2>Recipes</h2>
        </Link>
        <Link to={"/checkout"}>
          <h2>Checkout</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {modal.open && <Modal recipe={modal.data} />}
    </div>
  );
};

export default App;
