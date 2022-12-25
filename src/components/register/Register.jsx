import React from "react";
import register_image from "../../assets/register-image.svg";
import { FaUserAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImKey } from "react-icons/im";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const usernameRegex =
    /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const contactRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const handleUsername = (e) => {
    let username = e.target.value;
    if (!username.match(usernameRegex)) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    setUsername(username);
  };

  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };

  const handleContact = (e) => {
    let contact_no = e.target.value;
    if (!contact_no.match(contactRegex)) {
      setContactError(true);
    } else {
      setContactError(false);
    }
    setContactNo(contact_no);
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    if (!password.match(passwordRegex)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      contact_no: contact_no,
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:90/user/register", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("User Registered Sucessfully", {
            position: "top-center",
            autoClose: 4000,
          });
          window.location.replace("/login");
        } else if (response.status === 200) {
          toast.error("Username Already Registered", {
            toastId: "error",
            position: "top-center",
            autoClose: 4000,
          });
        } else if (response.status === 401) {
          toast.error("Something Went Wrong, Please Try Again!!", {
            toastId: "error",
            position: "top-center",
            autoClose: 4000,
          });
        }
        console.log(response.data.msg);
      })
      .catch((e) => {
        toast.error("Something Went Wrong, Please Try Again!!", {
          toastId: "error",
          position: "top-center",
          autoClose: 4000,
        });
        console.log(e);
      });
  };

  return (
    <>
      <div className="register-container" data-test="register">
        <div className="register">
          {/* <div className="register__image">
            <img
              src={register_image}
              alt="register_image"
              className="register__image--img"
            />
          </div> */}
          <div className="register__form">
            <h2 className="register__heading">Create Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="register__input">
                <h3 for="exampleInputPassword1" className="feildheading1">
                  Username
                </h3>
                <FaUserAlt size={20} className="register__input--icon1" />
                <input
                  required="true"
                  type="text"
                  placeholder="Enter username"
                  // value={username}
                  onChange={handleUsername}
                  // onChange={(e) => {
                  //   setUsername(e.target.value);
                  // }}
                />
                {usernameError ? (
                  <span>
                    Username should be 4-16 characters and shouldn't include any
                    special characters and numbers
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="register__input">
                <h3 for="exampleInputPassword1" className="feildheading1">
                  Email Address
                </h3>
                <MdEmail size={27} className="register__input--icon1" />
                <input
                  required
                  type="email"
                  placeholder="Enter email address"
                  // value={email}
                  onChange={handleEmail}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  data-test="email"
                />
                {emailError ? <span>Enter valid email</span> : ""}
              </div>

              <div className="register__input">
                <h3 for="exampleInputPassword1" className="feildheading1">
                  Phone Number
                </h3>
                <FaPhone size={20} className="register__input--icon1" />
                <input
                  required
                  type="number"
                  placeholder="Enter phone number"
                  // value={contact_no}
                  onChange={handleContact}
                  // onChange={(e) => {
                  //   setContactNo(e.target.value);
                  // }}
                />
                {contactError ? <span>Enter valid Contact number</span> : ""}
              </div>

              <div className="register__input">
                <h3 for="exampleInputPassword1" className="feildheading1">
                  Password
                </h3>
                <ImKey size={20} className="register__input--icon1" />
                <input
                  required
                  type="password"
                  placeholder="Enter password"
                  // value={password}
                  onChange={handlePassword}
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  data-test="password"
                />
                {passwordError ? (
                  <span>
                    Password must be at least 8 characters long, must contain at
                    least 1 uppercase letters, 1 special characters
                  </span>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                className="register__btn"
                onClick={handleSubmit}
                data-test="register-btn"
              >
                Submit
              </button>
              <h4 className="register__sub-heading">
                Already registered into Thrift It?{" "}
                <Link to="/login" className="login-link">
                  Login
                </Link>{" "}
              </h4>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
