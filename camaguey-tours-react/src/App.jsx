import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/style.css";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
