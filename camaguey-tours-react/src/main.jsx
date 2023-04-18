import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShopCartContext } from "./api/ShopCartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopCartContext>
      <App />
    </ShopCartContext>
  </React.StrictMode>
);
