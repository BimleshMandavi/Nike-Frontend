import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic2 from "../../assets/pic2.png";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    Arrow: true,
  };

  return (
    <div className="home-slider-container">
      <h2> Featured</h2>
      <Slider {...settings}>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
        <div>
          <img src={Pic2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;