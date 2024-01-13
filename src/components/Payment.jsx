import "./Checkout.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LiaSmsSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Checkout = () => {
  const bag = useSelector((store) => store.bag);

  const bagSummary = {
    subtotal: "₹ 1 695.00",
    Delivery: "₹ 1 250.00",
    total: "₹ 2 945.00",
  };
  const footerImg = [
    {
      id: "01",
      images: "footerImg1.jpeg",
    },
    {
      id: "02",
      images: "footerImg2.png",
    },
    {
      id: "03",
      images: "footerImg3.png",
    },
    {
      id: "04",
      images: "footerImg4.png",
    },
    {
      id: "05",
      images: "footerImg5.jpeg",
    },
    {
      id: "06",
      images: "footerImg6.png",
    },
    {
      id: "07",
      images: "footerImg7.jpeg",
    },
    {
      id: "08",
      images: "footerImg8.png",
    },
    {
      id: "09",
      images: "footerImg9.jpeg",
    },
    {
      id: "10",
      images: "footerImg10.png",
    },
    {
      id: "11",
      images: "footerImg11.jpeg",
    },
  ];
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
  return (
    <div className="main-checkout-cont">
      <div className="checkout-nav" style={{ padding: "24px 48px" }}>
        <div className="left-logo">
          <Link to="/">
            <SiNike className="logo-img" />
          </Link>
        </div>
        <div className="right-nav-cont">
          <span className="contact-num">000 800 100 9538</span>

          <Link to="">
            <LiaSmsSolid className="check-right-logo sms-log" />
          </Link>
          <Link to="/cart">
            <IoBagOutline
              className="check-right-logo bag-log"
              style={{ cursor: "pointer" }}
            >
              <div
                className="bag-item-count"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                }}
              >
                {bag.length}
              </div>
            </IoBagOutline>
          </Link>
        </div>
      </div>
      <div className="checkout-body-cont">
        <div
          className="checkout-left-part"
          style={{ width: "50%", height: "100%" }}
        >
          <div className="order-heading">
            <h2>Have a promo code?</h2>
            <div className="btn-toggle">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Promo"
                      id="card-details"
                    />
                  </Box>
                </div>
              </Box>
            </div>
            <div className="item-delivery-section">
              <div
                className="add-input-area"
                style={{ padding: "20px 0px 0px" }}
              >
                <h2>How would you like to pay?</h2>
                <div className="btn-toggle">
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button
                        variant="outlined"
                        size="large"
                        style={{
                          width: "480px",
                          height: "70px",
                          border: "2px solid black",
                          borderRadius: "12px",
                          marginTop: "10px",
                        }}
                      >
                        Credit or Debit card
                      </Button>
                    </div>
                  </Box>
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button
                        variant="outlined"
                        size="large"
                        style={{
                          width: "480px",
                          height: "70px",
                          border: "2px solid black",
                          borderRadius: "12px",
                          marginTop: "10px",
                        }}
                      >
                        G pay
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>
              <div className="contact-info-area" style={{ marginTop: "20px" }}>
                <h2>Enter your payment details:</h2>
                <form action="" style={{ marginTop: "20px" }}>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    <TextField
                      fullWidth
                      label="Name on card"
                      placeholder="Name on card"
                      id="email"
                      helperText="Invailid card name"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    <TextField
                      fullWidth
                      label="Card number"
                      placeholder="Card number"
                      id="fullWidth"
                      helperText="Card number is required"
                    />
                  </Box>
                </form>
              </div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                style={{ marginTop: "20px" }}
                noValidate
                autoComplete="off"
              >
                <div style={{ marginTop: "20px" }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    placeholder="MM/YY"
                    label="MM/YY"
                    multiline
                    maxRows={4}
                    helperText="Expiry date is required"
                  />
                  <TextField
                    id="outlined-textarea"
                    placeholder="CVV"
                    label="CVV"
                    multiline
                    helperText="CVV is required"
                  />
                </div>
              </Box>

              <Button
                variant="outlined"
                size="large"
                type="submit"
                style={{
                  marginTop: "50px",
                  width: "500px",
                  height: "60px",
                  borderRadius: "30px",
                  border: "none",
                  padding: "16px 20px",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Place Order
              </Button>
            </div>
            <div className="item-summary-section" style={{ marginTop: "20px" }}>
              <div className="section-heading">
                <h2>Delivery</h2>
              </div>
              <div className="section-heading">
                <h2>Shipping</h2>
              </div>
              <div className="section-heading">
                <h2>Billing</h2>
              </div>
              <div className="section-heading">
                <h2>Payment</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right-part">
          <h2 className="order-summary-title">Order Summary</h2>
          <div className="price-summary">
            <div className="prices">
              <div className="sub-info info">Subtotal</div>
              <div className="sub-value info">{bagSummary.subtotal}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info info">
                Estimated Delivery & Handling
              </div>
              <div className="dele-value info">{bagSummary.Delivery}</div>
            </div>
            <div className="price-total">
              <div className="total-info ">Total</div>
              <div className="total-value ">{bagSummary.total}</div>
            </div>
            <div className="summary-help-text" style={{ fontSize: "0.8rem" }}>
              (The total reflects the price of your order, including all duties
              and taxes)
            </div>
          </div>
          <div className="order-summary" style={{ marginTop: "20px" }}>
            <h3
              className="shipment-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Arrives Tue, 16 Jan - Wed, 7 Feb
            </h3>
            <div
              className="shipment"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
              }}
            >
              <div className="item-imgs">
                <img src={items.image} />
              </div>
              <div className="item-order-info">
                <div className="item-title">
                  <a href="/" style={{ textDecoration: "none" }}>
                    {items.company}
                  </a>
                </div>
                <div className="item-name">{items.item_name}</div>
                <div className="item-color">Black/White</div>

                <div className="item-size">Size</div>

                <div className="item-quant">Quantity</div>

                <div className="item-price">MRP:{items.original_price}</div>
              </div>
            </div>
          </div>
          <div className="shipent-summary"></div>
        </div>
      </div>
      <div
        className="checkout-footer"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          background: "#111",
          color: "#ffff",
          height: "50px",
          width: "100%",
        }}
      >
        <div className="left-sub-footer" style={{ display: "flex" }}>
          <a
            href="#"
            style={{
              display: "flex",
              color: "#ffff",
              margin: "0 8px 0 8px ",
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
          >
            <HiOutlineMapPin />
            <div className="cuntry-name">India</div>
          </a>
          <div
            className="foot-link"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "0 0 0 5px",
            }}
          >
            <div
              className="footer-element-links"
              style={{
                color: "#898989",
                paddingLeft: "10px",
                fontSize: "0.8rem",
              }}
            >
              <span>© 2023 Nike,Inc.All Rights Reserved</span>
            </div>
            <div className="footer-element-links">
              <Link
                to="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Terms of Sale
              </Link>
            </div>
            <div className="footer-element-links">
              {" "}
              <Link
                to="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike&country=IN&language=en&requestType=redirect"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Terms of Use
              </Link>
            </div>
            <div className="footer-element-links">
              <Link
                to="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=SG&language=en&requestType=redirect"
                style={{
                  color: "#898989",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "0.8rem",
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="right-sub-footer">
          <div className="footer-element-right">
            {footerImg.map((item) => {
              <div className="footer-product" key={item.id}>
                <img src={item.images} />;
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
