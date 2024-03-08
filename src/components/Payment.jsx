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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createOrders } from "../redux/slices/orders";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  let subtotal = 0;
  let deliveryCoast = 1250;

  for (let i of cart) {
    let price =
      i && i.products && i.products[0] && i.products[0].productId?.price?.mrp;
    subtotal = subtotal + price;
  }
  let total = deliveryCoast + subtotal;

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

  const handleEdit = () => {
    navigate("/checkout");
  };
  const handleEditShipping = () => {
    navigate("/shipping");
  };
  const handleEditBiling = () => {
    navigate("/billing");
  };

  const [creditCardClicked, setCreditCardClicked] = useState(false);

  const [paymentDetailsVisible, setPaymentDetailsVisible] = useState(false);

  const handleCreditCardClick = () => {
    setCreditCardClicked(true);
    togglePaymentDetails()(true); // Show payment details when credit card button is clicked
  };

  const togglePaymentDetails = () => {
    setPaymentDetailsVisible(!paymentDetailsVisible);
  };

  const [upiIdClicked, setUpiIdClicked] = useState(false);

  const [idDetailsVisible, setIdDetailsVisible] = useState(false);

  const handleUpiClicked = () => {
    setUpiIdClicked(true);
    toggleUpiDetails()(true);
  };
  const toggleUpiDetails = () => {
    setIdDetailsVisible(!idDetailsVisible);
  };

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = async () => {
    let data = {
      userId: user && user.id,
      products: [],
      address: {
        locality:
          user &&
          user.address &&
          user.address.length > 0 &&
          user.address[0].locality,
        city:
          user &&
          user.address &&
          user.address.length > 0 &&
          user.address[0].city,
        state:
          user &&
          user.address &&
          user.address.length > 0 &&
          user.address[0].state,
        country:
          user &&
          user.address &&
          user.address.length > 0 &&
          user.address[0].country,
        zipcode:
          user &&
          user.address &&
          user.address.length > 0 &&
          user.address[0].zipcode,
      },
      status: "pending",
      paymentStatus: "pending",
      // paymentMode:
      //   method === "Cash on Delivery"
      //     ? "cod"
      //     : method === "Net Banking"
      //     ? "netbank"
      //     : "creditcard",
    };

    cart?.map((item) => {
      data.products.push({
        productId: item.products[0].productId.id,
        qty:"1"
      });
    });
    console.log("data in payments :", data);
    const result = await dispatch(createOrders(data));
    console.log("data in payments :", data);
    if (result) {
      navigate("/orders");
      toast.success("Your order is placed!");
    }
  };

  return (
    <div className="main-checkout-cont h-full w-full">
      <Headroom>
        <div className="checkout-nav flex justify-between items-center px-4">
          <div className="left-logo">
            <Link to="/">
              <SiNike className="logo-img" />
            </Link>
          </div>
          <div className="right-nav-cont flex gap-3">
            <span className="contact-num">000 800 100 9538</span>
            <div className="flex gap-4">
              <Link to="">
                <LiaSmsSolid className="check-right-logo sms-log" />
              </Link>
              <Link to="/cart">
                <IoBagOutline
                  className="check-right-logo bag-log"
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
      <div className="checkout-body-cont px-3 md:flex lg:px-8 md:gap-4 md:justify-evenly">
        <div className="checkout-left-part" style={{ height: "100%" }}>
          <div className="order-heading">
            <h2 className="text-xl  text-center">Have a promo code?</h2>
            <div className="btn-toggle">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Box
                    sx={{
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
                <h2 className="text-xl text-center">
                  How would you like to pay?
                </h2>
                <div className="btn-toggle">
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button
                        variant="outlined"
                        size="large"
                        style={{
                          width: "100%",
                          height: "70px",
                          border: "2px solid black",
                          borderRadius: "12px",
                          marginTop: "10px",
                        }}
                        onClick={handleCreditCardClick}
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
                          width: "100%",
                          height: "70px",
                          border: "2px solid black",
                          borderRadius: "12px",
                          marginTop: "10px",
                        }}
                        onClick={handleUpiClicked}
                      >
                        UPI
                      </Button>
                    </div>
                  </Box>
                  <Box sx={{ "& button": { m: 1 } }}>
                    <div>
                      <Button
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
                        Cash On Delivery
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>

              {paymentDetailsVisible && (
                <div
                  className="contact-info-area"
                  style={{ marginTop: "20px" }}
                >
                  <h2 className="text-center">Enter your payment details:</h2>
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
                  </form>
                </div>
              )}
              {idDetailsVisible && (
                <div className="pt-4">
                  <h2>Enter your UPI ID</h2>
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
                        label="UPI ID"
                        placeholder="Eg:-xxxx56@ybl"
                        id="fullWidth"
                        helperText="Upi id must be required"
                      />
                    </Box>
                  </form>
                </div>
              )}
              <div>
                {!orderPlaced && (
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
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                )}
              </div>
            </div>
            <div
              className="item-summary-section "
              style={{ marginTop: "20px" }}
            >
              <div className="section-heading mb-[40%] ">
                <div className="flex items-center justify-between">
                  <h2 className="mb-2">Delivery</h2>
                  <div className="edit-info-btn pl-[5%]">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        border: "2px solid grey",
                        borderRadius: "20px",
                      }}
                    >
                      <Button onClick={handleEdit} size="sm">
                        Edit
                      </Button>
                    </Box>
                  </div>
                </div>
                <div className="flex ">
                  <div className="text-[20px]">
                    <div className="user-address-info flex ">
                      <div className="flex gap-3">
                        <h3>Name :</h3>
                        <div className=" text-slate-600">{user?.name}</div>
                        <div>{user?.lastName}</div>
                      </div>
                    </div>
                    <div className="user-city">
                      <div className="flex gap-3">
                        <h3>Email :</h3>
                        <div className=" text-slate-600">{user?.email}</div>
                      </div>
                      <div className="flex gap-3">
                        <h3>Phone No. :</h3>
                        <div className=" text-slate-600">
                          {user?.address?.[0].phone}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <h3>PAN No. :</h3>
                        <div className=" text-slate-600">
                          {user?.address?.[0].panNumber}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <h4>Address:</h4>
                        <div className=" text-slate-600">
                          {user?.address?.[0]?.city}
                        </div>
                        <div className=" text-slate-600">
                          {user?.address?.[0]?.state}
                        </div>
                        <div className=" text-slate-600">
                          {user?.address?.[0]?.zipcode}
                        </div>
                        <div className=" text-slate-600">
                          {user?.address?.[0]?.locality}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-heading mb-[30%]">
                <div className="flex items-center justify-between">
                  <h2 className="mb-2">Shipping</h2>
                  <div className="edit-info-btn h-[34px]  ">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        border: "2px solid grey",
                        borderRadius: "20px",
                      }}
                    >
                      <Button onClick={handleEditShipping} size="sm">
                        Edit
                      </Button>
                    </Box>
                  </div>
                </div>
                <div className="flex ">
                  <div className="text-[20px]">
                    <div className="text-slate-500 w-[30%] text-[18px]">
                      ₹ {deliveryCoast.toFixed(2)} Shipping
                    </div>
                    <div className="text-[18px] text-slate-500">
                      <p className="text-[18px] text-slate-500 mb-0">
                        Shipment One
                      </p>
                      <p className="text-[18px] text-slate-500 mb-0">
                        {" "}
                        Arrives Tue, 16 Jan - Wed, 7 Feb
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-heading mb-[30%] ">
                <div className="flex items-center justify-between">
                  <h2 className="mb-2">Billing</h2>
                  <div className="edit-info-btn ">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        border: "2px solid grey",
                        borderRadius: "20px",
                      }}
                    >
                      <Button onClick={handleEditBiling} size="sm">
                        Edit
                      </Button>
                    </Box>
                  </div>
                </div>
                <div className="flex ">
                  <div className="text-[20px]">
                    <div className=" text-slate-600">{user?.name}</div>
                    <div className=" text-slate-600">{user?.email}</div>
                    <div className=" text-slate-600">
                      {user?.address?.[0]?.city}
                    </div>
                  </div>
                </div>
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
              <div className="sub-value info">₹ {subtotal.toFixed(2)}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info info">
                Estimated Delivery & Handling
              </div>
              <div className="dele-value info">
                ₹ {deliveryCoast.toFixed(2)}
              </div>
            </div>
            <div className="price-total">
              <div className="total-info ">Total</div>
              <div className="total-value ">₹ {total.toFixed(2)}</div>
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
                    {" "}
                    {data?.products[0]?.productId?.title?.shortTitle}
                  </div>
                  <div className="item-color">
                    {data?.products[0]?.productId?.subCategory}
                  </div>

                  <div className="item-size">Size</div>

                  <div className="item-quant">
                    {" "}
                    Quantity: {data?.products[0]?.qty}
                  </div>

                  <div className="item-price">
                    {" "}
                    MRP:₹ {data?.products[0]?.productId?.price?.mrp.toFixed(
                      2
                    )}{" "}
                  </div>
                </div>
              </div>
            ))}
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
        <div className="right-sub-footer absolute right-0 ">
          <div className="footer-element-right flex ">
            {footerImg.map((item) => (
              <div
                className="footer-product hidden lg:flex justify-end "
                key={item.id}
              >
                <img
                  className="flex w-[45px] h-[27px] justify-end pr-2 mr-[8px]"
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
