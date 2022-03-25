import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, img, price } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info text-center">
        <h4>{name}</h4>
        <p>
          <small>Id: {id}</small>
        </p>
        <h4>
          ৳<span className="text-danger">{price}</span>
        </h4>
      </div>

      <div className="btnIcon mt-4">
        <button className="btn btn-link btn-cart">Add to Cart</button>

        <FontAwesomeIcon
          className="text-primary"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Product;
