import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Checkout = () => {
  return (
    <div className="main-checkout-cont">
      <div className="checkout-body-con">
        <div className="checkout-left-part">
          <div className="order-heading">
            <h2>How would you like to get your order?</h2>
            <div className="message-body">
              <p>
                Customs regulation for India require a copy of the recipient`s
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information.
              </p>
              <a href="https://www.nike.com/in/help/a/verify-passport">
                Learn More
              </a>
            </div>
            <div className="btn-toggle">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button variant="outlined" size="large">
                    Deliver It
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
        <div className="checkout-right-part"></div>
      </div>
    </div>
  );
};

export default Checkout;
