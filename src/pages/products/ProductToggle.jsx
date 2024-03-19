import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { LuSettings2 } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import { useEffect } from "react";
import GenderCheckBox from "./CheckBoxes/GenderCheckBox";
import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";
import ColourCheckBox from "./CheckBoxes/ColourCheckBoxes";
import BrandBox from "./CheckBoxes/BrandBox";

export default function TemporaryDrawer() {
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
    />
  );

  const dispatch = useDispatch();

  const [filters, setFilters] = React.useState({
    sortBy: "featured", // Default value for sorting
    gender: [], // Array to hold selected genders
    price: [], // Array to hold selected price range
    sale: false, // Boolean to track if sale checkbox is checked
    color: [], // Array to hold selected colors
    brand: [], // Array to hold selected brands
  });

  const handleApplyFilters = () => {
    console.log("Applied Filters:", filters);

    dispatch(getProducts(1, 12, filters));
  };

  const handleClearFilters = () => {
    // Reset all filter state variables to their initial/default values
    setFilters({
      sortBy: "featured",
      gender: [],
      price: [],
      sale: false,
      color: [],
      brand: [],
    });
  };

  const fatchProducts = async () => {
    let result = await dispatch(getProducts(1, 10));
    if (result) {
      return result;
    }
  };

  useEffect(() => {
    fatchProducts();
  }, []);

  return (
    <div className="w-[30%] p-0 m-0 flex lg:hidden">
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className="filter-text  ">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  border: "2px solid grey",
                  borderRadius: "20px",
                }}
              >
                <Button>
                  Filter <LuSettings2 />
                </Button>
              </Box>
            </div>
          </Button>
          <Drawer
            className="flex lg:hidden  "
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div className=" navToggle-container h-[750px] sm:h-[750px] md:h-[750px] p-4">
              <div className="flex">
                <h3 className="text-2xl p-8">Fillter</h3>
                <Button
                  className="flex-1 relative  "
                  onClick={handleCloseToogle}
                >
                  <ImCross className="text-white text-2xl p-1 rounded-2xl relative bg-black left-[45%]" />
                </Button>
              </div>
              <div className="sort-by p-6">
                <h3 className="text-2xl">Sort By</h3>
                <div className="border-b-2">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="featured"
                        control={<Radio />}
                        label="Featured"
                      />
                      <FormControlLabel
                        value="newest"
                        control={<Radio />}
                        label="Newest"
                      />
                      <FormControlLabel
                        value="price-high-low"
                        control={<Radio />}
                        label="Price:High-Low"
                      />
                      <FormControlLabel
                        value="price-low-high"
                        control={<Radio />}
                        label="Price:Low-High"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">Gender</h3>
                <div className="border-b-2">
                  <GenderCheckBox />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">Shop By Price</h3>
                <div className="border-b-2">
                  <PriceFilletrBox />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">Sale & Offers</h3>
                <div className="border-b-2">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Sale"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">Colour</h3>
                <div className="border-b-2">
                  <ColourCheckBox />
                </div>
              </div>
              <div>
                <h3 className="text-2xl">Brand</h3>
                <div>
                  <BrandBox />
                </div>
              </div>

              <div className=" w-full flex justify-around p-8 gap-3">
                <button
                  style={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    border: "2px solid grey",
                  }}
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
                <button
                  style={{
                    background: "black",
                    color: "white",
                    width: "100%",
                    height: "48px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleApplyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
