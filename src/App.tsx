import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Recipes from "./Pages/Recipes";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
