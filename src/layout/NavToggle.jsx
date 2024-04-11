import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { SiJordan } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { LuUser } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { PiStorefront } from "react-icons/pi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";

import toast from "react-hot-toast";
import Navbar_3 from "./Navbar_3";
import { logout } from "../redux/slices/auth";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleCloseToogle = () => {
    setState(!state);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  const handleLogOut = async () => {
    let result = await dispatch(logout());
    if (result) {
      localStorage.removeItem("accessToken", "");
      navigate("/");
      handleCloseToogle();
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleJoin = () => {
    navigate("/sign-up");
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleTobag = () => {
    navigate("/cart");
    handleCloseToogle();
  };
  const handleToOrders = () => {
    navigate("/orders");
    handleCloseToogle();
  };
  const handleToFavourites = () => {
    navigate("/favourites");
    handleCloseToogle();
  };

  const handleToFindStore = () => {
    navigate("/findstore");
    handleCloseToogle();
  };

  const handleToHelp = () => {
    navigate("/help");
    handleCloseToogle();
  };

  return (
    <div className="w-[30%] p-0 m-0 over">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu className="flex lg:hidden text-2xl text-black p-0 m-0" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div className="navToggle-container p-4 overflow-x-hidden">
              <Button
                className="flex-1 relative left-[245px]"
                onClick={handleCloseToogle}
              >
                <ImCross className="text-white text-2xl p-1 rounded-2xl  bg-black" />
              </Button>
              <AccordionGroup sx={{ maxWidth: 300 }}>
                <Accordion
                  sx={{
                    display: Object.keys(user).length === 0 ? "none" : "flex",
                    alignItems: "center",
                  }}
                >
                  <AccordionSummary>
                    <div className="user-login flex lg:hidden ">
                      <Box>
                        <div className="ml-4">
                          <div
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            className="text-black center p-0 flex w-[230px]"
                          >
                            <LuUser className="flex lg:hidden text-2xl text-black" />
                            <span className="pl-4">Hi, {user.firstName}</span>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <h3 className="text-xl pt-3">All</h3>
                      <h1 className="text-2xl pt-3">{user.name}</h1>

                      <div
                        className="no-underline pt-3"
                        onClick={handleProfile}
                      >
                        Profile
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Inbox
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Orders
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Favourites
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Experinces
                      </div>
                      <div className="no-underline pt-3 cursor-pointer">
                        Account Settings
                      </div>
                      <div
                        className="no-underline pt-3 cursor-pointer"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>New and Featured</AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary>New & Featured</AccordionSummary>
                      <AccordionDetails>
                        <div className="cursor-pointer">
                          {[
                            "New Arrivals",
                            "Latest Shoes",
                            "Latest Clothing",
                            "SNKRS Lounch calender",
                            "Get Em in SNKRS",
                            "Bestsellers",
                            "Member Exclusive",
                            "Top Kick under 8000.00",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shop Icons</AccordionSummary>
                      <AccordionDetails>
                        <div className="cursor-pointer">
                          {[
                            "Air Force 1",
                            "Air Jordan 1",
                            "Air Max",
                            "Dunk",
                            "Cortez",
                            "Blazer",
                            "Pegasus",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>New For Men</AccordionSummary>
                      <AccordionDetails>
                        <div className="cursor-pointer">
                          {[
                            "Shoes",
                            "Clothing",
                            "Accessories",
                            "SNKRS Lounch calender",
                            "Shop All New",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>New For Women</AccordionSummary>
                      <AccordionDetails>
                        <div className="cursor-pointer">
                          {[
                            "Shoes",
                            "Clothing",
                            "Accessories",
                            "SNKRS Lounch calender",
                            "Shop All New",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>New For Kids</AccordionSummary>
                      <AccordionDetails>
                        <div className="cursor-pointer">
                          {[
                            "Shoes",
                            "Clothing",
                            "Accessories",
                            "SNKRS Lounch calender",
                            "Shop All New",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Men</AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary>Featured</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "New Release",
                            "Bestsellers",
                            "Member Exclusive",
                            "Jordan",
                            "Retro Runnnig",
                            "Bestsellers",
                            "Custom With Nike By You",
                            "Basketball",
                            "Sale",
                            "Running Shoes Finder",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shoes</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Shoes",
                            "Newest Sneakers",
                            "Jordan",
                            "Lifestyle",
                            "Running",
                            "Bestsellers",
                            "Gym and Training",
                            "Basketball",
                            "Football",
                            "Sandals and Slides",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Clothing</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Clothing",
                            "Top and T-shirt",
                            "Shorts",
                            "Pants and Leggings",
                            "Hoodie and Sweatshirts",
                            "Jackets and Glites",
                            "Jordan",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shop By Sport</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Running",
                            "Basketball",
                            "Football",
                            "Golf",
                            "Tennis",
                            "Gym and Training",
                            "Yoga",
                          ].map((text, index) => (
                            <Link
                              className="flex  text no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Women</AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary>Featured</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "New Release",
                            "Bestsellers",
                            "Member Exclusive",
                            "Jordan",
                            "Retro Runnnig",
                            "Bestsellers",
                            "Custom With Nike By You",
                            "Basketball",
                            "Sale",
                            "Running Shoes Finder",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shoes</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Shoes",
                            "Newest Sneakers",
                            "Jordan",
                            "Lifestyle",
                            "Running",
                            "Bestsellers",
                            "Gym and Training",
                            "Basketball",
                            "Football",
                            "Sandals and Slides",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Clothing</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Clothing",
                            "Top and T-shirt",
                            "Shorts",
                            "Pants and Leggings",
                            "Hoodie and Sweatshirts",
                            "Jackets and Glites",
                            "Jordan",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shop By Sport</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Running",
                            "Basketball",
                            "Football",
                            "Golf",
                            "Tennis",
                            "Gym and Training",
                            "Yoga",
                          ].map((text, index) => (
                            <Link
                              className="flex  text no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Kids</AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary>Featured</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "New Releases",
                            "Newest Sneakers",
                            "Easy On & Off",
                            "Bestsellers",
                            "Member Exclusive",
                            "Jordan",
                            "Last Sizes Available",
                            "Bags and Bagpaks",
                            "Sale",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Boy's Shoes</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Shoes",
                            "Older Boys (7 - 14 years)",
                            "Yunger Boys (4-7 Years)",
                            "Babies and Tollders (0 - 4 Years)",
                            "Lifestyle",
                            "Jordan",
                            "Running",
                            "Basketball",
                            "Football",
                            "Sandals and Slides",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Girls Shoes</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "All Shoes",
                            "Older Girls (7 - 14 years)",
                            "Yunger Girls (4-7 Years)",
                            "Babies and Tollders (0 - 4 Years)",
                            "Lifestyle",
                            "Jordan",
                            "Running",
                            "Basketball",
                            "Football",
                            "Sandals and Slides",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Kids By Age</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Older Kids (7 - 14 years)",
                            "Yunger Kids (4-7 Years)",
                            "Babies and Tollders (0 - 4 Years)",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Shop By Sport</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Football",
                            "Running",
                            "Basketball",
                            "Gym and Training",
                            "Tennis",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Boys Clothing</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Tops and T-shirts",
                            "Hoodies and Sweatshirts",
                            "Pants and Leggings",
                            "Shorts",
                            "All Boys Clothing",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Girls Clothing</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Tops and T-shirts",
                            "Hoodies and Sweatshirts",
                            "Sport Bras",
                            "Pants and Leggings",
                            "Shorts",
                            "All Boys Clothing",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Sale</AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary>Sale</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {[
                            "Shop All Sale",
                            "Shoes Sale",
                            "Clothing Sale",
                            "Accessories & Equipment Sale",
                          ].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Men's Sale</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {["Shoes", "Clothing"].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Women's Sale</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {["Shoes", "Clothing"].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary>Kids's Sale</AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {["Shoes", "Clothing"].map((text, index) => (
                            <Link
                              className="flex  no-underline text-slate-500 hover:text-black pt-2"
                              key={index}
                              to={{
                                pathname: "/products",
                                search: `?type=${text}`,
                              }}
                            >
                              <button>{text}</button>
                            </Link>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
              <div className="pt-3">Customise</div>
              <div className="pt-3">SNKRS</div>
              <div className="flex justify-start center pt-8 pl-4">
                <SiJordan className="text-2xl" />{" "}
                <div className="pl-8 text-2xl">Jordan</div>
              </div>

              <div
                style={{
                  display: Object.keys(user).length === 0 ? "block" : "none",
                  paddingTop: "30px",
                }}
              >
                <div className="w-[300px]">
                  <Navbar_3 />
                </div>

                <div className="flex pt-5 justify-center">
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="outlined" onClick={handleJoin}>
                      Join Us
                    </Button>
                    <Button variant="outlined" onClick={handleSignIn}>
                      Sign In
                    </Button>
                  </Box>
                </div>
              </div>
              <div className="pt-20">
                <div
                  onClick={handleToFavourites}
                  className="flex justify-start center no-underline pb-4 cursor-pointer"
                >
                  <IoMdHeartEmpty />
                  <div className="pl-4">Favourites</div>
                </div>
                <div
                  className="flex  center no-underline pb-4 cursor-pointer"
                  onClick={handleTobag}
                >
                  <IoBagOutline />
                  <div className="pl-4">Bag</div>
                </div>
                <div
                  onClick={handleToOrders}
                  className="flex no-underline pb-4 cursor-pointer"
                >
                  <FiShoppingBag />
                  <div className="pl-4">Orders</div>
                </div>
                <div
                  onClick={handleToFindStore}
                  className="flex no-underline pb-4 cursor-pointer"
                >
                  <PiStorefront />
                  <div className="pl-4">Find Store</div>
                </div>
                <div
                  onClick={handleToHelp}
                  className="flex no-underline pb-4 cursor-pointer"
                >
                  <MdOutlineHelpOutline />
                  <div className="pl-4">Help</div>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
