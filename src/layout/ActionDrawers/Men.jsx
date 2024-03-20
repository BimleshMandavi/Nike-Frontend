import { Menu } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [listItem, setListItem] = useState("");

  const hndleFetchProduct = async () => {
    let result = await dispatch(
      getProduct(1, 12, {
        "title.longTitle": { $regex: listItem, $options: "i" },
      })
    );
    if (result) {
      navigate("/products");
      return true;
    }
  };

  const handleListItemClick = (value) => {
    setListItem(value);
    handleClose();
  };

  useEffect(() => {
    hndleFetchProduct();
  }, [listItem]);
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
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("New Releases")}
                  >
                    New Releases
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Bestsellers")}
                  >
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
                    onClick={() => handleListItemClick("Jordan")}
                  >
                    Jordan
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Retro Running")}
                  >
                    Retro Running
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() =>
                      handleListItemClick("Customise with Nike by you")
                    }
                  >
                    Customise with Nike By You
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Sale")}
                  >
                    Sale
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Running Sheos Finder")}
                  >
                    Running Shoes Finder
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shoes</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("All Shoes")}
                  >
                    All Shoes
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Newest Sneakers")}
                  >
                    Newest Sneakers
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Jordan")}
                  >
                    Jordan
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Lifestyle")}
                  >
                    Lifestyle
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Running")}
                  >
                    Running
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Bestsellers")}
                  >
                    Bestsellers
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Gym and Trainning")}
                  >
                    Gym and Training
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Basketball")}
                  >
                    Basketball
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Football")}
                  >
                    Football
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Sandals and Slides")}
                  >
                    Sandals and Slides
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Clothing</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("All Clothing")}
                  >
                    All Clothing
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Tops and T-Shirts")}
                  >
                    Tops and T-Shirts
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Shorts")}
                  >
                    Shorts
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Pants and Leggings")}
                  >
                    Pants and Leggings
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() =>
                      handleListItemClick("Hoodeis and Sweatshirts")
                    }
                  >
                    Hoodies and Sweatshirts
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Jackets and Gilets")}
                  >
                    Jackets and Gilets
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Jordan")}
                  >
                    Jordan
                  </li>
                </ul>
              </div>
            </div>
            <div onClick={handleClose}>
              <div>
                <h3 className="cursor-pointer text-xl">Shop By Sport</h3>
                <ul className="mt-6 space-y-1">
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Running")}
                  >
                    Running
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Basketball")}
                  >
                    Basketball
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Football")}
                  >
                    Football
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Golf")}
                  >
                    Golf
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Tennis")}
                  >
                    Tennis
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Gym and Trainnig")}
                  >
                    Gym and Trainning
                  </li>
                  <li
                    className="cursor-pointer text-slate-500 hover:text-black"
                    onClick={() => handleListItemClick("Yoga")}
                  >
                    Yoga
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

export default Men;
