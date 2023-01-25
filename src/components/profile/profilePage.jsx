import React from "react";
import "./profile.scss";
import { useEffect, useState } from "react";
import { FaTrash, FaPenAlt } from "react-icons/fa";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import UpdateProfile from "./profile-update";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Typography } from "@mui/material";
import { ImCross } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import UpdatePassword from "./passwordUpdate";

const ProfilePage = ({ profile }) => {
  const [userDetails, setUserDetails] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [see, setSee] = React.useState(false);
  const handleOpen1 = () => setSee(true);
  const handleClose1 = () => setSee(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/user/get", config)
      .then((res) => {
        setUserDetails(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateProfile profile={userDetails}></UpdateProfile>
        </Box>
      </Modal>
      <Modal
        open={see}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdatePassword></UpdatePassword>
        </Box>
      </Modal>

      <div className="outer-container pb-5">
        <div className="profile-container pt-5 ">
          <h1 className="head-text text-center mb-4">
            PROFILE
            {/* <BsPersonSquare /> */}
          </h1>
          <div className="profile profile-card p-4">
            <div className="profile__image">
              <img
                width="500"
                height="900"
                src={`http://localhost:90/${userDetails.profile_pic}`}
                alt="profile pic"
              />
            </div>

            <div className="m-4">
              <div className="profile__details container">
                <div className="profile__detail mt-3">
                  Username
                  <p className="profile__detail--value">
                    {" "}
                    {/* <FaUserAlt className="me-2" /> */}
                    {userDetails.username}
                  </p>
                </div>
                <div className="row">
                  <div className="profile__detail mt-2 col-md-6">
                    Firstname
                    <p className="profile__detail--value">
                      {" "}
                      {/* <FaUserAlt className="me-2" /> */}
                      {userDetails.first_name
                        ? userDetails.first_name
                        : "  . . . . . . . . "}
                    </p>
                  </div>
                  <div className="profile__detail mt-2 col-md-6">
                    Lastname
                    <p className="profile__detail--value">
                      {/* <FaUserAlt className="me-2" />{" "} */}
                      {userDetails.last_name
                        ? userDetails.last_name
                        : "  . . . . . . . . "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="profile__detail mt-2 col-md-6">
                    Address
                    <p className="profile__detail--value">
                      {/* <FaUserAlt className="me-2" />{" "} */}
                      {userDetails.address
                        ? userDetails.address
                        : "  . . . . . . . . "}
                    </p>
                  </div>

                  <div className="profile__detail mt-2 col-md-6">
                    Email
                    <p className="profile__detail--value">
                      {/* <MdEmail className="me-2" />{" "} */}
                      {userDetails.email
                        ? userDetails.email
                        : "  . . . . . . . . "}
                    </p>
                  </div>
                  <div className="profile__detail mt-2 col-md-6">
                    Phone
                    <p className="profile__detail--value">
                      {/* <BsTelephoneFill className="me-2" />{" "} */}
                      {userDetails.contact_no
                        ? userDetails.contact_no
                        : "  . . . . . . . . "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="">
                    <button className="update-btn me-4" onClick={handleOpen}>
                      Update Profile
                      <FaPenAlt />
                    </button>
                    <button
                      className="updatepassword-btn"
                      onClick={handleOpen1}
                    >
                      Change Password
                      <FaPenAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="card-info ">
              <div className="py-2">
                <p>Username</p>
                <span className="user-data">{userDetails.username}</span>
              </div>
              <div className="row">
                <div className=" col-md-6 py-2">
                  Firstname
                  <span className="user-data">
                    {userDetails.first_name}
                  </span>{" "}
                  Lastname{" "}
                  <span className="user-data">{userDetails.last_name}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  Email<span className="user-data">{userDetails.email}</span>{" "}
                </div>
                <div className="col-md-6 ">
                  Contact Number{" "}
                  <span className="user-data">{userDetails.contact_no}</span>
                </div>
              </div>
              <div className="py-2">
                Address <span className="user-data">{userDetails.address}</span>
              </div>
              <button
                className="update-btn"
                onClick={handleOpen}
                data-test="updateProfile-btn"
              >
                Update Profile
                <FaPenAlt />
              </button>
              <button
                className="update-btn"
                onClick={handleOpen}
                data-test="updateProfile-btn"
              >
                Update Passwrd
                <FaPenAlt />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <img
          src={
            profile_pic !== ""
              ? `http://localhost:90/${profile_pic}`
              : "https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png"
          }
          alt="profile_img"
          className="dash-nav__profile--img"
        /> */}
    </>
  );
};

export default ProfilePage;
