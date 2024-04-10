import Pic3 from "../../assets/pic3.png";
import { Link } from "react-router-dom";
import "./Home3.css";
const Block3 = () => {
  return (
    <div className="home3-container py-3">
      <div className="item-head-cont">
        <h2 className="text-2xl py-5 pl-8">Gear Up</h2>
      </div>
      <div className="item3-cont px-1">
        <Link to="/products">
          {" "}
          <img src={Pic3} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Block3;
