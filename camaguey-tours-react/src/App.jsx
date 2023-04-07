import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/style.css";
import HomeLayout from "./pages/HomeLayout";
import HomeCards from "./pages/HomeCards";
import Walk from "./pages/Walk";
import Know from "./pages/Know";
import Enjoy from "./pages/Enjoy";
import ProductLayout from "./pages/ProductLayout";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeCards />} />
          <Route path="conocer" element={<Know />} />
          <Route path="caminar" element={<Walk />} />
          <Route path="disfrutar" element={<Enjoy />} />
        </Route>
        <Route path="products" element={<ProductLayout />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="contacto" element={<Contact />} />
        <Route path="admin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
