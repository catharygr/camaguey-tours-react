/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgIcon } from "../assets/hamburger.svg";
import { ReactComponent as CartIcon } from "../assets/shopping-cart.svg";

import { ShoppingContext } from "../api/ShopCartContext";

export default function Header({ color }) {
  const [isOpenMenu, setIsOpenMenu] = React.useState(true);

  // Manejar notificación de carrito
  const [cart] = useContext(ShoppingContext);
  const [notification, setNotificacion] = React.useState(cart?.length);

  // Manejar si hay notificación o no
  const cartIsFull = cart?.length !== 0;
  useEffect(() => setNotificacion(cart?.length), [cart]);

  // Manejar abrir y cerrar menú
  function handleClick() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <button className="hamburguer" onClick={handleClick}>
            <HamburgIcon className="hamburg-icon" />
          </button>
          <ul aria-hidden={isOpenMenu} className="nav-list fs-500">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/sobre"
              >
                Proyecto
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="cart-img-container">
          {cartIsFull && (
            <div className="cart-img-num">
              <p>{notification}</p>
            </div>
          )}
          <Link to="/cart">{<CartIcon className="cart-img" />}</Link>
        </div>
      </div>
      <div>
        <Link to="/">
          <p className={`fs-700 logo-text ${color} text-shadow-blue`}>
            Camagüey Tours
          </p>
        </Link>
      </div>
    </div>
  );
}
