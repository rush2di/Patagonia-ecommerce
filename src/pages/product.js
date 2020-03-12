import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Product = props => {
  const data = !!props.location.state && props.location.state;
  console.log(data);
  return (
    <div className="main--product">
      <Carousel emulateTouch={true} autoPlay={true}>
        <div>
          <img className="carousel--image" src={data.image} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Product;
