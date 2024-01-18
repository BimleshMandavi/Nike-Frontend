import { SiNike } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";
import "./Navbar_2.css";
import "./Media-query.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Headroom from "react-headroom";

const Navbar_2 = () => {
  const bag = useSelector((store) => store.bag);

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
    <Headroom>
      <div className="nav2-container">
        <div className="logo-container">
          <Link to="/">
            <SiNike className="brand-logo-2" />
          </Link>
        </div>
        <div className="nav_bar nav-links">
          <Link to="#">New & Featured</Link>
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Sale</Link>
          <Link to="#">Customise</Link>
          <Link to="#">
            Gifts <FaGift className="gift-box" />
          </Link>
          <a href="#">SNKRS</a>
        </div>
        <div className="">
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
        <div className="action_bar ">
          <div className="favuorite-icon pre-order">
            <Link
              to="/favourites"
              onClick={() => console.log("favuorite btn has been clicked")}
            >
              <IoMdHeartEmpty className="favuorite-logo nav-links" />
            </Link>
          </div>
          <div className="bag-icon pre-order">
            <Link to="/cart">
              <IoBagOutline className="bag-icon " />
              <div
                className="bag-item-count"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                }}
              >
                {bag.length}
              </div>
            </Link>
          </div>
        </div>
        <a
          href="#"
          className="nav-toggle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#111111",
            textDecoration: "none",
            height: "34px",
            width: "34px",
            marginRight: "20px",
          }}
        >
          <GiHamburgerMenu
            className="nav-toggle"
            style={{ height: "100%", width: "100%" }}
          />
        </a>
      </div>
    </Headroom>
  );
};

export default Navbar_2;
