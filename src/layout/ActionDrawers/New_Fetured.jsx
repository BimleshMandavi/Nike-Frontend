import { Menu } from "@mui/material";
import { useState } from "react";

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
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("New Arrivals")}
                  >
                    New Arrivals
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Latest Shoes")}
                  >
                    Latest Shoes
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Latest Clothing")}
                  >
                    Latest Clothing
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("SNKRS Lounch calender")}
                  >
                    SNKRS Lounch calender
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick(" Get Em in SNKRS")}
                  >
                    Get Em in SNKRS
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick(" Bestsellers")}
                  >
                    {" "}
                    Bestsellers
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Member Exclusive")}
                  >
                    Member Exclusive
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() =>
                      handleListItemClick("Top Kick under 8000.00")
                    }
                  >
                    Top Kick under 8000.00
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">Shop Icons</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Air Force 1")}
                  >
                    Air Force 1
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Air Jordan 1")}
                  >
                    Air Jordan 1
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Air Max")}
                  >
                    Air Max
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Dunk")}
                  >
                    Dunk
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Cortez")}
                  >
                    Cortez
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Blazer")}
                  >
                    Blazer
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Pegasus")}
                  >
                    Pegasus
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">New For Men</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shoes")}
                  >
                    Shoes
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Clothing")}
                  >
                    Clothing
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Accessories")}
                  >
                    Accessories
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("SNKRS Lounch calender")}
                  >
                    SNKRS Lounch calender
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shop All New")}
                  >
                    Shop All New
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div className="cursor-pointer">
                <h3 className="cursor-pointer text-xl">New For Women</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shoes")}
                  >
                    Shoes
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Clothing")}
                  >
                    Clothing
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Accessories")}
                  >
                    Accessories
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("SNKRS lounch calender")}
                  >
                    SNKRS Lounch calender
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shop All New")}
                  >
                    Shop All New
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">New For Kids</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shoes")}
                  >
                    Shoes
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Clothing")}
                  >
                    Clothing
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Accessories")}
                  >
                    Accessories
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("SNKRS lounch calender")}
                  >
                    SNKRS Lounch calender
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shop All New")}
                  >
                    Shop All New
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

export default New_Fetured;
