import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";
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

const ProductSider = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
                <ListItemButton>
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
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
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
