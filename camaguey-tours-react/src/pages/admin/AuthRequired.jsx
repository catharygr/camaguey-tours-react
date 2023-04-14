/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthRequired() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    function authUser(user) {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
        navigate("/login");
      }
    }
    return authUser();
  }, []);

  if (!isLogged) {
    return <h1>Login...</h1>;
  }
  return <Outlet />;
}
