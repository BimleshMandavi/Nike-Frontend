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
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/slices/productSlice";
import { useEffect, useState } from "react";
import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";

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

  const [selectedColourValues, setSelectedColourValues] = useState("");
  const [selectedGenderValues, setSelectedGenderValues] = useState("");
  const [selectedBrandValues, setSelectedBrandValues] = useState("");

  const handleSelectedColourValuesChange = (values) => {
    setSelectedColourValues(values);
  };
  const handleSelectedGenderValuesChange = (event) => {
    setSelectedGenderValues(event.target.value);
  };
  const handleSelectedBrandValuesChange = (values) => {
    setSelectedBrandValues(values);
  };

  const handleFatchProducts = async () => {
    try {
      let query = {};
      if (
        selectedBrandValues.length > 0 ||
        selectedGenderValues.length > 0 ||
        selectedColourValues.length > 0
      ) {
        query = {
          $or: [
            {
              "title.longTitle": {
                $regex: selectedBrandValues,
                $options: "i",
              },
            },

            {
              "title.longTitle": {
                $regex: selectedGenderValues,
                $options: "i",
              },
            },
            { subCategory: { $regex: selectedColourValues, $options: "i" } },
          ],
        };
      }

      let result = await dispatch(getProduct(1, 12, query));
      if (result) {
        return true;
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    handleFatchProducts();
  }, [selectedBrandValues, selectedColourValues, selectedGenderValues]);

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
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={selectedGenderValues}
                      onChange={handleSelectedGenderValuesChange}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Women"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Men"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="unisex"
                        control={<Radio />}
                        label="Unisex"
                      />
                    </RadioGroup>
                  </FormControl>
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
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "Red"}
                          onChange={() =>
                            handleSelectedColourValuesChange("Red")
                          }
                        />
                      }
                      label="Red"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "blue"}
                          onChange={() =>
                            handleSelectedColourValuesChange("blue")
                          }
                        />
                      }
                      label="Blue"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "green"}
                          onChange={() =>
                            handleSelectedColourValuesChange("green")
                          }
                        />
                      }
                      label="Green"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "black"}
                          onChange={() =>
                            handleSelectedColourValuesChange("black")
                          }
                        />
                      }
                      label="Black"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "white"}
                          onChange={() =>
                            handleSelectedColourValuesChange("white")
                          }
                        />
                      }
                      label="White"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedColourValues === "pink"}
                          onChange={() =>
                            handleSelectedColourValuesChange("pink")
                          }
                        />
                      }
                      label="Pink"
                    />
                  </FormGroup>
                </div>
              </div>
              <div>
                <h3 className="text-2xl">Brand</h3>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedBrandValues === "Nike Sportswear"}
                          onChange={() =>
                            handleSelectedBrandValuesChange("Nike Sportswear")
                          }
                        />
                      }
                      label="Nike Sportswear"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      checked={selectedBrandValues === "Jordan"}
                      onChange={() => handleSelectedBrandValuesChange("Jordan")}
                      label="Jordan"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedBrandValues === "Nike By You"}
                          onChange={() =>
                            handleSelectedBrandValuesChange("Nike By You")
                          }
                        />
                      }
                      label="Nike By You"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedBrandValues === "NikeLab"}
                          onChange={() =>
                            handleSelectedBrandValuesChange("NikeLab")
                          }
                        />
                      }
                      label="NikeLab"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedBrandValues === "ACG"}
                          onChange={() =>
                            handleSelectedBrandValuesChange("ACG")
                          }
                        />
                      }
                      label="ACG"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedBrandValues === "Nike Pro"}
                          onChange={() =>
                            handleSelectedBrandValuesChange("Nike Pro")
                          }
                        />
                      }
                      label="Nike Pro"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className=" w-full flex justify-around p-8 gap-3">
                <div>
                  <button
                    style={{
                      width: "100%",
                      height: "48px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      border: "2px solid grey",
                    }}
                  >
                    Clear
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      background: "black",
                      color: "white",
                      width: "100%",
                      height: "48px",
                      borderRadius: "30px",
                      cursor: "pointer",
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
