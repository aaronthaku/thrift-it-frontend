import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import DashboardAdmin from "../dashboard-admin/DashboardAdmin";
import DashboardHome from "../dashboard-admin/DashboardHome";
import Loginsuccess from "../../pages/Loginsucess";
import ForgetPasswordEmail from "../../pages/ForgetPasswordEmail";
import PrivateRoute from "../../ProtectedRoute";
import ProfilePage from "../profile/profilePage";
import AboutUs from "../aboutus/AboutUs";
import SingleProduct from "../singleproduct/SingleProduct";
import MyProducts from "../myproducts/MyProducts";
import Wishlist from "../../pages/Wishlist";
import Products from "../../pages/Products";
const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/loginsuccess" element={<Loginsuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPasswordEmail />} />
        <Route path="/singleproduct/:product_id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        {/* <Route
          path="setting"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/myproducts"
          element={
            // <PrivateRoute>
            <MyProducts />
            // </PrivateRoute>s
          }
        ></Route>
        <Route
          path="/profilepage"
          element={
            // <PrivateRoute>
            <ProfilePage />
            // </PrivateRoute>s
          }
        ></Route>

        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route path="/dashboard_admin" element={<DashboardAdmin />}>
          <Route path="" element={<DashboardHome />} />
        </Route>
      </Routes>

      {/* <Route path="/*" element={<NotFound />} /> */}
    </>
  );
};

export default Body;
