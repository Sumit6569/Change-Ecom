import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Components/Home";
import About from "./Components/About";

import Newes from "./Components/Newes";
import Cart from "./Components/Cart";
import MaiContainer from "./Components/MaiContainer";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import Singup from "./Components/Singup";
import Contact from "./Components/Contact";
import CartSee from "./Components/CartSee";

function App() {
  //  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<MaiContainer />}>
          <Route
            index
            path="/"
            element={<Home cart={cart} setCart={setCart} />}
          />
          <Route
            path="/details/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<Newes />} />
          <Route path="/cartsee" element={<CartSee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
