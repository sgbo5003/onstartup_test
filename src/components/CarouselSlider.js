import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import House from "@material-ui/icons/Home";
import "../css/carousel.css";

const CarouselSlider = () => {
  const items = [
    {
      name: "image_1",
      description: "첫번째 이미지",
      src: "src/images/사각형 400.png",
    },
    {
      name: "image_2",
      description: "두번째 이미지",
      src: "src/images/사각형 400.png",
    },
    {
      name: "image_3",
      description: "세번째 이미지",
      src: "src/images/사각형 400.png",
    },
    {
      name: "image_4",
      description: "네번째 이미지",
      src: "src/images/사각형 400.png",
    },
  ];
  return (
    <div className="home_slide_cove">
      <Carousel
        className="carousel"
        NextIcon={
          <img
            src="src/images/home_slide_right.png"
            style={{ height: "30px" }}
          />
        }
        PrevIcon={
          <img
            src="src/images/home_slide_left.png"
            style={{ height: "30px" }}
          />
        }
        navButtonsAlwaysVisible="true"
        navButtonsProps={{
          className: "carousel_btn",
          style: { backgroundColor: "transparent" },
        }}
        animation="slide"
        swipe="true"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper>
      <img src={props.item.src} className="carousel_item" />
    </Paper>
  );
}

export default CarouselSlider;
