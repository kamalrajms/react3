import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Header from "./component/Header";
import BlogDetail from "./component/BlogDetail";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BLogDetails/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
