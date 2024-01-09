import "./Checkout.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LiaSmsSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  const states = [
    {
      value: "USD",
      label: "Andaman and Nicobar Islands",
    },
    {
      value: "EUR",
      label: "Andhr Pradesh",
    },
    {
      value: "BTC",
      label: "Arunachal Pradesh",
    },
    {
      value: "JPY",
      label: "Assam",
    },
    {
      value: "JPY",
      label: "Bihar",
    },
    {
      value: "JPY",
      label: "Chandigarh",
    },
    {
      value: "JPY",
      label: "Chhattisgarh",
    },
    {
      value: "JPY",
      label: "Dadra and Nagar Haveli",
    },
    {
      value: "JPY",
      label: "Daman and Diu",
    },
    {
      value: "JPY",
      label: "Delhi",
    },
    {
      value: "JPY",
      label: "Goa",
    },
    {
      value: "JPY",
      label: "Gujrat",
    },
    {
      value: "JPY",
      label: "Haryana",
    },
    {
      value: "JPY",
      label: "Himachal Pradesh",
    },
    {
      value: "JPY",
      label: "Jammu and Kashmir",
    },
    {
      value: "JPY",
      label: "Jharkhand",
    },
    {
      value: "JPY",
      label: "Karnataka",
    },
    {
      value: "JPY",
      label: "Kerala",
    },
    {
      value: "JPY",
      label: "Lakshadeep",
    },
    {
      value: "JPY",
      label: "Madhya Pradesh",
    },
    {
      value: "JPY",
      label: "Maharashtra",
    },
    {
      value: "JPY",
      label: "Manipur",
    },
    {
      value: "JPY",
      label: "Meghalaya",
    },
    {
      value: "JPY",
      label: "Mizoram",
    },
    {
      value: "JPY",
      label: "Nagaland",
    },
    {
      value: "JPY",
      label: "Odisha",
    },
    {
      value: "JPY",
      label: "Puducherry",
    },
    {
      value: "JPY",
      label: "Punjab",
    },
    {
      value: "JPY",
      label: "Rajasthan",
    },
    {
      value: "JPY",
      label: "Sikkim",
    },
    {
      value: "JPY",
      label: "Tamil Nadu",
    },
    {
      value: "JPY",
      label: "Tripura",
    },
    {
      value: "JPY",
      label: "Uttarakhand",
    },
    {
      value: "JPY",
      label: "Uttar Pradesh",
    },
    {
      value: "JPY",
      label: "West Bengal",
    },
  ];
  const bagSummary = {
    subtotal: "₹ 1 695.00",
    Delivery: "₹ 1 250.00",
    total: "₹ 2 945.00",
  };
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
      <div className="checkout-nav">
        <div className="left-logo">
          <a href="/">
            <SiNike className="logo-img" />
          </a>
        </div>
        <div className="right-nav-cont">
          <span className="contact-num">000 800 100 9538</span>
          <LiaSmsSolid className="check-right-logo sms-log" />
          <IoBagOutline className="check-right-logo bag-log" />
        </div>
      </div>
      <div className="checkout-body-cont">
        <div
          className="checkout-left-part"
          style={{ width: "50%", height: "100%" }}
        >
          <div className="order-heading">
            <h2>How would you like to get your order?</h2>
            <div className="message-body">
              <span className="message-cont">
                Customs regulation for India require a copy of the recipient`s
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information.
              </span>
              <a href="https://www.nike.com/in/help/a/verify-passport">
                Learn More
              </a>
            </div>
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
                    Deliver It
                  </Button>
                </div>
              </Box>
            </div>
            <div className="item-delivery-section">
              <div
                className="add-input-area"
                style={{ padding: "20px 0px 0px" }}
              >
                <h2>Enter your name and address:</h2>
                <form action="" style={{ padding: "20px 0px 0px" }}>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    <TextField
                      fullWidth
                      label="First Name"
                      id="first name"
                      helperText="Please enter your first name"
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
                      label="Last Name"
                      id="fullWidth"
                      helperText="Please enter your last name"
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
                      label="Address Line 1"
                      id="fullWidth"
                      helperText="Please enter your address details"
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
                      label="Address Line 2"
                      id="fullWidth"
                      helperText="Please enter your address details"
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
                      label="Address Line 3"
                      id="fullWidth"
                      helperText="Please enter your address details"
                    />
                  </Box>

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
                        label="Postal Code"
                        multiline
                        maxRows={4}
                        helperText="Please enter your postcode"
                      />
                      <TextField
                        id="outlined-textarea"
                        label="Locality"
                        multiline
                        helperText="Please enter your locality"
                      />
                    </div>
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        label="State/Territory"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="outlined-read-only-input"
                            defaultValue="India"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </div>
                      </Box>
                    </div>
                  </Box>
                </form>
              </div>
              <div className="contact-info-area" style={{ marginTop: "20px" }}>
                <h2>What`s your contact information?</h2>
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
                      label="Email"
                      id="email"
                      helperText="Please enter your email"
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
                      label="Phone Number"
                      id="fullWidth"
                      helperText="Please enter your phone number"
                    />
                  </Box>
                </form>
              </div>
              <div className="user-pan-info" style={{ marginTop: "20px" }}>
                <h2>What`s your PAN?</h2>
                <form action="">
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    <TextField
                      fullWidth
                      label="PAN"
                      id="pan"
                      helperText="Enter your PAN to enable payment with UPI, Net Banking or local card"
                    />
                  </Box>
                </form>
              </div>
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
                Continue
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
              <div className="sub-info">Subtotal</div>
              <div className="sub-value">{bagSummary.subtotal}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info">Estimated Delivery & Handling</div>
              <div className="dele-value">{bagSummary.Delivery}</div>
            </div>
            <div className="price-total">
              <div className="total-info">Total</div>
              <div className="total-value">{bagSummary.total}</div>
            </div>
          </div>
          <div className="order-summary">
            <h3 className="shipment-title" style={{ display: "flex" }}>
              Arrives Tue, 16 Jan - Wed, 7 Feb
            </h3>
            <div
              className="shipment"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div className="item-imgs">
                <img src={items.image} />
              </div>
              <div className="item-order-info">
                <div className="item-title">
                  <a href="/">{items.company}</a>
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
      <div className="checkout-footer"></div>
    </div>
  );
};

export default Checkout;
