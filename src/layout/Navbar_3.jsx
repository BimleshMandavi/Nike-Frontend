import "./Navbar_3.css";
import "./Media-query.css";
const Navbar_3 = () => {
  return (
    <div
      className="nav3-container hidden lg:flex"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span className="nav-sec-1">
        Move, Shop, Customize & Celebrate With Us.
      </span>

      <p className="nav3-para">
        No matter what you feel like doing today, It`s better as a Member.
      </p>
      <p className="nav3-para">
        <a href="#">Join Us</a>
      </p>
    </div>
  );
};

export default Navbar_3;
