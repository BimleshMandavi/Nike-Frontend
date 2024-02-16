import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { LuSettings2 } from "react-icons/lu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductHeader = () => {
  return (
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
        <div className="sort-acco hidden sm:flex">
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
  );
};

export default ProductHeader;
