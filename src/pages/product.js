import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Product = props => {
  const data = !!props.location.state && props.location.state;
  console.log(data);
  return <div></div>;
};

export default Product;
