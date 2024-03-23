import { Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sale = () => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
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
          <h2>Sale</h2>
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
                <h3 className="cursor-pointer text-xl">Sale</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Men's Sale</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Women's Sale</h3>
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
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Kid's Sale</h3>
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
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Sale;
