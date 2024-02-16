import { useNavigate } from "react-router-dom";
import "./Summary.css";
import { useSelector } from "react-redux";

const Summary = () => {
  const navigate = useNavigate();
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

  const handleGuestButton = () => {
    console.log("guest button has been clicked");
  };

  const handleMemberButton = () => {
    navigate("/checkout");
  };

  return (
    <div className="summary-container ">
      <div className="sum-heading">Summary</div>
      <div>
        <div className="prices">
          <div className="sub-info">Subtotal</div>
          <div className="sub-value">₹ {subtotal}</div>
        </div>
        <div className="delevery-info">
          <div className="dele-info">Estimated Delivery & Handling</div>
          <div className="dele-value">₹ {deliveryCoast}</div>
        </div>
        <div className="price-total">
          <div className="total-info">Total</div>
          <div className="total-value">₹ {total}</div>
        </div>
      </div>
      <div className="chekout-btns">
        <div
          className="guest-btn"
          style={{
            display: Object.keys(user).length === 0 ? "flex" : "none",
            alignItems: "center",
          }}
        >
          <button
            className="final-btns"
            type="submit"
            onClick={handleGuestButton}
          >
            Guest Checkout
          </button>
        </div>
        <div className="member-btn">
          <button
            className="final-btns"
            type="submit"
            onClick={handleMemberButton}
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
