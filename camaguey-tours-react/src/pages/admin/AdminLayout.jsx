import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  function handleLogOut() {
    navigate("/").catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="background-color-products">
      <div className="home-layout color-white">
        <header className="admin-header">
          <Link className="underline-admin fs-500" to="/">
            {"<< Inicio"}
          </Link>
          <button className="btn btn-green" onClick={handleLogOut}>
            Salir
          </button>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
