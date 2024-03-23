import { Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const New_Fetured = () => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListItemClick = (value) => {
    // Perform actions with the selected value, such as making a query
    console.log("Selected value:", value);
    // Close the menu after selecting an item
    handleClose();
  };
  return (
    <div className="hidden lg:w-full lg:flex">
      <div className="ml-4 ">
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-black center p-0 "
        >
          <h2>New & Featured</h2>
        </div>
        <Menu
          PaperProps={{
            style: {
              width: "100%",
              height: "50%",
              marginTop: "30px",
            },
          }}
          className="list"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="flex justify-evenly pt-8 cursor-default">
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">New & Featured</h3>
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
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">Shop Icons</h3>
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
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">New For Men</h3>
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
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">New For Women</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">New For Kids</h3>
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
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default New_Fetured;
