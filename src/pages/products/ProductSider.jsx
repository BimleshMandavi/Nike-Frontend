import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import ColorCheckboxes from "./CheckBoxes/ColourCheckBoxes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import GenderCheckBox from "./CheckBoxes/GenderCheckBox";
import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";

const ProductSider = () => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState("");
  const fatchProducts = async () => {
    let result = await dispatch(
      getProducts(1, 10, {
        category: { $regex: selectedItems, $options: "i" },
      })
    );
    if (result) {
      return true;
    }
  };

  const handleItemClick = (text) => {
    setSelectedItems(text);
  };

  useEffect(() => {
    fatchProducts();
  }, [selectedItems]);

  return (
    <div className="product-accordition hidden lg:flex">
      <div
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
          width: "240px",
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Shoes",
              "Jackets",
              "Send Hoodies & Sweatshirts",
              "Trousers & Tights",
              "Shorts",
              "Tops & T-Shirts",
              "Compression & Baselayer",
              "Tracksuits",
              "Socks",
              "Accessories & Equipment",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleItemClick(text)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Gender
              </AccordionSummary>
              <AccordionDetails>
                <GenderCheckBox />
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Kids
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Boys"
                  />
                  <FormControlLabel control={<Checkbox />} label="Girls" />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Shop by price
              </AccordionSummary>
              <AccordionDetails>
                {/* <FormGroup>
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
                </FormGroup> */}
                <PriceFilletrBox />
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Colour
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <ColorCheckboxes />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Sports
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="LifeStyle"
                  />
                  <FormControlLabel control={<Checkbox />} label="Running" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Training & GYM"
                  />
                  <FormControlLabel control={<Checkbox />} label="Basketball" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Football"
                  />
                  <FormControlLabel control={<Checkbox />} label="Yoga" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Golf"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Skateboarding"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Tennis"
                  />
                  <FormControlLabel control={<Checkbox />} label="Althletics" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Walking"
                  />
                  <FormControlLabel control={<Checkbox />} label="Dance" />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Brand
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Nike Sportswear"
                  />
                  <FormControlLabel control={<Checkbox />} label="Jordan" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Nike By You"
                  />
                  <FormControlLabel control={<Checkbox />} label="NikeLab" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="ACG"
                  />
                  <FormControlLabel control={<Checkbox />} label="Nike Pro" />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Icon
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Air Force 1"
                  />
                  <FormControlLabel control={<Checkbox />} label="Air Max" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Blazer"
                  />
                  <FormControlLabel control={<Checkbox />} label="Blasilia" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Cortez"
                  />
                  <FormControlLabel control={<Checkbox />} label="Element" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Huarache"
                  />
                  <FormControlLabel control={<Checkbox />} label="Mercurial" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Melton"
                  />
                  <FormControlLabel control={<Checkbox />} label="Miler" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Nike Dunk"
                  />
                  <FormControlLabel control={<Checkbox />} label="Pegasus" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phantom"
                  />
                  <FormControlLabel control={<Checkbox />} label="Structure" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Sunray"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Terra Kiger"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Tiempo"
                  />
                  <FormControlLabel control={<Checkbox />} label="Vomero" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Windhorse"
                  />
                  <FormControlLabel control={<Checkbox />} label="Windrunner" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Noke SuperRep"
                  />
                  <FormControlLabel control={<Checkbox />} label="Alphafly" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Nike Vaporfly"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Nike ZoomFly"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="product-gen">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Best for
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wet Weather Conditions"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductSider;
