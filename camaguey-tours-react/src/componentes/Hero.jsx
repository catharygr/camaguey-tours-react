import React from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "./NavBtn";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-fondo box-shadow-pink"></div>
        <div className="hero-text">
          <h2 className="ff-title linea-text color-white">
            Las mejores guías gps de aventura alrededor de la ciudad de:
          </h2>
          <h2 className="ff-title color-blue linea-text hero-text-title rotate-sarajevo">
            Camagüey
          </h2>
        </div>
        <div className="hero-select hero-select-home">
          <h3 className="color-white">Elige tu pasión</h3>
          <div className="hero-btn-container">
            <NavBtn pathTo="conocer" title="Conocer" color="green" />
            <NavBtn pathTo="disfrutar" title="Disfrutar" color="green" />
            <NavBtn pathTo="caminar" title="Caminar" color="green" />
          </div>
          <NavLink to="/" className="underline">
            Limpiar filtro
          </NavLink>
        </div>
      </div>
    </div>
  );
}
