import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { Link } from "react-router-dom";
import { bagActions } from "../../constant/bagSlice";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);

  const handleAddToPreBag = () => {
    dispatch(bagActions.addToBag(items.id));
  };

  const drawerWidth = 240;
  return (
    <div className="product-container">
      <div className="secondery-div">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
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
                      {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography paragraph>
              <div
                className="home-items-cont"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {items.map((item) => (
                  <div key={item.id}>
                    <Link to="/pre-cart" onClick={handleAddToPreBag}>
                      <img
                        key={item.id}
                        src={item.image}
                        className="product-img"
                      />
                      <h3>{item.item_name}</h3>
                      <div className="product-price">
                        MRP : ₹{item.original_price}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Products;
