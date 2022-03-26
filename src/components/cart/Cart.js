import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const { chooseOne, chooseAgain } = props;

  return (
    <div className="cart">
      <h4>Selected Laptops:</h4>
      {cart.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}

      <button
        onClick={() => chooseOne()}
        className="btn btn-outline-success my-3"
      >
        Choose 1 For Me
      </button>
      <button
        onClick={() => chooseAgain()}
        className="btn btn-outline-danger mb-2"
      >
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
