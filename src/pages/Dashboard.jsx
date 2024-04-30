import React from "react";
import Navbar_header from "../componets/Navbar";
import {  Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar_header />
      <Outlet />
    </>
  );
}

export default Dashboard;
