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

  const btnClick = (selectedProduct) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (cart.length < 4 && !exists) {
      newCart = [...cart, selectedProduct];
    } else {
      newCart = [...cart];
    }

    setCart(newCart);
  };

  /* choose one for me button */
  const chooseOne = () => {
    let value = Math.floor(Math.random() * cart.length);

    const selected = cart[value];
    alert(selected?.name);
  };

  /* choose again button */
  const chooseAgain = (selectedProduct) => {
    let nCart = [...cart, selectedProduct];
    nCart = [];

    setCart(nCart);
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
          <Cart
            cart={cart}
            chooseOne={chooseOne}
            chooseAgain={chooseAgain}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
