import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, price } = props.product;

  return (
    <div>
      <img src={img} alt="" />
      <h1>this is product</h1>
    </div>
  );
};

export default Product;
