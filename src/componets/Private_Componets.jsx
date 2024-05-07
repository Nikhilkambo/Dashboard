import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Private_Componets(props) {
  const auth = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      {auth && <Outlet />}
      {!auth && <Navigate to="/login" />}
    </div>
  );
}
