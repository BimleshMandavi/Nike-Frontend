import { Link } from "react-router-dom";
import "./Navbar_1.css";
import { SiJordan } from "react-icons/si";
import "./Media-query.css";

const Navbar_1 = () => {
  return (
    <div className="nav1-container nav-links">
      <div className="nav1-logo">
        <Link to="#">
          <SiJordan className="logo-1" />
        </Link>
      </div>
      <div className="user-menu nav-links">
        <div className="user-menu-items">
          <Link to="https://www.nike.com/in/retail">Find a Store</Link>|
          <Link to="https://www.nike.com/in/help">Help</Link>|
          <Link to="/sign-up">Join Us</Link>|<Link to="/sign-up">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar_1;
