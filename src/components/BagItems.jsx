import Bag from "./Bag";
import Summary from "./Summary";
import "./Bag-Item.css";

const BagItems = () => {
  return (
    <div
      className="bagItem-container"
      style={{ height: "100%", overflow: "hidden" }}
    >
      <div className="bag-cont">
        <Bag />
      </div>
      <div className="summary-cont">
        <Summary />
      </div>
    </div>
  );
};

export default BagItems;
