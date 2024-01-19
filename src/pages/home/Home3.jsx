import Pic3 from "../../assets/pic3.png";
import { Link } from "react-router-dom";
import "./Home3.css";
const Home3 = () => {
  return (
    <div className="home3-container">
      <div className="item-head-cont"></div>
      <div className="item3-cont">
        <Link to="/products">
          {" "}
          <img src={Pic3} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home3;
