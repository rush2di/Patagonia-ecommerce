import React from "react";

const Product = props => {
  const data = !!props.location.state && props.location.state;
  console.log(data);
  return <div></div>;
};

export default Product;
