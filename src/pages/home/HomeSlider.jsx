import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from "../../constant/Home";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,

    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 2,
    Arrow: true,
  };
  const setting = {
    dots: true,
    infinite: true,

    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    Arrow: true,
  };

  return (
    <>
      <div className="home-slider-container w-full hidden md:block">
        <h2 className="text-2xl pt-5 pl-8">Always Iconic</h2>
        <Slider {...setting}>
          {article.map((item) => (
            <Link
              key={item.id}
              to={"/products"}
              className="w-[200px] h-[340px] py-2 px-7"
            >
              <div>
                <img
                  className="max-w-full mix-blend-color-burn"
                  src={item.url}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="home-slider-container w-full block md:hidden">
        <h2 className="text-2xl pt-5 pl-8">Always Iconic</h2>
        <Slider {...settings}>
          {article.map((item) => (
            <Link
              key={item.id}
              to={"/products"}
              className="w-[200px] h-[340px] py-2 px-7"
            >
              <div>
                <img
                  className="max-w-full mix-blend-color-burn"
                  src={item.url}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
