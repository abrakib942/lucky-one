import React from "react";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <h2>Selected Laptops: {cart.length}</h2>
    </div>
  );
};

export default Cart;
