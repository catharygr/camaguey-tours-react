/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const [isLogged, setIsLogged] = useState(true);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
