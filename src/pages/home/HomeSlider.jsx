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
    <div className="home-slider-container pl-10 pr-10 text-black-300 bg-slate-500 overflow-y-hidden">
      <h2> Featured</h2>
      <Slider className="overflow-y-hidden" {...settings}>
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
