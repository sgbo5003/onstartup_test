import React from "react";
import Slider from "react-slick";

import "../css/_slick.css";
import "../css/_slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
};

const Carousel = () => {
  return (
    <Slider {...settings} className="slick_img">
      <div>
        <img src={"src/images/사각형 400.png"} />
      </div>
      <div>
        <img src={"src/images/사각형 400.png"} />
      </div>
      <div>
        <img src={"src/images/사각형 400.png"} />
      </div>
      <div>
        <img src={"src/images/사각형 400.png"} />
      </div>
      <div>
        <img src={"src/images/사각형 400.png"} />
      </div>
    </Slider>
  );
};

export default Carousel;
