import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      Services
      <Link to={""}>Web</Link>
      <Link to={"Appdev"}>App dev</Link>
      <Outlet />
    </div>
  );
}
