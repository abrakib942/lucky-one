import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const btnClick = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];

    if (cart.length < 4) {
      newCart = [...cart, product];
    } else {
      newCart = [...cart];
    }
    setCart(newCart);
  };

  return (
    <div>
      <h1 className="text">Buy Your Favourite Laptop</h1>

      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              btnClick={btnClick}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
