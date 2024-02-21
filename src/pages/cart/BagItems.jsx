import Bag from "./Bag";
import Summary from "./Summary";
import "./Bag-Item.css";
import HomeSlider from "../home/HomeSlider";

const BagItems = () => {
  return (
    <div
      className="bagItem-container 
max-w-full"
    >
      <div className="block  lg:flex lg:px-10 lg:justify-around">
        <div className="bag-cont">
          <Bag />
        </div>
        <div className="summary-cont">
          <Summary />
        </div>
      </div>
      <div className="more-product pt-7">
        <div>
          <h2 className="text-2xl">You Might Also Like</h2>
          <HomeSlider />
        </div>
      </div>
    </div>
  );
};

export default BagItems;
