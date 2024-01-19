import Pic1 from "../../assets/pic1.png";
import "./Home1.css";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="home1-container">
      <Link to="/products">
        {" "}
        <img src={Pic1} alt="Home pic" />
      </Link>
    </div>
  );
};

export default Home1;
