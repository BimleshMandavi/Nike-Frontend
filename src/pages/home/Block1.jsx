import "./Home1.css";
import { Link } from "react-router-dom";

const Block1 = () => {
  return (
    <div className="home1-container overflow-hidden px-2">
      <Link to="/products">
        <img src="Home1.png" alt="" />
      </Link>
    </div>
  );
};

export default Block1;
