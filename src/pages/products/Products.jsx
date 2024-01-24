import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Products.css";
import { LuSettings2 } from "react-icons/lu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ProductSider from "./ProductSider";
import ProductItems from "./ProductItems";

const Products = () => {
  return (
    <div className="product-main-container" style={{ marginTop: "5rem" }}>
      <div
        className="product-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 48px 15px",
        }}
      >
        <div className="left-head-part">
          <h1>New</h1>
        </div>
        <div
          className="right-head-part"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="filter-text"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
              gap: "5px",
            }}
          >
            <h1>Filter</h1>
            <LuSettings2 />
          </div>
          <div className="sort-acco">
            <Accordion style={{ padding: "0" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Sort By
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {[
                    "Featured",
                    "Newest",
                    "Price: High-Low",
                    "Price: Low-High",
                  ].map((text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        className="product-body-cont"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ProductSider />
        <ProductItems />
      </div>
    </div>
  );
};

export default Products;
