import { Menu,  } from "@mui/material";
import { useState } from "react";

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
                <h3 className="cursor-pointer text-xl">New&Featured</h3>
                <ul className="mt-6 space-y-1">
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    New Arrivals
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Shoes
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Clothing
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    SNKRS Lounch calender
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Get Em in SNKRS
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    {" "}
                    Bestsellers
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Member Exclusive
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shop Icons</h3>
                <ul className="mt-6 space-y-1">
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    New Arrivals
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Shoes
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Clothing
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    SNKRS Lounch calender
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Get Em in SNKRS
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    {" "}
                    Bestsellers
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Member Exclusive
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">New For Men</h3>
                <ul className="mt-6 space-y-1">
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    New Arrivals
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Shoes
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Clothing
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    SNKRS Lounch calender
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Get Em in SNKRS
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    {" "}
                    Bestsellers
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Member Exclusive
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">New For Women</h3>
                <ul className="mt-6 space-y-1">
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    New Arrivals
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Shoes
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Clothing
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    SNKRS Lounch calender
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Get Em in SNKRS
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    {" "}
                    Bestsellers
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Member Exclusive
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">New For Kids</h3>
                <ul className="mt-6 space-y-1">
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    New Arrivals
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Shoes
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Latest Clothing
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    SNKRS Lounch calender
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Get Em in SNKRS
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    {" "}
                    Bestsellers
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Member Exclusive
                  </li>
                  <li className="cursor-pointer text-slate-500 hover:text-black">
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Sale;
