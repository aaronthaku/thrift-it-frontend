import React from "react";
import "./login.scss";
import { FaUserAlt } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // google login
  const googleAuth = () => {
    window.open(
      "http://localhost:90/thirdpartyRouter/google/callback",
      "_self"
    );
  };

  const login = (e) => {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      setError(true);
    }

    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:90/user/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          console.log(res.data);
          localStorage.setItem("userType", res.data.userType);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", username);
          toast.success("User Logged In  Sucessfully", {
            position: "top-center",
            autoClose: 4000,
          });
          if (localStorage.getItem("userType") === "admin") {
            // console.log(res)
            window.location.replace("/dashboard_admin");
          } else {
            console.log(res.data);
            window.location.replace("/dashboard");
          }
        } else {
          toast.error("User Not Logged In", {
            toastId: "error",
            position: "top-center",
            autoClose: 4000,
          });
          console.log(res);
        }
      })
      .catch((e) => {
        toast.error("User Not Registered", {
          toastId: "error",
          position: "top-center",
          autoClose: 4000,
        });
        console.log(e);
      });
  };
  return (
    // <Box sx={{ display: "flex", flexWrap: "wrap" }}>
    //   <div>
    //     <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //       <InputLabel htmlFor="outlined-adornment-password">
    //         {" "}
    //         Password
    //       </InputLabel>
    //       <OutlinedInput
    //         id="outlined-adornment-password"
    //         type={showPassword ? "text" : "password"}
    //         endAdornment={
    //           <InputAdornment position="end">
    //             <IconButton
    //               aria-label="toggle password visibility"
    //               onClick={handleClickShowPassword}
    //               onMouseDown={handleMouseDownPassword}
    //               edge="end"
    //             >
    //               {showPassword ? <VisibilityOff /> : <Visibility />}
    //             </IconButton>
    //           </InputAdornment>
    //         }
    //         label="Password"
    //       />
    //     </FormControl>
    //   </div>
    // </Box>

    <div className="login-container" data-test="login">
      {/* <img
        src={background}
        alt="background"
        className="login-container__background"
      /> */}
      <div className="login">
        <h2 className="login__heading">Login</h2>

        <form className="login__form" onSubmit={login}>
          <div className="login__input">
            <h3 for="exampleInputPassword1" className="feildheading">
              Username
            </h3>
            <FaUserAlt size={20} className="login__input--icon" />
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              data-test="username"
            />
            {error && username.length <= 0 ? (
              <label>Username cannot be empty</label>
            ) : (
              ""
            )}
          </div>
          <div className="login__input">
            <h3 for="exampleInputPassword1" className="feildheading">
              Password
            </h3>
            <ImKey size={20} className="login__input--icon" />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && password.length <= 0 ? (
              <label>Password cannot be empty</label>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="login__btn"
            onClick={login}
            data-test="login-btn"
          >
            Login
          </button>
          <p className="login__sub-heading">
            Not registered into Thrift It?{" "}
            <Link to="/register" className="login-link">
              Register
            </Link>
          </p>
        </form>
        <hr
          style={{
            height: 0.5,
            borderWidth: 0,
            // color: "gray",
            backgroundColor: "gray",
          }}
        />
        <br />
        <button className="login__google" onClick={googleAuth}>
          <FcGoogle className="login__google--icon" size={30} />
          Continue with Google
        </button>
        <br />
        <button className="login__google">
          <FaFacebookSquare className="login__google--icon" size={30} />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
