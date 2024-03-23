import { Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Kids = () => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="hidden lg:w-full lg:flex  ">
      <div className="ml-4 ">
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-black center p-0"
        >
          <h2>Kids</h2>
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
          <div className="flex justify-evenly pt-8 cursor-default flex-wrap">
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Featured</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Boys'Shoes</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Girls' Shoes</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Kids By Age</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shop By Sport</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Boys' Clothing</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Girls' Clothing</h3>
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
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Kids;
