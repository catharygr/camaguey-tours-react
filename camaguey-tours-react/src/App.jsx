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
import About from "./pages/About";
import AdminLayout from "./pages/admin/AdminLayout";
import AuthRequired from "./pages/admin/AuthRequired";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Income from "./pages/admin/Income";
import CartLayout from "./pages/cart/CartLayout";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeCards />} />
          <Route path="conocer" element={<Know />} />
          <Route path="disfrutar" element={<Enjoy />} />
          <Route path="caminar" element={<Walk />} />
        </Route>

        <Route path="products" element={<ProductLayout />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route path="contacto" element={<Contact />} />

        <Route element={<AuthRequired />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="productos" element={<Products />} />
            <Route path="ingresos" element={<Income />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<Cart />} />
        </Route>

        <Route path="sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
