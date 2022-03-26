import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // // let name = [];

  // /* for (const product of cart) {
  //   // name = name + product.name;
  // } */

  return (
    <div className="cart">
      <h4>Selected Laptops:</h4>
      {cart.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}

      <button className="btn btn-outline-success my-3">Choose 1 For Me</button>
      <button className="btn btn-outline-danger mb-2">Choose Again</button>
    </div>
  );
};

export default Cart;
