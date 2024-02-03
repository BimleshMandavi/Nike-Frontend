import Bag from "./Bag";
import Summary from "../../components/Summary";
import "./Bag-Item.css";

const BagItems = () => {
  return (
    <div
      className="bagItem-container"
      style={{ height: "100vh", overflow: "auto" }}
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
