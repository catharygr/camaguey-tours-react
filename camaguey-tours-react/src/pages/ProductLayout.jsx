import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";

export default function ProductLayout() {
  return (
    <div className="background-color-products">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />
        <Outlet />
        <Banner
          bannerType={{
            color: "blue",
            title: "50% de descuento",
            description:
              "Guía habilitada para GPS. Todos los alojamientos, visita al casco histórico. Dos oportunidades, Ciudad y playa...",
            imgUrl: "/assets/images/.jpg",
            productId: "1",
          }}
        />
        <Footer />
      </div>
    </div>
  );
}
