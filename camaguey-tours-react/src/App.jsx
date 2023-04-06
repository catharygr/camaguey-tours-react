import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/style.css";
import HomeLayout from "./pages/HomeLayout";
import HomeCards from "./pages/HomeCards";
import Walk from "./pages/Walk";
import Know from "./pages/Know";
import Enjoy from "./pages/Enjoy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeCards />} />
          <Route path="caminar" element={<Walk />} />
          <Route path="visitar" element={<Know />} />
          <Route path="disfrutar" element={<Enjoy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
