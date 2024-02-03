import { useNavigate } from "react-router-dom";
import "./Summary.css";
import { useSelector } from "react-redux";

const Summary = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart in bag summary", cart);

  const navigate = useNavigate();

  const bagSummary = {
    subtotal: "₹ 1 695.00",
    Delivery: "₹ 1 250.00",
    total: "₹ 2 945.00",
  };

  const handleGuestButton = () => {
    console.log("guest button has been clicked");
  };

  const handleMemberButton = () => {
    navigate("/checkout");
  };
  return (
    <div className="summary-container">
      <div className="sum-heading">Summary</div>
      <div>
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
      <div className="chekout-btns">
        <div className="guest-btn">
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
