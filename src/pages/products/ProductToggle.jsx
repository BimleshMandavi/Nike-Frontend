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
  Radio,
  RadioGroup,
} from "@mui/material";
import { pink } from "@mui/material/colors";

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
    ></Box>
  );
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="unisex"
                      control={<Radio />}
                      label="Unisex"
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">Shop By Price</h3>
                <div className="border-b-2">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Under ₹ 2500.00"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="₹ 2501.00 - ₹ 7500.00"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="₹ 7501.00 - ₹ 12999.00"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label=" Over ₹ 13000.00"
                    />
                  </FormGroup>
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
                  <Checkbox {...label} defaultChecked />
                  <Checkbox {...label} defaultChecked color="secondary" />
                  <Checkbox {...label} defaultChecked color="success" />
                  <Checkbox {...label} defaultChecked color="default" />
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl">Brand</h3>
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Life Style"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Tennis"
                  />
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
