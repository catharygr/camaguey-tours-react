import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Hero from "../componentes/Hero";

export default function HomeLayout() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-pink">
        <Header color="color-white" />
        <Hero />
        <Outlet />
      </div>
    </div>
  );
}
