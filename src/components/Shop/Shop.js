import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [random, setRandom] = useState([]);

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

  const chooseOne = () => {
    console.log("clickone");
  };

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

      <div>
        <h2 className="text-center my-5">Questions and Answers</h2>
        <h5 className="ms-5 text-primary">1. How React Works</h5>
        <p className="ms-5">
          - ReactJS একটি ফ্লেক্সিবল, ডিক্লারেটিভ ও ইফেক্টিভ জাভাস্ক্রিপ্ট
          লাইব্রেরী। এটি একটি কম্পোনেন্ট-বেজড ফ্রন্ট-এন্ড লাইব্রেরী যা দিয়ে
          শুধু মাত্র একটি অ্যাপ্লিকেশনের ভিউ লেয়ার তৈরী করা যায়। এটি সর্বদাই
          একমুখী ডেটা প্রবাহ করে থাকে। যখন একটি রিয়েক্ট অ্যাপ ডিজাইন করা হয়,
          তখন প্যারেন্ট ও চাইল্ড কম্পোনেন্টের মধ্যে কানেকশন তৈরী করতে হয়। এতে
          করে খুব সহজে বিভিন্ন ইরর ডিবাগ করা যায়। ও কোনো বাগ পাওয়া গেলে সেটা
          দ্রুত ফিক্স করা সম্ভব হয়।
        </p>
        <h5 className="ms-5 text-primary">1. How useState Works</h5>
        <p className="ms-5">
          - useState() is an example built-in React hook that lets you use
          states in your functional components.Using the useState hook inside a
          function component, you can create a piece of state without switching
          to class components.It accepts an argument which is the initial value
          of the state property and returns the current value of state property
          and a method which is capable of updating that state property.
        </p>
      </div>
    </div>
  );
};

export default Shop;
