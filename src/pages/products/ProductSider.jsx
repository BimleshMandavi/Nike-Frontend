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
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import ColorCheckboxes from "./CheckBoxes/ColourCheckBoxes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import GenderCheckBox from "./CheckBoxes/GenderCheckBox";
import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";
import BrandBox from "./CheckBoxes/BrandBox";
import SportsBox from "./CheckBoxes/SportsBox";
import IconBox from "./CheckBoxes/IconBox";

const ProductSider = () => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState("");
  const fatchProducts = async () => {
    let result = await dispatch(
      getProducts(1, 12, {
        subCategory: { $regex: selectedItems, $options: "i" },
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
    <div className="product-accordition">
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
                <SportsBox />
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
                <BrandBox />
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
                <IconBox />
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
