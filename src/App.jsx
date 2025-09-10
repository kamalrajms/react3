import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Web from "./component/service/Web";
import AppDEv from "./component/service/AppDEv";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Service />}>
            <Route path="" element={<Web />} />
            <Route path="Appdev" element={<AppDEv />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
