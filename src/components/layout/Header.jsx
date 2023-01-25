import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import logo from "../../assets/thriftit-logo.png";
import Box from "@mui/material/Box";
import "./header.scss";
import AccountMenu from "./profile_dropdown";
import AddProduct from "../add_product/AddProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openMenu, setOpenMenu] = useState(false);
  const menuClickHandler = (e) => {
    e.preventDefault();
    setOpenMenu((p) => !p);
  };
  const logout = () => {
    if (localStorage.getItem("googlelogin")) {
      localStorage.clear();
      window.open("http://localhost:90/thirdpartyRouter/logout", "_self");
    } else {
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo--img" />
        </div>
      </Link>
      <div
        className={`menu ${openMenu ? "menu--open" : ""}`}
        onClick={menuClickHandler}
      >
        <div className="menu__line "></div>
        <div className="menu__line "></div>
        <div className="menu__line  "></div>
      </div>
      <nav className={`nav ${openMenu ? "nav--slide" : ""}`}>
        <Link to="/" className="nav__links ">
          Home
        </Link>
        <Link className="nav__links" to="/products">
          Products
        </Link>
        <Link className="nav__links" to="/wishlist">
          Cart
        </Link>
        <Link className="nav__links" to="/aboutus">
          About
        </Link>
        {localStorage.getItem("token") ? (
          <>
            <button className="nav__btn nav__links" onClick={handleOpen}>
              Post Product Free
            </button>
            <AccountMenu></AccountMenu>
          </>
        ) : (
          // <Link className="nav__btn nav__links" to="login" onClick={logout}>
          //   Log out
          // </Link>
          <Link className="nav__btn nav__links" to="login">
            Login
          </Link>
        )}
      </nav>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct></AddProduct>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
