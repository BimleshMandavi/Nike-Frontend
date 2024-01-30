import "./Bag.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

const Bag = () => {
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

  const handleFav = () => {
    console.log("item has been added to wishlist");
  };
  const handleDel = () => {
    console.log("item has been deleted");
  };

  


  return (
    <div
      className="bag-container"
      style={{ height: "55.5vh", overflow: "hidden" }}
    >
      <div className="bag-heading">
        <p>Bag</p>
      </div>
      <div className="bag-items">
        <div className="right-part">
          <div className="item-imgs">
            <img src={items.image} />
          </div>
          <div className="item-info">
            <div className="item-title">
              <a href="/">{items.company}</a>
            </div>
            <div className="item-name">{items.item_name}</div>
            <div className="item-color">Black/White</div>

            <div className="item-size">Size</div>

            <div className="item-quant">Quantity</div>
            <div className="item-btns">
              <div className="item-fav">
                <IoMdHeartEmpty className="btns" onClick={handleFav} />
              </div>
              <div className="item-del">
                <RiDeleteBinLine className="btns" onClick={handleDel} />
              </div>
            </div>
          </div>
        </div>
        <div className="left-part">
          <span className="item-price">MRP:{items.original_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Bag;
