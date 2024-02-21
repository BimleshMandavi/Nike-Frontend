import "./Checkout.css";
import Button from "@mui/material/Button";
import { LiaSmsSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import Headroom from "react-headroom";
import { useSelector } from "react-redux";
import { Box, Checkbox } from "@mui/material";

import toast from "react-hot-toast";

const Billing = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  console.log("cart data in shiping", cart);

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
  const handleToBilling = () => {
    navigate("/payment");
    toast.success("Billing successful");
  };

  return (
    <div className="main-checkout-cont">
      <Headroom>
        <div className="checkout-nav flex justify-between px-5 pt-6">
          <div className="left-logo">
            <Link to="/">
              <SiNike className="logo-img" />
            </Link>
          </div>
          <div className="right-nav-cont flex justify-evenly items-center gap-4">
            <span className="contact-num">000 800 100 9538</span>
            <div className="flex gap-4">
              <Link to="">
                <LiaSmsSolid className="check-right-logo sms-log" />
              </Link>
              <Link to="/cart" className="">
                <IoBagOutline
                  className="check-right-logo bag-log"
                  style={{ cursor: "pointer" }}
                ></IoBagOutline>
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
      <div className="checkout-body-cont w-full px-3">
        <div className="checkout-left-part" style={{ height: "100%" }}>
          <div className="order-heading">
            <h2 className="text-xl pb-10 text-center">
              What`s your billing address?
            </h2>
            <div>
              <Checkbox
                label="Billing matches shipping address"
                defaultChecked
              />
              <span>Billing matches shipping address</span>
            </div>
            <div className="item-delivery-section ">
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
                onClick={handleToBilling}
              >
                Continue
              </Button>
            </div>
            <div className="item-summary-section" style={{ marginTop: "20px" }}>
              <div className="section-heading mb-[20%] ">
                <h2 className="mb-2">Delivery</h2>
                <div className="flex ">
                  <div className="text-[20px]">
                    <div className="user-address-info text-slate-600 flex ">
                      <div>{user?.firstName}</div>
                      <div>{user?.lastName}</div>
                    </div>
                    <div className="user-city  text-slate-600">
                      <div>{user?.email}</div>
                    </div>
                  </div>
                  <div className="edit-info-btn relative left-[260px]">
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
              </div>
              <div className="section-heading mb-[20%]">
                <h2 className="mb-2">Shipping</h2>
                <div className="flex ">
                  <div className="text-[20px]">
                    <div className="text-slate-500 w-[30%] text-[18px]">
                      {deliveryCoast} Shipping
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
                  <div className="edit-info-btn h-[34px]  relative left-[260px]">
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
              </div>
              <div className="section-heading">
                <h2>Billing</h2>
              </div>
              <div className="section-heading text-slate-500">
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
              <div className="sub-value info">{subtotal}</div>
            </div>
            <div className="delevery-info">
              <div className="dele-info info">
                Estimated Delivery & Handling
              </div>
              <div className="dele-value info">{deliveryCoast}</div>
            </div>
            <div className="price-total">
              <div className="total-info ">Total</div>
              <div className="total-value ">{total}</div>
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
                className="shipment"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
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
                    MRP:₹ {data?.products[0]?.productId?.price?.mrp}
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

export default Billing;
