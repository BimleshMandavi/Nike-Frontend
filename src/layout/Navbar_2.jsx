import { SiNike } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import "./Navbar_2.css";
import "./Media-query.css";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Headroom from "react-headroom";
import { LuUser } from "react-icons/lu";
import NavToggle from "./NavToggle";
import { useSelector } from "react-redux";

const Navbar_2 = () => {
  const { cart } = useSelector((state) => state.cart);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "0 5px 5px 0",
    background: "#F5F5F5",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <>
      <Headroom className="">
        <div className="nav2-container pr-6 relative">
          <div className="logo-container">
            <Link to="/">
              <SiNike className="brand-logo-2" />
            </Link>
          </div>
          <div className=" hidden  gap-2 items-center lg:flex">
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
          <div className="search-input-cont ">
            <Search style={{ borderRadius: "20px" }}>
              <SearchIconWrapper>
                <SearchIcon style={{ cursor: "pointer" }} />
              </SearchIconWrapper>
              <StyledInputBase
                className="search-toggle"
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="action_bar gap-6">
            <div className="favuorite-icon pre-order">
              <Link to="/favourites">
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
                  }}
                >
                  {cart.length}
                </div>
              </Link>
            </div>

            <div className=" mr-7 gap-6  flex items-center justify-center">
              <div className="user-login ">
                <LuUser className=" flex lg:hidden text-2xl" />
              </div>
              <div className="nav-toggle">
                <NavToggle className="flex lg:hidden text-2xl  justify-center pl-0" />
              </div>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar_2;
