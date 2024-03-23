import { Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="hidden lg:w-full lg:flex ">
      <div className="ml-4 ">
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="text-black center p-0"
        >
          <h2>Men</h2>
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
              <div>
                <h3 className="cursor-pointer text-xl">Featured</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shoes</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Clothing</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shop By Sport</h3>
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
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Men;
