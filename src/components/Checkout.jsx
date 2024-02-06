import "./Checkout.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LiaSmsSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import Headroom from "react-headroom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createOrders } from "../redux/slices/orders";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      postalCode: "",
      locality: "",
      state: "",
      email: "",
      phoneNumber: "",
      panNumber: "",
    },
    onSubmit: async (values, action) => {
      const {
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        addressLine3,
        postalCode,
        locality,
        state,
        email,
        phoneNumber,
        panNumber,
      } = values;
      const data = {
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        addressLine3,
        postalCode,
        locality,
        state,
        email,
        phoneNumber,
        panNumber,
      };
      console.log("data of order", data);
      let result = await dispatch(createOrders(data));
      console.log("result in checkout page", result);
      if (result) {
        navigate("/payment");
        toast.success("Chekout successful");
        action.resetForm();
      }
    },
  });

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

  return (
    <div className="main-checkout-cont">
      <Headroom>
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
              />
            </Link>
          </div>
        </div>
      </Headroom>
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
            <form
              onSubmit={formik.handleSubmit}
              className="item-delivery-section"
            >
              <div
                className="add-input-area"
                style={{ padding: "20px 0px 0px" }}
              >
                <h2>Enter your name and address:</h2>
                <div style={{ padding: "20px 0px 0px" }}>
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
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
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
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
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
                      name="addressLine1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addressLine1}
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
                      name="addressLine2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addressLine2}
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
                      name="addressLine3"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addressLine3}
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
                        name="postalCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postalCode}
                        multiline
                        maxRows={4}
                        helperText="Please enter your postcode"
                      />
                      <TextField
                        id="outlined-textarea"
                        label="Locality"
                        name="locality"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.locality}
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
                        name="state"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
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
                </div>
              </div>
              <div className="contact-info-area" style={{ marginTop: "20px" }}>
                <h2>What`s your contact information?</h2>
                <div
                  onSubmit={formik.handleSubmit}
                  style={{ marginTop: "20px" }}
                >
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
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
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
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      id="fullWidth"
                      helperText="Please enter your phone number"
                    />
                  </Box>
                </div>
              </div>
              <div className="user-pan-info" style={{ marginTop: "20px" }}>
                <h2>What`s your PAN?</h2>

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
                    name="panNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.panNumber}
                    id="pan"
                    helperText="Enter your PAN to enable payment with UPI, Net Banking or local card"
                  />
                </Box>
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
            </form>
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
          <div className="footer-element-right  flex absolute right-0">
            {footerImg.map((item) => (
              <div className="footer-product flex justify-end " key={item.id}>
                <img
                  className="flex w-[80px] h-[30px] justify-end pr-2"
                  src={item.images}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
