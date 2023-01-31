import React from "react";
import { Route, Routes } from "react-router-dom";
import { GetOrder } from "../Components/GetOrder";
import { NewOrder } from "../Components/NewOrder";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/getorder" element={<GetOrder />} />
      <Route path="/addorder" element={<NewOrder />} />
    </Routes>
  );
};
