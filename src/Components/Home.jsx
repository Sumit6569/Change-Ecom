import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productContext } from "../Utills/Contex";
import ExampleWrapper from "./ExampleWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice.js";
import axios from "../Utills/axios.jsx";
import StaggeredDropDown from "./StaggeredDropDown.jsx";
import Nav from "./Nav.jsx";

import Loader from "./Loader.jsx";
import ShuffleHero from "./ShuffleHero.jsx";
import { IoStarSharp } from "react-icons/io5";
import Footer from "./Footer.jsx"
import styled from "styled-components";






const Hero = styled.div`
  @media (max-width: 479px) {
     /* Half width minus margins */
    margin-right: 1.5rem;

    
  }
`;
const Product = styled.div`
  @media (max-width: 479px) {
    width: 40rem;
   
    
   
    gap: 8rem;
  }
`;
const ChildProduct = styled.div`
  @media (max-width: 479px) {
    margin-right: 15rem;


  }
`;
const Drop = styled.div`
  @media (max-width: 479px) {
    margin-right: 15rem;
    background-color:red;
  }
`;


function Home() {
  // Home({ cart, setCart })
  const [products] = useContext(productContext);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleAddItem(product) {
    if (cart.some((item) => item.id === product.id)) {
      console.log("added");
      return;
    }
    dispatch(addToCart(product));
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  // const addToCart = (product) => {
  //   const obj = {
  //     id: product.id,
  //     title: product.title,
  //     description: product.description,
  //     image: product.image,
  //   };

  //   setCart([...cart, obj]);
  //   localStorage.setItem("cart", JSON.stringify([...cart, obj]));

  //   toast.success("Item added to cart", {
  //     position: "top-right",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);
  const getproductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(category);
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);

    if (category != "undefined") getproductCategory();
  }, [category, products]);

  console.log(filteredProducts);

  return products ? (
    <>
      <div className="overflow-hidden">
        {/* <Nav /> */}
        <Drop>
          <div className="fixed bg-transparent rounded-lg">
            <StaggeredDropDown />
          </div>
        </Drop>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Hero>
          <ShuffleHero />
        </Hero>
        <Product>
          <div className="flex flex-wrap mt-1 gap-10 p-20 ml-20 ">
            {filteredProducts &&
              filteredProducts.map((product, i) => (
                <ChildProduct>
                  <div
                    key={product.id}
                    className="w-[250px] rounded-md border overflow-hidden border shadow-lg rounded-md "
                  >
                    <Link to={`/details/${product.id}`}>
                      <img
                        src={product.image}
                        alt="Product"
                        className="h-[200px] w-full rounded-t-md object-cover transition-all scale:1 "
                      />
                    </Link>
                    <div className="p-4">
                      <p class="text-sm font-medium text-green-500">5% Off</p>
                      <h1 className="inline-flex items-center text-lg font-semibold">
                        ${product.price}
                      </h1>
                      <p class="text-sm font-medium text-yellow-500 flex">
                        <IoStarSharp />
                        {product.rating.rate}
                      </p>
                      <button
                        type="button"
                        className="mt-4 w-full rounded-sm px-2 py-1.5 text-sm font-semibold text-white shadow-2xl hover:bg-[#6A38D9] transition-all scale:1"
                        onClick={() => handleAddItem(product)}
                      >
                        <ExampleWrapper />
                      </button>
                    </div>
                  </div>
                </ChildProduct>
              ))}
          </div>
        </Product>
        {/* <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <div
              key={p.id}
              className="card mr-3 mb-3 p-5 border shadow rounded w-[18%] h-[30vh] flex flex-col"
            >
              <Link to={`/details/${p.id}`}>
                <img
                  src={p.image}
                  alt="Product"
                  className="h-[200px] w-full rounded-t-md object-cover"
                />
                <h1 className="hover:text-blue-300">{p.title}</h1>
              </Link>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => handleAddItem(p)}
              >
                <ExampleWrapper />
              </button>
            </div>
          ))}
      </div> */}
      </div>
      <Footer />
    </>
  ) : (
    <div className="grid place-content-center bg-gray-400 px-4 py-24">
      <Loader />
    </div>
  );
}

export default Home;
