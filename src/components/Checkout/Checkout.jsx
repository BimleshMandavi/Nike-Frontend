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
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getUser, updateUser } from "../../redux/slices/auth";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  console.log("user data", user);

  let subtotal = 0;
  let deliveryCoast = 1250;

  for (let i of cart) {
    let price =
      i && i.products && i.products[0] && i.products[0].productId?.price?.mrp;
    subtotal = subtotal + price;
  }
  let total = deliveryCoast + subtotal;

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      locality: user?.address?.locality,
      state: user?.address?.state,
      city: user?.address?.city,
      zipcode: user?.address?.zipcode,
      email: user?.email,
      phone: user?.address?.phone,
      panNumber: user?.address?.panNumber,
    },
    onSubmit: async (values, action) => {
      console.log("values", values);
      let data = {
        address: [
          {
            phone: values.phone,
            locality: values?.locality,
            city: values?.city,
            state: values?.state,
            zipcode: values?.zipcode,
            panNumber: values?.panNumber,
          },
        ],
      };
      let result = await dispatch(updateUser(user?.id, data));
      console.log("data in checkout", data);
      if (result) {
        navigate("/shipping");
        toast.success("Chekout successful");
        action.resetForm();
      }
      console.log("result in checkout page", result);
    },
  });
  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const data = await dispatch(getUser());
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    };
    handleGetUser();
  }, []);

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
      value: "JPX",
      label: "Bihar",
    },
    {
      value: "XPY",
      label: "Chandigarh",
    },
    {
      value: "JXY",
      label: "Chhattisgarh",
    },
    {
      value: "CPY",
      label: "Dadra and Nagar Haveli",
    },
    {
      value: "JCY",
      label: "Daman and Diu",
    },
    {
      value: "JPC",
      label: "Delhi",
    },
    {
      value: "APY",
      label: "Goa",
    },
    {
      value: "JAY",
      label: "Gujrat",
    },
    {
      value: "JPA",
      label: "Haryana",
    },
    {
      value: "BPY",
      label: "Himachal Pradesh",
    },
    {
      value: "JBY",
      label: "Jammu and Kashmir",
    },
    {
      value: "JPB",
      label: "Jharkhand",
    },
    {
      value: "CPP",
      label: "Karnataka",
    },
    {
      value: "JCx",
      label: "Kerala",
    },
    {
      value: "JPk",
      label: "Lakshadeep",
    },
    {
      value: "DPY",
      label: "Madhya Pradesh",
    },
    {
      value: "JDY",
      label: "Maharashtra",
    },
    {
      value: "JPD",
      label: "Manipur",
    },
    {
      value: "EPY",
      label: "Meghalaya",
    },
    {
      value: "JEY",
      label: "Mizoram",
    },
    {
      value: "JPE",
      label: "Nagaland",
    },
    {
      value: "FPY",
      label: "Odisha",
    },
    {
      value: "JFY",
      label: "Puducherry",
    },
    {
      value: "JPF",
      label: "Punjab",
    },
    {
      value: "GPY",
      label: "Rajasthan",
    },
    {
      value: "JGY",
      label: "Sikkim",
    },
    {
      value: "JPG",
      label: "Tamil Nadu",
    },
    {
      value: "HPY",
      label: "Tripura",
    },
    {
      value: "JHY",
      label: "Uttarakhand",
    },
    {
      value: "JPH",
      label: "Uttar Pradesh",
    },
    {
      value: "IPY",
      label: "West Bengal",
    },
  ];

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
    <div className="main-checkout-cont w-full h-full ">
      <Headroom>
        <div className="checkout-nav flex justify-between px-5 pt-6 lg:px-20">
          <div className="left-logo ">
            <Link to="/">
              <SiNike className="logo-img" />
            </Link>
          </div>
          <div className="right-nav-cont flex justify-evenly items-center gap-4">
            <span className="contact-num">000 800 100 9538</span>
            <div className="flex gap-4">
              <Link to="#">
                <LiaSmsSolid className="check-right-logo sms-log" />
              </Link>
              <Link to="/cart" className="">
                <IoBagOutline
                  className="check-right-logo bag-log "
                  style={{ cursor: "pointer" }}
                />
                <div
                  className="bag-item-count text-[11px]"
                  style={{
                    textDecoration: "none",
                    color: "#111111",
                    position: "relative",
                    right: "6px",
                    top: "8px",
                    display: Object.keys(cart).length === 0 ? "none" : "flex",
                  }}
                >
                  {cart.length}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Headroom>
      <div className="checkout-body-cont px-4  pt-8 lg:px-20 md:flex md:gap-4  md:justify-evenly">
        <div className="checkout-left-part h-full ">
          <div className="order-heading ">
            <h2>How would you like to get your order?</h2>
            <div className="message-body w-full md:w-[500px]">
              <span className="message-cont w-full ">
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
            <div className="btn-toggle w-full sm:w-[480px]">
              <Box className="w-full" sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button
                    className=""
                    variant="outlined"
                    size="large"
                    style={{
                      width: "100%",
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
                      id="first_name"
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
                        label="Zip Code"
                        name="zipcode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zipcode}
                        multiline
                        maxRows={4}
                        helperText="Please enter your postcode"
                      />
                      <TextField
                        id="outlined-textarea"
                        label="City"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
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
                    <div className="mt-[20px] sm:flex">
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        label="State/Territory"
                        name="state"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik?.values?.state}
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {states.map((option) => (
                          <option key={option.value} value={option.label}>
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
                            label="Country"
                            name="locality"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik?.values?.locality}
                            // InputProps={{
                            //   readOnly: true,
                            // }}
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
                      value={user?.email}
                      // disabled={user?.email ? true : false}
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
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
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
                  width: "100%",
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
            <div className="item-summary-section py-6 ">
              <div className="section-heading">
                <h2>Delivery</h2>
              </div>
              <div className="section-heading text-slate-500">
                <h2>Shipping</h2>
              </div>
              <div className="section-heading text-slate-500">
                <h2>Billing</h2>
              </div>
              <div className="section-heading text-slate-500">
                <h2>Payment</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right-part pb-8">
          <h2 className="order-summary-title">Order Summary</h2>
          <div className="price-summary">
            <div className="prices">
              <div className="sub-info info">Subtotal</div>
              <div className="sub-value info">{subtotal.toFixed(2)}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info info">
                Estimated Delivery & Handling
              </div>
              <div className="dele-value info">{deliveryCoast.toFixed(2)}</div>
            </div>
            <div className="price-total">
              <div className="total-info ">Total</div>
              <div className="total-value ">{total.toFixed(2)}</div>
            </div>
            <div className="summary-help-text" style={{ fontSize: "0.8rem" }}>
              (The total reflects the price of your order, including all duties
              and taxes)
            </div>
          </div>
          <div className="order-summary " style={{ marginTop: "20px" }}>
            <h3
              className="shipment-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Arrives Tue, 16 Jan - Wed, 7 Feb
            </h3>
            {cart.map((data) => (
              <div
                key={data.index}
                className="shipment gap-8 pt-8"
                style={{
                  display: "flex",
                }}
              >
                <div className="item-imgs">
                  <img src={data?.products[0]?.productId?.image} />
                </div>
                <div className="item-order-info">
                  <div className="item-title">
                    <a href="/" style={{ textDecoration: "none" }}>
                      {data?.products[0]?.productId?.title?.longTitle}
                    </a>
                  </div>
                  <div className="item-name">
                    {data?.products[0]?.productId?.title?.shortTitle}
                  </div>
                  <div className="item-color">
                    {" "}
                    Colour: {data?.products[0]?.productId?.subCategory}
                  </div>

                  <div className="item-size">Size</div>

                  <div className="item-quant">
                    {" "}
                    Quantity: {data?.products[0]?.qty}
                  </div>

                  <div className="item-price">
                    {" "}
                    MRP:₹ {data?.products[0]?.productId?.price?.mrp.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <div className="right-sub-footer  absolute right-0">
          <div className="footer-element-right hidden lg:flex ">
            {footerImg.map((item) => (
              <div className="footer-product flex justify-end " key={item.id}>
                <img
                  className="flex  w-[45px] h-[27px] justify-end pr-2 mr-[8px]"
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
