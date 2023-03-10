import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [userDetails, setUserDetails] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
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
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={userDetails.username}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 42, height: 42 }}
              src={`http://localhost:90/${userDetails.profile_pic}`}
            ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link className="text-decoration-none text-dark" to="/profilepage">
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>{" "}
            Profile
          </MenuItem>
        </Link>
        <Link className="text-decoration-none text-dark" to="/myproducts">
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>{" "}
            My Products
          </MenuItem>
        </Link>
        <Divider />
        {/* <Link className="text-decoration-none text-dark" to="dashboard/setting">
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link> */}
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
