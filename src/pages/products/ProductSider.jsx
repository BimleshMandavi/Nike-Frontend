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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/slices/productSlice";

const ProductSider = () => {
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState({});
  const [selectedSportValues, setSelectedSportValues] = useState([]);
  const [selectedColourValues, setSelectedColourValues] = useState([]);
  const [selectedGenderValues, setSelectedGenderValues] = useState([]);
  const [selectedBrandValues, setSelectedBrandValues] = useState([]);
  const [selectedIconValues, setSelectedIconValues] = useState([]);

  const handleSelectedSportValuesChange = (values) => {
    setSelectedSportValues(values);
  };
  const handleSelectedColourValuesChange = (values) => {
    setSelectedColourValues(values);
  };
  const handleSelectedGenderValuesChange = (values) => {
    setSelectedGenderValues(values);
  };
  const handleSelectedBrandValuesChange = (values) => {
    setSelectedBrandValues(values);
  };
  const handleSelectedIconValuesChange = (values) => {
    setSelectedIconValues(values);
  };

  // const queryOptions = {
  //   selectedSportValues,
  //   selectedColourValues,
  //   selectedGenderValues,
  //   selectedBrandValues,
  //   selectedIconValues,
  // };

  const handleFatchProducts = async () => {
    try {
      let query = {};

      // Construct the query based on selected filter values
      if (
        selectedBrandValues.length > 0 ||
        selectedSportValues.length > 0 ||
        selectedGenderValues.length > 0 ||
        selectedColourValues.length > 0 ||
        selectedIconValues.length > 0
      ) {
        query = {
          $or: [
            { "title.longTitle": { $in: selectedBrandValues } },
            { "title.longTitle": { $in: selectedSportValues } },
            { "title.longTitle": { $in: selectedGenderValues } },
            { subCategory: { $in: selectedColourValues } },
            { "title.longTitle": { $in: selectedIconValues } },
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
  }, [
    selectedBrandValues,
    selectedColourValues,
    selectedSportValues,
    selectedGenderValues,
    selectedIconValues,
  ]);

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
                <GenderCheckBox
                  onSelectedGenderValuesChange={
                    handleSelectedGenderValuesChange
                  }
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
                <BrandBox
                  onSelectedBrandValuesChange={handleSelectedBrandValuesChange}
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
                Icon
              </AccordionSummary>
              <AccordionDetails>
                <IconBox
                  onSelectedIconValuesChange={handleSelectedIconValuesChange}
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
