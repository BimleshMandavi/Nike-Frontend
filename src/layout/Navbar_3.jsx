import "./Navbar_3.css";
import "./Media-query.css";
import Slider from "react-slick";
const Navbar_3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div
              className="nav3-container hidden lg:flex overflow-y-hidden"
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
                No matter what you feel like doing today, It`s better as a
                Member.
              </p>
              <p className="nav3-para">
                <a href="sign-up">Join Us</a>
              </p>
            </div>
          </div>
          <div>
            <div
              className="nav3-container hidden lg:flex overflow-y-hidden"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span className="nav-sec-1">Enjoy 10% Off</span>

              <p className="nav3-para">
                No matter what you feel like doing today, It`s better as a
                Member.
              </p>
            </div>
          </div>
          <div>
            <div
              className="nav3-container hidden lg:flex overflow-y-hidden h-full"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span className="nav-sec-1">Students Get 10% Off.</span>
              <p className="nav3-para">
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Navbar_3;
