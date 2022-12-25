import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import DashboardAdmin from "../dashboard-admin/DashboardAdmin";
import DashboardHome from "../dashboard-admin/DashboardHome";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard_admin" element={<DashboardAdmin />}>
          <Route path="" element={<DashboardHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default Body;
