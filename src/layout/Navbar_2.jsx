import { SiNike } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import "./Navbar_2.css";
import "./Media-query.css";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

import Headroom from "react-headroom";
import { LuUser } from "react-icons/lu";
import NavToggle from "./NavToggle";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import toast from "react-hot-toast";
import { logout } from "../redux/slices/auth";
import SearchToggle from "./SearchToggle";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Navbar_2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: "0 5px 5px 0",
  //   background: "#F5F5F5",
  //   cursor: "pointer",
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.black, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),

  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("md")]: {
  //       width: "20ch",
  //     },
  //   },
  // }));

  const handleLogOut = async () => {
    let result = await dispatch(logout());
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Headroom className="">
        <div className="nav2-container  relative ">
          <div className="logo-container">
            <Link to="/">
              <SiNike className="brand-logo-2" />
            </Link>
          </div>
          <div className=" hidden  gap-4 items-center lg:flex flex-wrap">
            <Link to="#" className=" list-none no-underline">
              New & Featured
            </Link>

            <Link to="#" className=" no-underline">
              Men
            </Link>
            <Link to="#" className=" no-underline">
              Women
            </Link>
            <Link to="#" className=" no-underline">
              Kids
            </Link>
            <Link to="#" className=" no-underline">
              Sale
            </Link>
            <Link to="#" className=" no-underline">
              Customise
            </Link>
            <a href="#" className=" no-underline">
              SNKRS
            </a>
          </div>
          <div className="search-input-cont hidden md:flex">
            {/* <Search style={{ borderRadius: "20px" }}>
              <SearchIconWrapper>
                <SearchIcon style={{ cursor: "pointer" }} />
              </SearchIconWrapper>
              <StyledInputBase
                className="search-toggle"
                placeholder="Search"
                value={searchTerm}
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                inputProps={{ "aria-label": "search" }}
                // startAdornment={
                //   <SearchIcon className="" style={{ cursor: "pointer" }} />
                // }
              />
            </Search> */}

            <div className="searchBar">
              {/* <input
                type="text"
                id="searchInput"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{
                  height: "40px",
                  display: "block",
                  borderRadius: "20px",
                  border: "1px solid transparent",
                  background: "#eaeaea",
                  padding: "5px 5px 5px 9px",
                  width: "203px",
                  boxSizing: "border-box",
                  marginLeft: "auto",
                  marginTop: "6px",
                }}
              /> */}
              <SearchBox />
            </div>
          </div>

          <div className="action_bar pr-[2%]">
            <div className="flex items-center">
              <div className="flex md:hidden pr-5">
                <SearchToggle />
              </div>
              <div className="favuorite-icon pre-order">
                <Link
                  className=" align-middle hidden sm:flex"
                  to="/favourites "
                >
                  <IoMdHeartEmpty className="favuorite-logo links" />
                </Link>
              </div>
              <div className="bag-icon pre-order ">
                <Link to="/cart">
                  <IoBagOutline className="bag-icon " />
                  <div
                    className="bag-item-count text-xs"
                    style={{
                      textDecoration: "none",
                      color: "#111111",
                      position: "relative",
                      right: "6px",
                      top: "8px",
                      display: Object.keys(cart).length === 0 ? "none" : "flex",
                    }}
                  >
                    {cart.length}
                  </div>
                </Link>
              </div>
            </div>

            <div className=" mr-7   flex items-center justify-center">
              <div className="user-login flex lg:hidden ">
                <Box
                  sx={{
                    display: Object.keys(user).length === 0 ? "none" : "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="hidden sm:flex pl-[30px]">
                    Hi, {user.name}
                  </span>
                  <div className="ml-4 ">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="text-black center p-0"
                    >
                      <LuUser className="flex lg:hidden text-2xl text-black " />
                    </Button>
                    <Menu
                      className="list hover:"
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
              <div className=" flex lg:hidden text-2xl  pl-0">
                <NavToggle />
              </div>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar_2;
