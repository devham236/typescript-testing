import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./Context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </StrictMode>
  </BrowserRouter>
);
