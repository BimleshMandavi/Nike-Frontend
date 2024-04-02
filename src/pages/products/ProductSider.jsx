import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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
import GenderCheckBox from "./CheckBoxes/GenderCheckBox";
import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";
import BrandBox from "./CheckBoxes/BrandBox";
import SportsBox from "./CheckBoxes/SportsBox";
import IconBox from "./CheckBoxes/IconBox";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductSider = () => {
  const [selectedSportValues, setSelectedSportValues] = useState([]);
  const [selectedColourValues, setSelectedColourValues] = useState([]);

  console.log("selected Colour Values in parent :", selectedColourValues);

  console.log("sport values in productSider", selectedSportValues);

  const handleSelectedSportValuesChange = (values) => {
    setSelectedSportValues(values);
  };
  const handleSelectedColourValuesChange = (values) => {
    setSelectedColourValues(values);
  };
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
              "Jacket",
              "Hoodie",
              "Sweatshirt",
              "T-Shirt",
              "Trouser",
              "Shorts",
              "Top",
              "Compression & Baselayer",
              "Tracksuit",
              "Socks",
              "Accessories & Equipment",
            ].map((text, index) => (
              <Link
                className="flex  no-underline pt-1 pl-5"
                key={index}
                to={{
                  pathname: "/products",
                  search: `?type=${text}`,
                }}
              >
                <button>{text}</button>
              </Link>
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
                  <FormControlLabel control={<Checkbox />} label="Boys" />
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
                  <ColorCheckboxes
                    onSelectedColourValuesChange={
                      handleSelectedColourValuesChange
                    }
                  />
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
                <SportsBox
                  onSelectedSportValuesChange={handleSelectedSportValuesChange}
                />
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
