import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
