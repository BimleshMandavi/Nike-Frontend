import { Link, useNavigate } from "react-router-dom";
import "./Navbar_1.css";
import { SiJordan } from "react-icons/si";
import "./Media-query.css";

import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../redux/slices/auth";
import React, { useEffect } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { LuUser } from "react-icons/lu";
import toast from "react-hot-toast";

const Navbar_1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const fetchUserData = async () => {
    let result = await dispatch(getUser());
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogOut = async () => {
    console.log("logout");
    let result = await dispatch(logout());
    console.log(result);
    if (result) {
      localStorage.removeItem("accessToken", "");
      navigate("/");
      toast.success("Logout successful");
      return true;
    }
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="nav1-container nav-link flex">
      <div className="nav1-logo">
        <Link to="#">
          <SiJordan className="logo-1" />
        </Link>
      </div>
      <div className="user-menu nav-link">
        <div
          className="user-menu-items"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="https://www.nike.com/in/retail">Find a Store</Link>|
          <Link to="https://www.nike.com/in/help">Help</Link>|
          <Box
            sx={{
              display: Object.keys(user).length === 0 ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <Link to="/sign-up">Join Us</Link>|
            <Link to="/sign-in">Sign in</Link>
          </Box>
          <Box
            sx={{
              display: Object.keys(user).length === 0 ? "none" : "flex",
              alignItems: "center",
            }}
          >
            <Link>Hi, {user.name}</Link>
            <div className="pl-0">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="text-black center p-0"
              >
                <LuUser className="size-6 text-black" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <span onClick={handleProfile}> Profile</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>
                  <span onClick={handleLogOut}>Logout</span>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Navbar_1;
