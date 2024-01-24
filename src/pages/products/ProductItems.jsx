import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProductSider from "./ProductSider";

function ProductItems() {
  const items = {
    id: "001",
    image: "img1.png",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };

  const handleAddToPreBag = () => {};

  return (
    <div className="product-container">
      <div className="secondery-div" style={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <div className="product-cont">
            <div className="product-sider"></div>
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
                  <div>
                    <Link to="/pre-cart" onClick={handleAddToPreBag}>
                      <img src={items.image} className="product-img" />
                      <h3>{items.item_name}</h3>
                      <div className="product-price">
                        MRP : ₹{items.original_price}
                      </div>
                    </Link>
                  </div>
                </div>
              </Typography>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default ProductItems;
