import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../../pages/Category";
import Home from "../../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Category />} />
    </Routes>
  );
}

export default AppRoutes;
