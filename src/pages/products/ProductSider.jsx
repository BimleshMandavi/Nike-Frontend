import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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

import PriceFilletrBox from "./CheckBoxes/PriceFilletrBox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/slices/productSlice";

const ProductSider = () => {
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState({});
  const [selectedSportValues, setSelectedSportValues] = useState("");
  const [selectedColourValues, setSelectedColourValues] = useState("");
  const [selectedGenderValues, setSelectedGenderValues] = useState("");
  const [selectedBrandValues, setSelectedBrandValues] = useState("");
  const [selectedIconValues, setSelectedIconValues] = useState("");
  const [selectedKidsValues, setSelectedKidsValues] = useState("");

  console.log("sport", selectedSportValues);
  console.log("colour", selectedColourValues);
  console.log("gender", selectedGenderValues);
  console.log("brand", selectedBrandValues);
  console.log("icon", selectedIconValues);
  console.log("Kids", selectedKidsValues);

  const handleSelectedSportValuesChange = (values) => {
    setSelectedSportValues(values);
  };
  const handleSelectedColourValuesChange = (values) => {
    setSelectedColourValues(values);
  };
  const handleSelectedGenderValuesChange = (event) => {
    setSelectedGenderValues(event.target.value);
  };
  const handleSelectedBrandValuesChange = (values) => {
    setSelectedBrandValues(values);
  };
  const handleSelectedIconValuesChange = (values) => {
    setSelectedIconValues(values);
  };
  const handleSelectedKidsValuesChange = (values) => {
    setSelectedKidsValues(values);
  };

  const handleFatchProducts = async () => {
    try {
      let query = {};
      if (
        selectedBrandValues.length > 0 ||
        selectedSportValues.length > 0 ||
        selectedGenderValues.length > 0 ||
        selectedColourValues.length > 0 ||
        selectedIconValues.length > 0
      ) {
        query = {
          $or: [
            {
              "title.longTitle": { $regex: selectedBrandValues, $options: "i" },
            },

            {
              "title.longTitle": {
                $regex: selectedGenderValues,
                $options: "i",
              },
            },
            { subCategory: { $regex: selectedColourValues, $options: "i" } },
            {
              "title.longTitle": { $regex: selectedIconValues, $options: "i" },
            },
            {
              "title.longTitle": { $regex: selectedSportValues, $options: "i" },
            },
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
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
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
                    control={
                      <Checkbox
                        checked={selectedKidsValues === "Boys"}
                        onChange={() => handleSelectedKidsValuesChange("Boys")}
                      />
                    }
                    label="Boys"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedKidsValues === "Girls"}
                        onChange={() => handleSelectedKidsValuesChange("Girls")}
                      />
                    }
                    label="Girls"
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
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedColourValues === "Red"}
                        onChange={() => handleSelectedColourValuesChange("Red")}
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
                    control={
                      <Checkbox
                        checked={selectedSportValues === "LifeStyle"}
                        onChange={() =>
                          handleSelectedSportValuesChange("LifeStyle")
                        }
                      />
                    }
                    label="LifeStyle"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Running"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Running")
                        }
                      />
                    }
                    label="Running"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Training Gym"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Training & Gym")
                        }
                      />
                    }
                    label="Training & GYM"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Basketball"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Basketball")
                        }
                      />
                    }
                    label="Basketball"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Football"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Football")
                        }
                      />
                    }
                    label="Football"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Yoga"}
                        onChange={() => handleSelectedSportValuesChange("Yoga")}
                      />
                    }
                    label="Yoga"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Golf"}
                        onChange={() => handleSelectedSportValuesChange("Golf")}
                      />
                    }
                    label="Golf"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Skateboarding"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Skateboarding")
                        }
                      />
                    }
                    label="Skateboarding"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Tennis"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Tennis")
                        }
                      />
                    }
                    label="Tennis"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Althletics"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Althletics")
                        }
                      />
                    }
                    label="Althletics"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Walking"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Walking")
                        }
                      />
                    }
                    label="Walking"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSportValues === "Dance"}
                        onChange={() =>
                          handleSelectedSportValuesChange("Dance")
                        }
                      />
                    }
                    label="Dance"
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
                Brand
              </AccordionSummary>
              <AccordionDetails>
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
                        onChange={() => handleSelectedBrandValuesChange("ACG")}
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
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Air Force 1"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Air Force 1")
                        }
                      />
                    }
                    label="Air Force 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Air Max"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Air Max")
                        }
                      />
                    }
                    label="Air Max"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Blazer"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Blazer")
                        }
                      />
                    }
                    label="Blazer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Blasilia"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Blasilia")
                        }
                      />
                    }
                    label="Blasilia"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Cortez"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Cortez")
                        }
                      />
                    }
                    label="Cortez"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Element"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Element")
                        }
                      />
                    }
                    label="Element"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Huarache"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Huarache")
                        }
                      />
                    }
                    label="Huarache"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Mercurial"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Mercurial")
                        }
                      />
                    }
                    label="Mercurial"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Melton"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Melton")
                        }
                      />
                    }
                    label="Melton"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Miler"}
                        onChange={() => handleSelectedIconValuesChange("Miler")}
                      />
                    }
                    label="Miler"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Nike Dunk"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Nike Dunk")
                        }
                      />
                    }
                    label="Nike Dunk"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Pegasus"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Pegasus")
                        }
                      />
                    }
                    label="Pegasus"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Phantom"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Phantom")
                        }
                      />
                    }
                    label="Phantom"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Structure"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Structure")
                        }
                      />
                    }
                    label="Structure"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Sunray"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Sunray")
                        }
                      />
                    }
                    label="Sunray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Terra Kiger"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Terra Kiger")
                        }
                      />
                    }
                    label="Terra Kiger"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Tiempo"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Tiempo")
                        }
                      />
                    }
                    label="Tiempo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Vomero"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Vomero")
                        }
                      />
                    }
                    label="Vomero"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Windhorse"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Windhorse")
                        }
                      />
                    }
                    label="Windhorse"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Windrunner"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Windrunner")
                        }
                      />
                    }
                    label="Windrunner"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Nike SuperRep"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Nike SuperRep")
                        }
                      />
                    }
                    label="Nike SuperRep"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Alphafly"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Alphafly")
                        }
                      />
                    }
                    label="Alphafly"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Nike Vaporfly"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Nike Vaporfly")
                        }
                      />
                    }
                    label="Nike Vaporfly"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedIconValues === "Nike ZoomFly"}
                        onChange={() =>
                          handleSelectedIconValuesChange("Nike ZoomFly")
                        }
                      />
                    }
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
