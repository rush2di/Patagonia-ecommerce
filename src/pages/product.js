import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Product = props => {
  const data = !!props.location.state && props.location.state;
  const albumMapper = data.album.map((image, i) => {
    return (
      <div key={`carousel-img${i}`}>
        <img className="carousel--image" src={image} alt="" />
      </div>
    );
  });
  console.log(data);
  return (
    <div className="main--product">
      <div className="main--product-header">
        <Carousel
          className="container"
          centerMode={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          autoPlay={true}
        >
          {albumMapper}
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
