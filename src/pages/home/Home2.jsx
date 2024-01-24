// import Pic2 from "../../assets/pic2.png";
// import { Link } from "react-router-dom";

import "./Home2.css";
import HomeSlider from "./HomeSlider";
const Home2 = () => {
  return (
    <div className="home2-container">
      {/* <div className="item-title"></div>
      <div className="item-cont">
        <Link to="/products">
          <img src={Pic2} alt="" />
        </Link>
      </div> */}
      <HomeSlider />
    </div>
  );
};

export default Home2;
