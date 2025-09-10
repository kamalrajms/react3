import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function Header() {
  return (
    <nav className="">
      <Link to={"/"}>home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/services"}>Services</Link>
      <Link to={"/Contact"}>Contact</Link>
    </nav>
  );
}
